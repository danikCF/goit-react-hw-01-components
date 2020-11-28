import React from 'react'
import styles from './FriendList.module.css'

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={styles.item} >
          <span className={isOnline ? styles.online : styles.offline}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
          </li>
        )
      })}
    </ul>
  )
};
