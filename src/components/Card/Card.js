import React, { useState } from 'react';
import styles from './Card.module.css';

const Card = ({ result }) => {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  const buttonStyles = [styles.button];
  if (liked) buttonStyles.push(styles['button--liked']);
  return (
    <div className={styles.container}>
      <img
        src={result?.img_src}
        alt='surface of mars captured by rover'
        className={styles.img}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>
          {result?.rover?.name} rover - {result?.camera?.full_name}
        </h2>
        <p className={styles.date}>{result?.earth_date}</p>
        <button className={buttonStyles.join(' ')} onClick={toggleLiked}>
          {liked ? 'Unlike' : 'Like'}
        </button>
      </div>
    </div>
  );
};

export default Card;
