import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Profile.module.css';

const Profile = () => {
  const location = useLocation();
  const { userName, userEmail } = location.state || {};
 
  return (
    <div className={styles.formContainer}>
      <div className={styles.heading}>
        <p className={styles.settingHeading}>Account Settings</p>
      </div>
      <div className={styles.profileInfo}>
        <div className={styles.profile}>
          <div className={styles.photoWrapper}>
            <img src="/assets/photo.png" alt="Profile" className={styles.profilePhoto}/>
            <img src="/assets/camera.png" alt="Camera" className={styles.cameraIcon}/>
          </div>
          <div className={styles.profileText}>
            <h5 style={{fontSize:"15px", margin: "0px"}}>{userName}</h5>
            <p style={{fontSize:"14px", margin: "0px"}}>{userEmail}</p>
          </div>
        </div>
        <p className={styles.description}>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </div>
    </div>
  )
}

export default Profile