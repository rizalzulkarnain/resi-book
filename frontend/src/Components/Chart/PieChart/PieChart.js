import { useState } from 'react';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';
import { Text } from '@visx/text';

import { PieChartContainer } from '../../../styles';

const getResi = [
  {
    productName: 'PS 5',
    productPrice: 200,
    color: '#0033ad',
  },
  {
    productName: 'Adidas',
    productPrice: 100,
    color: '#00ffbd',
  },
  {
    productName: 'Nike',
    productPrice: 50,
    color: '#00f4455',
  },
];

const PieChart = () => {
  const [active, setActive] = useState(null);
  const width = 400;
  const half = width / 2;

  return (
    <PieChartContainer>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={getResi}
            pieValue={(data) => data.productPrice}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size =
                active && active.productName === data.productName ? 12 : 8;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.productName}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {active ? (
            <>
              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {`${active.productPrice} ${active.productName}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
                {`${getResi.length} Transaction`}
              </Text>
            </>
          )}
        </Group>
      </svg>
    </PieChartContainer>
  );
};

export default PieChart;
