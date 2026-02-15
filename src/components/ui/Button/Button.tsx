import classNames from 'classnames';
import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  isDisabled?: boolean;
  className?: string;
}

export const Button = ({ text, className, type, onClick, isDisabled }: IButtonProps) => {
  return (
    <button className={classNames(styles.root, className)} type={type} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
};
