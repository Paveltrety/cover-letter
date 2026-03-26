import styles from './Copy.module.scss';
import classNames from 'classnames';
import CopyIcon from '@/assets/copy.svg';
import { Toaster } from '../Toaster';
import { Tooltip } from 'react-tooltip';
import { useId } from 'react';

interface ICopyProps {
  content?: string;
  className?: string;
}

export const Copy = ({ className, content }: ICopyProps) => {
  const uniqId = useId();

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
    <>
      <Tooltip id={uniqId} anchorSelect={`#${uniqId}`} content="Скопировать" />
      <button id={uniqId} onClick={copyContent} className={classNames(styles.button, className)}>
        <CopyIcon className={classNames(styles.copyIcon)} />
      </button>
    </>
  );
};
