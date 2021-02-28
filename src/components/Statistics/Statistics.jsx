import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.statistics}>
      <ul className={styles.statistics_option_list}>
        <li className={styles.statistics_option_list_item}>
          <p className={styles.statistics_option_item_date}>Good:{good}</p>
        </li>
        <li className={styles.statistics_option_list_item}>
          <p className={styles.statistics_option_item_date}>
            Neutral:{neutral}
          </p>
        </li>
        <li className={styles.statistics_option_list_item}>
          <p className={styles.statistics_option_item_date}>Bad:{bad}</p>
        </li>
        <li className={styles.statistics_option_list_item}>
          <p className={styles.statistics_option_item_date}>Total:{total}</p>
        </li>
        <li className={styles.statistics_option_list_item}>
          <p className={styles.statistics_option_item_date}>
            Positive feedback:
            {good > 0 ? positivePercentage : 0}%
          </p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
