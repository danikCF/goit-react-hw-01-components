import React from 'react'
import styles from './Statistics.module.css'

const random = () => Math.floor(Math.random() * 256);

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
            return (
                <li key={id} className={styles.item} style={{ backgroundColor: `rgb(${random()}, ${random()}, ${random()})` }}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                </li>
        )})}
    </ul>
      </section>
    </>
  );
};

export default Statistics;