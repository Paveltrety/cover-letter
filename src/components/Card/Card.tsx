import { type PropsWithChildren } from 'react';

import styles from './Card.module.scss';

export const Card = ({ children }: PropsWithChildren) => {
  return <div className={styles.root}>{children}</div>;
};
