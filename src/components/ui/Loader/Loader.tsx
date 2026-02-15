import LoaderIcon from '@/assets/loader.svg';

import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.root}>
      <LoaderIcon className={styles.loader} />
    </div>
  );
};
