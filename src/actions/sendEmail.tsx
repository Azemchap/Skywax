"use server";
import { Resend } from 'resend'
import { getErrorMessage, validString } from '../lib/utils';
import ContactForm from '../email/contactForm';
import { CreateEmailResponse } from 'resend/build/src/emails/interfaces';

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {

    const username = formData.get('username')
    const email = formData.get('email')
    const message = formData.get('message')

    if (!validString(email, 500)) {
        return { error: 'Invalid sender email' }
    }

    if (!validString(message, 2000)) {
        return { error: 'Invalid message' }
    }

    let data: CreateEmailResponse;

    try {
        data = await resend.emails.send({
            from: "My Website - Contact Form <onboarding@resend.dev> ",
            // to: 'nodemdivine5@gmail.com',
            to: 'azemchap@gmail.com',
            reply_to: email as string,
            subject: `New Order from ${username} `,
            react: <ContactForm message={message as string} username={username as string} email={email as string} />
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }

    return { data }
}