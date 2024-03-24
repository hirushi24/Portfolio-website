import { Resend } from 'resend';

const resend = new Resend('re_123456789');

resend.apiKeys.list();

resend.apiKeys.create({ name: '' });

const fromEmail = process.env.FROM_EMAIL;

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Silva <hirushisilva005@gmail.com>',
      to: ['hirushisilva005@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}