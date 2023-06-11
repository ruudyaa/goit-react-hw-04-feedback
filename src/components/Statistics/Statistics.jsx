import React from 'react';
import PropTypes from 'prop-types';
import { StaticList, DescrStatistics } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  return total ? (
    <StaticList>
      <li>
        <DescrStatistics>
          Good: <span>{good}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          Neutral: <span>{neutral}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          Bad: <span>{bad}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          Total: <span>{total}</span>
        </DescrStatistics>
      </li>
      <li>
        <DescrStatistics>
          Positive feedback: <span>{positivePercentage}%</span>
        </DescrStatistics>
      </li>
    </StaticList>
  ) : (
    <Notification msg="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
