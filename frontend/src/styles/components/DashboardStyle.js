import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding-top: 50px;
  width: 90vw;
  margin-left: 50px;

  .dashboard__button_wrapper {
    display: grid;
    justify-content: center;

    .dashboard__result_ticket {
      margin-top: 30px;
      margin-bottom: 60px;
    }
  }

  .dashboard__searchForm {
    display: flex;
    justify-content: flex-end;
  }

  .dashboard__table {
    margin-top: 10px;
    margin-left: 60px;
  }
`;
