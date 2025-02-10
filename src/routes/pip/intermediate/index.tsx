import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { qwikify$ } from "@builder.io/qwik-react";
import NotionMagicLinkEmail from "~/components/emails/notion-magic-link";

export default component$(() => {
  const openPipSig = useSignal<HTMLButtonElement | undefined>();
  const pipContentSig = useSignal<HTMLParagraphElement | undefined>();
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    console.log("fdfdsf");

    // Open a Picture-in-Picture window.
    openPipSig.value?.addEventListener("click", async () => {
      const pipWindow = await documentPictureInPicture.requestWindow({
        preferInitialWindowPlacement: true,
      });

      // Move the player to the Picture-in-Picture window.
      pipWindow.document.body.append(pipContentSig.value as any);
      console.log("motot tot  ");

      // Move the player back when the Picture-in-Picture window closes.
      pipWindow.addEventListener("pagehide", (event: PageTransitionEvent) => {
        const playerContainer = document.querySelector("#pipContentContainer");
        const contentInPIP = event.target.querySelector("#pipContent");
        playerContainer?.append(contentInPIP!);
      });
    });
  });

  return (
    <>
      <h1>Pip mother of all demos</h1>

      <h3>Ok lets rock</h3>

      <div id="pipContentContainer">
        <p id="pipContent" ref={pipContentSig}>
          stufff that goes inside the PIP
        </p>
      </div>
      <button ref={openPipSig}>On picture in picture</button>
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
