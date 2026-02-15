import { type ReactNode } from 'react';
import ErrorIcon from '@/assets/error.svg';

import styles from './ErrorToaster.module.scss';

interface IErrorToasterProps {
  message: ReactNode;
}

export const ErrorToaster = ({ message }: IErrorToasterProps) => (
  <div className={styles.root}>
    <div className={styles.colorLabel} />
    <ErrorIcon width={32} height={32} />
    <span className={styles.message}>{message}</span>
  </div>
);
