import React from 'react';
import moment from 'moment';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

const Chart = ({ sparkLineData }) => {
  const formattedData = sparkLineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;

        const date = moment()
          .subtract(timeToSubtract, 'hours')
          .format('ddd h:mma');
        return { value: price, date };
      } else if (idx === sparkLineData.length - 1) {
        const date = moment().format('ddd h:mma');
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  return (
    <>
      <LineChart width={1000} height={350} data={formattedData}>
        <Line type='monotone' dataKey='value' stroke='#8884d8' />
        <CartesianGrid stroke='gray' strokeDasharray='5 5' />
        <XAxis dataKey='date' interval={3} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  );
};

export default Chart;
