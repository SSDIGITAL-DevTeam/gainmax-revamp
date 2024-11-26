import { ToastT } from 'sonner';

export const failToast: Omit<ToastT, 'id'> = {
  style: {
    backgroundColor: '#cc3300',
    color: '#EFEFEF',
    textAlign: 'center',
    fontSize: '14px',
  },
};

export const successToast: Omit<ToastT, 'id'> = {
  style: {
    backgroundColor: '#12A150',
    color: '#EFEFEF',
    textAlign: 'center',
    fontSize: '14px',
  },
};
