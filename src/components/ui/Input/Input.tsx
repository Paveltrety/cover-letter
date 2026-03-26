import type { ChangeEvent } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';
import PlusIcon from '@/assets/plus.svg';

interface IInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  onClear?: () => void;
}

export const Input = ({ value, name, error, disabled, required, onClear, className, onChange, label, placeholder }: IInputProps) => {
  const handleClearIcon = () => {
    if (!disabled) {
      onClear?.();
    }
  };
  return (
    <div
      className={classNames(styles.root, className, {
        [styles.withClearIcon]: onClear,
        [styles.disabled]: disabled,
      })}
    >
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <div className={styles.inputWrapper}>
        <input
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.input}
          disabled={disabled}
        />
        {!!value.length && onClear && <PlusIcon onClick={handleClearIcon} className={classNames(styles.clearIcon)} />}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
