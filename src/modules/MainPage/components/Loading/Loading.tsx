import { Loader } from '@/components/ui/Loader/Loader';
import styles from './Loading.module.scss';

interface ILoadingProps {
  isLoading: boolean;
  text: string;
}

export const Loading = ({ isLoading, text }: ILoadingProps) => {
  if (!isLoading) {
    return null;

  }
  return (
    <div className={styles.root}>
      <Loader />
      <span className={styles.text}>{text}</span>
    </div>
  );
};
