import React from 'react';
import PropTypes from 'prop-types';

import { MsgHistoryContainer } from '../../styles';

const MsgHistory = ({ msg }) => {
  if (!msg) return null;
  return (
    <MsgHistoryContainer>
      {msg.map((item, index) => (
        <div key={index} className="msghistory__chat">
          <div>
            <div>{item.date}</div>
            <div>{item.messageBy}</div>
          </div>
          <div className="msghistory__msgBox">{item.message}</div>
        </div>
      ))}
    </MsgHistoryContainer>
  );
};

MsgHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};

export default MsgHistory;
