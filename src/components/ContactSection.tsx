
import React, { FormEvent, useState } from 'react';
import { ArrowUpRight, Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import cvAsset from '../assets/mariya-babu-cv.pdf.asset.json';
import { profile } from '../data/portfolio';

const responseSheetUrl = 'https://script.google.com/macros/s/AKfycbxaAjTXOSglCG2kZUsAkYNdOpALUNtkL_aLfId12CiYCogDu4UT_KXBfdAQEpHBZhPu5g/exec';

const ContactSection = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatus('idle');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();
    formData.forEach((value, key) => body.append(key, String(value)));

    try {
      await fetch(responseSheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body,
      });
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line/10 bg-ink-2 py-24 md:py-28">
      <div className="gutter mx-auto max-w-screen-2xl">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
          <div>
            <p className="eyebrow">05 / The next chapter</p>
            <h2 className="section-heading mt-4">Let’s talk<br />about data.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-mist">Open to entry-level data analyst and business intelligence opportunities. I’d love to hear what your team is working on.</p>
            <div className="mt-9 space-y-5">
              <a href={`mailto:${profile.email}`} className="group flex items-center gap-4 text-bone">
                <Mail aria-hidden="true" className="h-5 w-5 text-crimson-2" />
                <span className="min-w-0 break-all text-sm">{profile.email}</span>
                <ArrowUpRight aria-hidden="true" className="ml-auto h-4 w-4 shrink-0 text-smoke transition-colors group-hover:text-crimson-2" />
              </a>
              <a href={`tel:${profile.phone.replaceAll(' ', '')}`} className="group flex items-center gap-4 text-bone">
                <Phone aria-hidden="true" className="h-5 w-5 text-crimson-2" />
                <span className="text-sm">{profile.phone}</span>
                <ArrowUpRight aria-hidden="true" className="ml-auto h-4 w-4 text-smoke transition-colors group-hover:text-crimson-2" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-bone">
                <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center text-xs font-bold text-crimson-2">in</span>
                <span className="text-sm">LinkedIn</span>
                <ArrowUpRight aria-hidden="true" className="ml-auto h-4 w-4 text-smoke transition-colors group-hover:text-crimson-2" />
              </a>
            </div>
          </div>

          <div className="border border-line/10 bg-ink p-6 sm:p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">Your name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Name"
                    className="w-full rounded-sm border border-line/15 bg-ink-2 px-4 py-3 text-bone placeholder:text-smoke focus:border-crimson-2 focus:outline-none focus:ring-1 focus:ring-crimson-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">Email address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-sm border border-line/15 bg-ink-2 px-4 py-3 text-bone placeholder:text-smoke focus:border-crimson-2 focus:outline-none focus:ring-1 focus:ring-crimson-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mist">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="How can we work together?"
                    className="w-full resize-y rounded-sm border border-line/15 bg-ink-2 px-4 py-3 text-bone placeholder:text-smoke focus:border-crimson-2 focus:outline-none focus:ring-1 focus:ring-crimson-2"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  disabled={isSending}
                  className="h-12 w-full justify-between rounded-sm bg-crimson px-5 text-primary-foreground hover:bg-crimson-2"
                >
                  {isSending ? 'Sending…' : 'Send message'}
                  <Send aria-hidden="true" />
                </Button>
                {status === 'success' && (
                  <p className="text-sm text-status-success" role="status">Thanks — your message has been sent.</p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-destructive" role="alert">Something went wrong. Please email me directly.</p>
                )}
              </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
