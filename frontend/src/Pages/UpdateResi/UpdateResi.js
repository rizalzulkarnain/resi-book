import React from 'react';
import MetaData from '../../Components/MetaData';
import Breadcrump from '../../Components/Breadcump/Breadcump';
import UpdateResiForm from '../../Components/UpdateResiForm/UpdateResiForm';

import { NewResiContainer } from '../../styles';

const UpdateResi = () => {
  return (
    <>
      <MetaData title="Update Resi Page" />
      <NewResiContainer>
        <Breadcrump page="Update Resi" />
        <div>
          <UpdateResiForm />
        </div>
      </NewResiContainer>
    </>
  );
};

export default UpdateResi;
