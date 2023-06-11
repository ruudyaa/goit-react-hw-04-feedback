import { FeedbackBtn } from 'components/FeedbackBtn/FeedbackBtn';
import PropTypes, { arrayOf } from 'prop-types';
import React from 'react';
import { BtnWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {options.map(option => {
        return (
          <li key={option}>
            <FeedbackBtn
              key={option}
              type="button"
              value={option}
              children={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackBtn>
          </li>
        );
      })}
    </BtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
