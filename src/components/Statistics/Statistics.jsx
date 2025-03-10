import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
  return (
    <>
    <h3>Секція статистики</h3>
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {stats.map(({ id, label, percentage }) => (
          <li 
            className={css.item} 
            style={{ backgroundColor: getRandomHexColor() }}
            key={id} 
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
    </>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  )};