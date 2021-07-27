import { useState } from 'react';
import { toast } from 'react-toastify';

import { validText } from '../../utils/validation';

import { FormResiContainer, Button } from '../../styles';

const UpdateResiForm = () => {
  const [resi, setResi] = useState('');
  const [product, setProduct] = useState('');
  const [address, setAddress] = useState('');
  const [courier, setCourier] = useState('');
  const [status, setStatus] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');
  const [postage, setPostage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await validText(resi, product, address);

    if (!isValid) {
      toast.error('Please, input min.3 characters !');
      return;
    }

    console.log(resi, product, address, courier, status, date);

    setResi('');
    setProduct('');
    setAddress('');
    setCourier('');
    setStatus('');
    setDate('');
    setPrice('');
    setPostage('');
  };

  return (
    <FormResiContainer>
      <h1 className="resiForm__text_addNew">Update Resi</h1>

      <form onSubmit={handleSubmit}>
        <div className="wrapper__inputLabel">
          <div>
            <label>Number Resi:</label>
          </div>
          <input
            type="text"
            placeholder="Enter Number Resi"
            value={resi}
            onChange={(e) => setResi(e.target.value)}
          />
        </div>

        <div className="wrapper__inputLabel">
          <div>
            <label>Product Name:</label>
          </div>
          <input
            type="text"
            placeholder="Enter Product Name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </div>

        <div className="wrapper__inputLabel">
          <div>
            <label>Courier:</label>
          </div>
          <input
            type="text"
            placeholder="Enter Courier Service"
            value={courier}
            onChange={(e) => setCourier(e.target.value)}
          />
        </div>

        <div className="wrapper__inputLabel">
          <div>
            <label>Address:</label>
          </div>
          <textarea
            type="text"
            rows="4"
            cols="50"
            placeholder="Enter Product Name"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="wrapper__inputLabel">
          <div>
            <label>Status:</label>
          </div>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Choose Status</option>
            <option value="sending">Sending</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="success">Success</option>
          </select>
        </div>

        <div className="wrapper__inputLabel">
          <div>
            <label>Product Name:</label>
          </div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="wrapper__inputLabel">
          <div>
            <label>Product Price:</label>
          </div>
          <input
            type="number"
            placeholder="Enter Price of Product"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="wrapper__inputLabel">
          <div>
            <label>Product Postage Fee:</label>
          </div>
          <input
            type="number"
            placeholder="Enter Postage Fee"
            value={postage}
            onChange={(e) => setPostage(e.target.value)}
          />
        </div>

        <br />
        <div>
          <Button
            modifiers="submit"
            type="submit"
            disabled={
              !product && !resi && !courier && !address && !date && !status
            }
          >
            Update
          </Button>
        </div>
      </form>
    </FormResiContainer>
  );
};

export default UpdateResiForm;
