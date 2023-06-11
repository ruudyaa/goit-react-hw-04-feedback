import React from 'react';
import { StyledButton } from './FeedbackBtn.styled';
import PropTypes from 'prop-types';

export const FeedbackBtn = ({ type = 'button', children, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

FeedbackBtn.propTypes = {
  icon: PropTypes.any,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
