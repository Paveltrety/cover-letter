import { type ReactNode } from 'react';
import SuccessIcon from '@/assets/success.svg';

import styles from './Success.module.scss';

interface ISuccessProps {
  message: ReactNode;
}

export const Success = ({ message }: ISuccessProps) => (
  <div className={styles.root}>
    <div className={styles.colorLabel} />
    <SuccessIcon width={32} height={32} />
    <span className={styles.message}>{message}</span>
  </div>
);
