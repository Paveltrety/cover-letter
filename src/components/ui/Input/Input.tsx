import type { ChangeEvent } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';

interface IInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string;
  required?: boolean;
}

export const Input = ({ value, name, error, required, className, onChange, label, placeholder }: IInputProps) => {
  return (
    <div className={classNames(styles.root, className)}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <input name={name} id={name} value={value} onChange={onChange} placeholder={placeholder} className={styles.input} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
