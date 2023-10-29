import PropTypes from 'prop-types';
import CSS from '../statistics/Statistics.module.css';
import { getRandomHexColor } from 'functions/random-color';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={CSS.statistics}>
      {title && <h2 className={CSS.title}>Upload stats</h2>}
      <ul className={CSS.statList}>
        {stats.map(stat => (
          <li
            className={CSS.statItem}
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={CSS.label}>{stat.label}</span>
            <span className={CSS.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
