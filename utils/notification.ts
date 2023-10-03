/* eslint-disable import/no-extraneous-dependencies */
import { toast } from 'react-toastify';

type ToastType = 'error' | 'success';

const Notification = (msg: string, type: ToastType) => {
  toast[type](msg, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default Notification;
