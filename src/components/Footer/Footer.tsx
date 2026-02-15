import { SocialLinks } from '../SocialLinks/SocialLinks';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.root}>
      <SocialLinks />
    </div>
  );
};
