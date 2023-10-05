/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from 'react';
import { toast, ToastOptions, CloseButtonProps } from 'react-toastify';
import Alert from 'public/Alert.svg';
import Check from 'public/Check.svg';

const defaultToastOptions: ToastOptions = {
  position: toast.POSITION.BOTTOM_CENTER,
  hideProgressBar: true,
  pauseOnHover: false,
};

function CloseButton({ closeToast }: CloseButtonProps) {
  return (
    <button
      type="button"
      className="header4 text-primary-200"
      onClick={closeToast}
    >
      확인
    </button>
  );
}

const Toast = {
  success: (
    message: ReactNode,
    autoCloseTime: number = 3000,
    options: ToastOptions = {},
  ) => {
    toast.success(message, {
      ...defaultToastOptions,
      autoClose: autoCloseTime,
      closeButton: false,
      icon: <Check />,
      bodyClassName: 'header4',
      ...options,
    });
  },

  error: (
    message: ReactNode,
    autoCloseTime: number = 5000,
    options: ToastOptions = {},
  ) => {
    toast.error(message, {
      ...defaultToastOptions,
      autoClose: autoCloseTime,
      icon: <Alert />,
      closeButton: CloseButton,
      closeOnClick: false,
      bodyClassName: 'body1 flex flex-row items-center justify-between',
      ...options,
    });
  },
};

export default Toast;
