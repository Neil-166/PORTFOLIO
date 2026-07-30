import emailjs from '@emailjs/browser';

export interface ContactPayload { name: string; email: string; message: string; }

export async function sendContactMessage(payload: ContactPayload) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!serviceId || !templateId || !publicKey) throw new Error('Contact form is not configured yet. Please email Neil directly.');
  await emailjs.send(serviceId, templateId, { from_name: payload.name, reply_to: payload.email, message: payload.message, to_name: 'Neil Dua' }, { publicKey });
}
