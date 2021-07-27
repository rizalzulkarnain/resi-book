import MetaData from '../../Components/MetaData';
import Breadcump from '../../Components/Breadcump/Breadcump';

import { ReportContainer } from '../../styles';

const Report = () => {
  return (
    <>
      <MetaData title="Analytics Page" />
      <ReportContainer>
        <Breadcump page="Report" />
        <h1>Report and Analysis</h1>
      </ReportContainer>
    </>
  );
};

export default Report;
