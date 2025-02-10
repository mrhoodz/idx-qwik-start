import type { Signal } from "@builder.io/qwik";
import { $, component$, Slot, useVisibleTask$ } from "@builder.io/qwik";

interface tryProps {
  name?: string;
  pipContent: Signal<HTMLParagraphElement | undefined>;
  pipTrigger: Signal<HTMLButtonElement | undefined>;
  pipContainer: string;
}

export const useDocumentPictureInPicture = () => {
  //   let state = "something";
  const x = {
    pageHideEvent: $(() => {}),
    pageEnterEvent: $(() => {}),
  };

  const setLeaveEvents = (data: any) => {
    x.pageHideEvent = data;
    return data;
  };
  const setEnterEvents = (data: any) => {
    x.pageEnterEvent = data;
    return data;
  };

  const DPIPcomponent = component$<tryProps>((props) => {
    const propsPIPcontent = props.pipContent.value;
    const propsPIPTrigger = props.pipTrigger.value;
    const propsContainer = props.pipContainer;
    const propsPagehide = x.pageHideEvent;
    const propsPageEnter = x.pageEnterEvent;

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(async () => {
      console.log(propsPIPcontent);
      //   console.log("porky value ", state);
      console.log("using useVisibletask$");

      documentPictureInPicture.addEventListener("enter", () => {
        // console.log("entered the document picture in picture");

        propsPageEnter();
      });

      // Open a Picture-in-Picture window.

      propsPIPTrigger?.addEventListener("click", async () => {
        const pipWindow = await documentPictureInPicture.requestWindow({
          //   preferInitialWindowPlacement: true,
        });
        // Move the player to the Picture-in-Picture window.
        pipWindow.document.body.append(propsPIPcontent as any);
        propsPIPcontent?.setAttribute("id", "pipContent");
        // Move the player back when the Picture-in-Picture window closes.
        pipWindow.addEventListener("pagehide", (event: PageTransitionEvent) => {
          propsPagehide();
          const playerContainer = document.querySelector(propsContainer);
          const contentInPIP = event.target.querySelector("#pipContent");
          playerContainer?.append(contentInPIP!);
        });
      });
    });
    return (
      <>
        <section>Some Jimber rish</section>;
        <div>
          <Slot />
        </div>
      </>
    );
  });

  return { ...x, DPIPcomponent, setLeaveEvents, setEnterEvents };
};
// TestCompoment("psososos", "ds", 2);
//
