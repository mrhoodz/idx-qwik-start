/** @jsxImportSource react */

// import { component$ } from '@builder.io/qwik';
import { type RequestHandler } from "@builder.io/qwik-city";
import { render } from "@react-email/render";
import NotionMagicLinkEmail from "~/components/emails/notion-magic-link";

export const onRequest: RequestHandler = async (request) => {
  const html = await render(
    <NotionMagicLinkEmail loginCode="this is the login code" />,
    {
      pretty: true,
    }
  );

  request.html(200, html);
};

// export default component$(() => {
//   return <div>You are logged in.</div>;
// });

// function isLoggedIn() {
//   return true; // Mock login as true
// }
