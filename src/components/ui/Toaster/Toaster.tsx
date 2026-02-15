import { type ReactNode } from 'react';
import type { ToastOptions } from 'react-toastify';
import { Slide, toast } from 'react-toastify';

import { ErrorToaster, Success } from './components';
import styles from './Toaster.module.scss';

const DEFAULT_PARAMS = {
  closeButton: false,
  hideProgressBar: true,
  pauseOnFocusLoss: false,
  position: 'top-right',
  className: styles.wrapper,
  bodyClassName: styles.body,
  autoClose: 3000,
  transition: Slide,
} as ToastOptions;

export const Toaster = {
  success: (message: ReactNode, params?: ToastOptions) => {
    toast(<Success message={message} />, {
      ...DEFAULT_PARAMS,
      ...params,
    });
  },
  error: (message: ReactNode, params?: ToastOptions) => {
    toast(<ErrorToaster message={message} />, { ...DEFAULT_PARAMS, ...params });
  },
};
