/** @jsxImportSource react */

import { type RequestHandler } from '@builder.io/qwik-city';
import { render } from '@react-email/render';
import KoalaWelcomeEmail from '~/components/emails/koala-welcome';
 
export const onRequest: RequestHandler = async (request) => {


  const html = await render(<KoalaWelcomeEmail userFirstname='Tinotenda Muringami'/>, {
    pretty: true,
    
  });


request.html(200, html)
};
