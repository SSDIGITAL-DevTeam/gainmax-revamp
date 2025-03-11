export type ResumeError = {
  message: string;
  errors: {
    name: string[];
    nationality: string[];
    phone: string[];
    email: string[];
    position: string[];
    resume: string[];
    'g-recaptcha-response': string[];
  };
};
