import styles from './Copy.module.scss';
import classNames from 'classnames';
import CopyIcon from '@/assets/copy.svg';
import { Toaster } from '../Toaster';

interface ICopyProps {
  content?: string;
  className?: string;
}

export const Copy = ({ className, content }: ICopyProps) => {
  const copyContent = async () => {
    try {
      if (content) {
        await navigator.clipboard.writeText(content);

        Toaster.success('Текст скопирован');
      }
    } catch {
      Toaster.error('Скопировать не удалось');
    }
  };
  return (
    <button onClick={copyContent} className={classNames(styles.button, className)}>
      <CopyIcon className={classNames(styles.copyIcon)} />
    </button>
  );
};
