import EmailIcon from '@/assets/email.svg';
import GithubIcon from '@/assets/github.svg';
import InstagramIcon from '@/assets/instagram.svg';
import TelegramIcon from '@/assets/telegram.svg';

import styles from './SocialLinks.module.scss';

export const SocialLinks = () => {
  return (
    <div className={styles.root}>
      <a href={'mailto:pasha120598@gmail.com'} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <EmailIcon />
      </a>
      <a href={'https://github.com/Paveltrety'} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <GithubIcon />
      </a>
      <a href={'https://www.instagram.com/paveltrety'} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <InstagramIcon />
      </a>
      <a href={'https://t.me/paveltrety'} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <TelegramIcon />
      </a>
    </div>
  );
};
