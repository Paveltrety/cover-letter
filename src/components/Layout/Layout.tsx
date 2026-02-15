import { ToastContainer } from 'react-toastify';
import type { PropsWithChildren } from 'react';

import styles from './Layout.module.scss';
import { Footer } from '../Footer/Footer';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.root}>
      <ToastContainer />
      <div className={styles.wrapper}>
        <header className={styles.header}></header>

        <main className={styles.content}>{children}</main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </div>
  );
};
