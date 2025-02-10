import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { qwikify$ } from "@builder.io/qwik-react";
import NotionMagicLinkEmail from "~/components/emails/notion-magic-link";

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task

  return (
    <>
      <h1>Qwik/React mother of all demos</h1>

      <h3>Ok lets rock</h3>

      <QGreetings loginCode="Testing 1 2 testing" />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};

// NotionMagicLinkEmail

// qwikify$
export const QGreetings = qwikify$(NotionMagicLinkEmail, {
  eagerness: "visible",
  tagName: "react-email",
});
