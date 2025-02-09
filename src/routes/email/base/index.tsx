import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { qwikify$ } from "@builder.io/qwik-react";
import NotionMagicLinkEmail from "~/components/emails/notion-magic-link";

export default component$(() => {

  return (
    <>

      <QNotionMagicLinkEmail loginCode="this is the login code" />

    </>
  );
});

export const head: DocumentHead = {
  title: "React Email",
};


export const QNotionMagicLinkEmail = qwikify$(NotionMagicLinkEmail);