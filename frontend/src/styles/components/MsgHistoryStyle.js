import styled from 'styled-components';

export const MsgHistoryContainer = styled.div`
  margin-top: 50px;

  .msghistory__chat {
    margin-top: 20px;
    width: 50vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .msghistory__msgBox {
      padding: 1rem;
      width: 80%;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
    }
  }

  .msghistory__chat:nth-child(even) {
    margin-top: 20px;
    width: 50vw;

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    .msghistory__msgBox {
      padding: 1rem;
      width: 80%;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
    }
  }
`;
