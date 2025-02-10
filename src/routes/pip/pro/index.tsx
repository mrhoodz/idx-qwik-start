import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const openPipSig = useSignal<HTMLButtonElement | undefined>();
  const pipContentSig = useSignal<HTMLParagraphElement | undefined>();
  const countSig = useSignal(0);
  const countUpBTN = useSignal<HTMLButtonElement | undefined>();
  const countDwnBTN = useSignal<HTMLButtonElement | undefined>();

  const countUp = $(() => {
    countSig.value = countSig.value + 1;
  });

  const countDown = $(() => {
    countSig.value = countSig.value - 1;
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    console.log("inside browser console");

    countUpBTN.value?.addEventListener("click", async () => {
      await countUp();
    });

    const countUpEvent = { type: "click", listener: () => countDown() };
    documentPictureInPicture.addEventListener("enter", () => {
      console.log("entered the document picture in picture");

      countDwnBTN.value?.addEventListener(
        countUpEvent.type,
        countUpEvent.listener
      );
    });

    // Open a Picture-in-Picture window.
    openPipSig.value?.addEventListener("click", async () => {
      const pipWindow = await documentPictureInPicture.requestWindow({
        preferInitialWindowPlacement: true,
      });
      // Move the player to the Picture-in-Picture window.
      pipWindow.document.body.append(pipContentSig.value as any);
      console.log("Testing 1 2 testing");

      // Move the player back when the Picture-in-Picture window closes.
      pipWindow.addEventListener("pagehide", (event: PageTransitionEvent) => {
        countDwnBTN.value?.removeEventListener(
          countUpEvent.type,
          countUpEvent.listener
        );
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
        <section id="pipContent" ref={pipContentSig}>
          stufff that goes inside the PIP {countSig.value}
          <button ref={countUpBTN}>count up</button>
          <button ref={countDwnBTN}>count down</button>
        </section>
      </div>
      <button ref={openPipSig}>On picture in picture</button>
    </>
  );
});

export const head: DocumentHead = {
  title: "PIP Pro",
};
