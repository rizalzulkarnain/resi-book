import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TableDashboardContainer } from '../../styles';

const TableDashboard = ({ resi }) => {
  const history = useHistory();

  if (!resi.length) return null;
  return (
    <TableDashboardContainer>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Number Resi</th>
            <th scope="col">Product Name</th>
            <th scope="col">Address</th>
            <th scope="col">Courier</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Postage Fee</th>
          </tr>
        </thead>
        <tbody>
          {resi.length &&
            resi.map((row) => (
              <tr key={row.id} onClick={() => history.push(`/resi/${row.id}`)}>
                <th scope="row">{row.id}</th>
                <td>{row.numberResi}</td>
                <td>{row.productName}</td>
                <td>{row.address}</td>
                <td>{row.courier}</td>
                <td>{row.status}</td>
                <td>{row.date}</td>
                <td>{row.priceProduct}</td>
                <td>{row.postagePrice}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableDashboardContainer>
  );
};

TableDashboard.propTypes = {
  resi: PropTypes.array.isRequired,
};

export default TableDashboard;
