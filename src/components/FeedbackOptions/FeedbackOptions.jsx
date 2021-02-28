import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.feedbackOptions}>
    {options.map(element => (
      <button
        className={styles.feedbackOptions_button}
        key={element}
        type="button"
        onClick={onLeaveFeedback}
      >
        {element}
      </button>
    ))}
  </div>
);
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
