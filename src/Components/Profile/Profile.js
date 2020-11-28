import React from 'react'
import styles from './Profile.module.css';

const Profile = ({ user }) => {
  return (
    <div className ={styles.profile}>
      <div className ={styles.description}>
        <img
          src={user.avatar}
          alt={user.name}
          className ="avatar"
        />
         <p className={styles.name}>{user.name}</p>
      <p className={styles.tag}>@{user.tag}</p>
      <p className={styles.location}>{user.location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{user.stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{user.stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
</div>
    )
}

export default Profile;
