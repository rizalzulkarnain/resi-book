import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import MetaData from '../../Components/MetaData';
import Breadcrump from '../../Components/Breadcump/Breadcump';
import MsgHistory from '../../Components/MsgHistory/MsgHistory';

import { ResiContainer, Button } from '../../styles';

import resi from '../../data/data.json';
import CommentForm from '../../Components/CommentForm/CommentForm';

const detailResi = resi[0];
const Resi = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {}, [message]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    setMessage('');
  };
  const params = useParams();
  const history = useHistory();
  const { id } = params;

  return (
    <>
      <MetaData title="Resi Detail" />
      <ResiContainer>
        <Breadcrump page="Resi" />
        <div className="resi__wrapper">
          <div className="resi__detailResi">
            <div>Number Resi: {detailResi.numberResi}</div>
            <div>Product Name: {detailResi.productName}</div>
            <div>Address: {detailResi.address}</div>
            <div>Courier: {detailResi.courier}</div>
            <div>Status: {detailResi.status}</div>
            <div>Date: {detailResi.date}</div>
            <div>Product Price: {detailResi.priceProduct}</div>
            <div>Product Postage Fee: {detailResi.postagePrice}</div>
            {detailResi.history && <MsgHistory msg={detailResi.history} />}
            <CommentForm
              message={message}
              handleOnChange={handleOnChange}
              handleSubmit={handleSubmit}
            />
          </div>
          <div>
            <div className="resi__button">
              <Button
                modifiers="newTransaction"
                onClick={() => history.push(`/update/${id}`)}
              >
                Update Resi
              </Button>
            </div>
          </div>
        </div>
      </ResiContainer>
    </>
  );
};

export default Resi;
