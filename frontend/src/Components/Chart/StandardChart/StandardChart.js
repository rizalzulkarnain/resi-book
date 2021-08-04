import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { StandardChartContainer } from '../../../styles';

const StandardChart = ({ grid }) => {
  const getResi = [
    {
      date: '12 Jan 2021',
      priceProduct: 4000,
    },
    {
      date: '13 Feb 2021',
      priceProduct: 3000,
    },
    {
      date: '13 Mar 2021',
      priceProduct: 5000,
    },
    {
      date: '10 Apr 2021',
      priceProduct: 4000,
    },
  ];

  return (
    <StandardChartContainer>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={getResi}>
          <XAxis dataKey="date" stroke="#5550bd" />
          <Line type="monotone" dataKey={'priceProduct'} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </StandardChartContainer>
  );
};

export default StandardChart;
