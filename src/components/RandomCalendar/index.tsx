import React from 'react';
import { addDays } from 'date-fns/esm';
import { isBefore, subYears } from 'date-fns';
import HeatMap from 'react-calendar-heatmap';

import {
  Container,
} from './styles';

type HeatMapValue = {
  date: Date;
  count: number;
}

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();
  return (
    <Container>
      <div className='wapper'>
        <HeatMap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatMapValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={(item: HeatMapValue) => {
            let clampedCount = 0;
            if (item) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
            }
            return `scale-${clampedCount}`;
          }}
          showWeekdayLabels
        />
      </div>
      <span>Random calendar (do not represent actual data)</span>
    </Container>
  );
}

const generateHeatMapValues = (startDate: Date, endDate: Date) => {
  const values: HeatMapValue[] = [];
  let currentDate = startDate;
  do {
    const count = Math.random() * 4;
    values.push({
      date: currentDate,
      count: Math.round(count),
    })
    currentDate = addDays(currentDate, 1);
  } while (isBefore(currentDate, endDate));
  return values;
};

export default RandomCalendar;
