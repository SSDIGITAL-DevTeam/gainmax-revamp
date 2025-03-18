import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { failToast, successToast } from '../config/toastConfig';
import { create, findJobPositions } from '@/modules/resumeModule';
import { ResumeError } from '@/@types';

const resumeErrorDefaultValue = {
  message: '',
  errors: {},
} as ResumeError;

export function useResume() {
  // states
  const [phone, setPhone] = useState<string>('');
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [jobPositions, setJobPositions] = useState<string[]>([] as string[]);
  const [resumeErrorMessages, setResumeErrorMessages] = useState<ResumeError>(resumeErrorDefaultValue);

  async function getJobPositions() {
    setIsFetching(true);

    try {
      const res = await findJobPositions();

      setJobPositions(res);
    } catch (error) {
      toast.error('Something went wrong', failToast);
    } finally {
      setIsFetching(false);
    }
  }

  async function sendResume(e: FormEvent<HTMLFormElement>, phone: string) {
    e.preventDefault();

    setIsSending(true);

    const formData = new FormData(e.currentTarget);
    formData.append('phone', `+${phone}`);

    console.log({formData})

    try {
      const res = await create(formData);

      toast.success(res.message, successToast);

      setResumeErrorMessages(resumeErrorDefaultValue);

      const formReset = e.target as HTMLFormElement;
      formReset.reset();
    } catch (error) {
      const err = error as ResumeError;

      setResumeErrorMessages(err);

      toast.error(err.message, failToast);

      throw error;
    } finally {
      setIsSending(false);
    }
  }

  return {
    getJobPositions,
    isSending,
    jobPositions,
    isFetching,
    phone,
    setPhone,
    setIsSending,
    sendResume,
    resumeErrorMessages,
  };
}
