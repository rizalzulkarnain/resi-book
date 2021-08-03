import React from 'react';
import MetaData from '../../Components/MetaData';
import Breadcrump from '../../Components/Breadcump/Breadcump';
import ResiForm from '../../Components/ResiForm/ResiForm';

import { NewResiContainer } from '../../styles';

const NewResi = () => {
  return (
    <>
      <MetaData title="AddNew Resi Page" />
      <NewResiContainer>
        <Breadcrump page="NewResi" />
        <div>
          <ResiForm />
        </div>
      </NewResiContainer>
    </>
  );
};

export default NewResi;
