const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();
const bcrypt = require('bcryptjs');
const { signAccessToken } = require('../utils/jwt');

const salt = bcrypt.genSaltSync(12);

exports.register = async (data) => {
  const { email, password, name } = data;
  data.password = bcrypt.hashSync(data.password, salt);
  data.confirmPassword = bcrypt.hashSync(data.confirmPassword, salt);
  let user = prisma.user.create({
    data: {
      email,
      password,
      name,
    },
  });

  data.accessToken = await signAccessToken(user);

  return data;
};

exports.login = async (data) => {
  const { email, password } = data;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw createError.NotFound('User not registered');
  }

  const checkPassword = bcrypt.compareSync(password, user.password);
  if (!checkPassword)
    throw createError.Unauthorized('Email address or password not valid');

  delete user.password;

  const accessToken = await signAccessToken(user);

  return { ...user, accessToken };
};
