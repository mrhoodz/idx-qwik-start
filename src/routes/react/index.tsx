import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { qwikify$ } from "@builder.io/qwik-react";
import NotionMagicLinkEmail from "~/components/emails/notion-magic-link";
import { MUIButton, MUISlider, TableApp } from "~/integrations/react/mui";

export default component$(() => {
  const show = useSignal(false);
  const count = useSignal(0);
  const variant = useSignal<"contained" | "outlined" | "text">("contained");

  return (
    <>
      <h1>Qwik/React mother of all demos</h1>

<h3>Ok lets rock</h3>

<QGreetings  />

    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik React",
};


export const QGreetings = qwikify$(NotionMagicLinkEmail , {eagerness:"visible"});