import styles from './NotFound.module.css';

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404 - Page Not Found</h1>

            <p className={styles.message}>Sorry, the page you are looking for does not exist.</p>

            <Link to="/" className={styles.link}>Go back to Home</Link>
        </div>
    );
}

export default NotFound;