import styles from './StackCard.module.css';

import CircularProgress from '@mui/material/CircularProgress';

const StackCard = ({ title, seniority, percentual, description, iconName }) => {
  return (
    <div className={styles.container}>
        <div className={styles.titleGroup}>
            <div className={styles.title}>
                <i className={`${iconName}`}></i>

                <div className={styles.textGroup}>
                    <h3>{title}</h3>
                    <h4>{seniority}</h4>
                </div>
            </div>

            <CircularProgress
                sx={{ color: "#40A070", marginLeft: 'auto' }}
                variant="determinate"
                value={percentual}
            />
        </div>

        <p>{description}</p>
    </div>
  );
}

export default StackCard;