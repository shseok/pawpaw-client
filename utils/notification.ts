/* eslint-disable import/no-extraneous-dependencies */
import { toast } from 'react-toastify';

type ToastType = 'error' | 'success';

const Notification = (
  type: ToastType,
  message: string,
  autoCloseTime: number = 5000,
) => {
  toast[type](message, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: autoCloseTime,
    hideProgressBar: true,
    closeButton: false,
    className: 'bg-grey-800',
    bodyClassName: 'bg-grey-800',
  });
};

export default Notification;
