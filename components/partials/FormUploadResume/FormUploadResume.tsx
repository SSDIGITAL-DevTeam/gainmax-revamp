'use client';

import { ChangeEvent, FormEvent, JSX, useRef, useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogPortal, DialogOverlay } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import ReCAPTCHA from 'react-google-recaptcha';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useMediaQuery } from 'usehooks-ts';
import { useResume } from '@/app/hooks/useResume';

const allowedFileTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
import { objectHasProperty } from '@/utils/objects';

export default function FormUploadResume(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState<string>('');
  const [isFileTypeAllowed, setIsFileTypeAllowed] = useState<boolean>(true);
  const fileNameRef = useRef<HTMLParagraphElement | null>(null);
  const { getJobPositions, jobPositions, isSending, sendResume, resumeErrorMessages } = useResume();
  const captchaRef = useRef<ReCAPTCHA>(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await sendResume(e, phone);
    setIsOpen(false);
    captchaRef.current?.reset();
    setPhone('');
  }

  useEffect(() => {
    getJobPositions();
  }, []);

  async function handleImportFile(e: ChangeEvent<HTMLInputElement>) {
    const file: File | null | undefined = e.currentTarget.files?.item(0);
    if (file) {
      if (!allowedFileTypes.includes(file?.type as string)) {
        setIsFileTypeAllowed(false);
        fileNameRef.current!.textContent = '';
        return;
      }
      setIsFileTypeAllowed(true);
      fileNameRef.current!.textContent = file?.name as string;
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white self-start px-10 rounded-full" size="lg">
          Upload Resume
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40" />
        <DialogContent className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[90%] max-w-4xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-lg z-[99] p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-orange-600">UPLOAD RESUME</DialogTitle>
          </DialogHeader>

          <form id="upload-resume-form" onSubmit={handleSubmit} className="mt-4">
            <div className="space-y-6">
              <p>Fill up the form with the following particulars:</p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Name" className={`${objectHasProperty(resumeErrorMessages.errors, 'name') ? 'border-red-500' : ''}`} disabled={isSending} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality</Label>
                  <Input id="nationality" name="nationality" placeholder="Nationality" className={`${objectHasProperty(resumeErrorMessages.errors, 'nationality') ? 'border-red-500' : ''}`} disabled={isSending} required />
                </div>

                <div className="relative space-y-2">
                  <Label>Phone Number</Label>
                  <PhoneInput
                    containerClass="w-full"
                    inputStyle={{ width: '100%', height: '2.5rem' }}
                    buttonClass={`rounded-l-lg  ${objectHasProperty(resumeErrorMessages.errors, 'phone') ? 'border-2 border-red-500' : 'border-2 border-input'}`}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    country={'sg'}
                    enableSearch
                  />
                  {isSending && <div className="absolute inset-0 rounded-lg bg-white/40" />}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Email" className={`${objectHasProperty(resumeErrorMessages.errors, 'email') ? 'border-red-500' : ''}`} disabled={isSending} required />
                </div>
              </div>

              <div className="rounded-lg border border-input p-4">
                <Label className="mb-4 block">Key Experiences</Label>
                <RadioGroup name="position" className={`grid ${isSmallScreen ? 'grid-cols-1' : 'grid-cols-3'} gap-4`} required>
                  {jobPositions?.map((position) => (
                    <div key={position} className="flex items-center space-x-2">
                      <RadioGroupItem value={position} id={position} disabled={isSending} />
                      <Label htmlFor={position}>{position}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <Button
                    type="button"
                    onClick={() => {
                      document.getElementById('resume')?.click();
                    }}
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50"
                    disabled={isSending}
                  >
                    Upload Resume
                  </Button>

                  <p ref={fileNameRef} className="text-sm text-gray-600" />

                  {!isFileTypeAllowed && <div className="rounded-sm bg-red-100 px-3 py-1 text-center text-red-600 sm:w-auto w-full">File type not allowed!</div>}
                </div>

                {objectHasProperty(resumeErrorMessages.errors, 'resume') && <p className="text-sm text-red-500">{resumeErrorMessages.errors.resume[0]}</p>}

                <input onChange={handleImportFile} className="hidden" type="file" name="resume" id="resume" />

                <p className="text-xs text-gray-600">DOC, DOCX, PDF (Max 5MB)</p>
              </div>

              <div className="relative w-max">
                <ReCAPTCHA ref={captchaRef} sitekey={process.env.NEXT_PUBLIC_SITE_KEY} />
                {objectHasProperty(resumeErrorMessages.errors, 'g-recaptcha-response') && <small className="text-red-500">Please check re-captcha</small>}
                {isSending && <div className="absolute inset-0 rounded bg-black/10" />}
              </div>
            </div>
          </form>

          <DialogFooter className="flex gap-x-2 mt-6">
            <Button type="button" variant="ghost" onClick={() => setIsOpen(false)} className="text-gray-600 hover:bg-gray-100">
              Cancel
            </Button>
            <Button form="upload-resume-form" type="submit" className="bg-orange-600 hover:bg-orange-700 text-white" disabled={isSending}>
              {isSending ? 'Submitting...' : 'Submit Application'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
