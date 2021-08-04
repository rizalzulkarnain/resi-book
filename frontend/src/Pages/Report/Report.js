import MetaData from '../../Components/MetaData';
import Breadcump from '../../Components/Breadcump/Breadcump';
import StandardChart from '../../Components/Chart/StandardChart/StandardChart';
import PieChart from '../../Components/Chart/PieChart/PieChart';

import { ReportContainer } from '../../styles';

const Report = () => {
  return (
    <>
      <MetaData title="Analytics Page" />
      <ReportContainer>
        <Breadcump page="Report" />
        <div>
          <StandardChart grid />
          <PieChart />
        </div>
      </ReportContainer>
    </>
  );
};

export default Report;
