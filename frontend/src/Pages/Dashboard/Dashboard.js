import { useState, useEffect } from 'react';
import MetaData from '../../Components/MetaData';
import SearchForm from '../../Components/SearchForm/SearchForm';

import TableDashboard from '../../Components/TableDashboard/TableDashboard';

import { DashboardContainer, Button } from '../../styles';

import dataResi from '../../data/data.json';

const Dashboard = ({ history }) => {
  const [str, setStr] = useState('');
  const [displayResi, setDisplayResi] = useState(dataResi);

  useEffect(() => {}, [str, displayResi]);

  const handleOnChange = (e) => {
    setStr(e.target.value);
    searchResi(e.target.value);
  };

  const searchResi = (str) => {
    const filterResi = dataResi.filter((row) =>
      row.productName.toLowerCase().includes(str.toLowerCase())
    );

    setDisplayResi(filterResi);
  };

  return (
    <>
      <MetaData title="Dashboard Page" />
      <DashboardContainer>
        <div className="dashboard__button_wrapper">
          <Button
            onClick={() => history.push('/new')}
            modifiers="newTransaction"
          >
            Add new
          </Button>
          <div className="dashboard__result_ticket">
            <div>Total: 50</div>
            <div>Pending: 55</div>
          </div>
        </div>

        <div className="dashboard__searchForm">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </div>

        <div className="dashboard__table">
          <h1>Recently Added</h1>
          <TableDashboard resi={displayResi} />
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
