export {};

declare global {
  interface DocumentPictureInPictureOptions {
    width?: number;
    height?: number;
    disallowReturnToOpener?: boolean;
    preferInitialWindowPlacement?: boolean;
  }

  interface DocumentPictureInPictureEventMap {
    enter: Event;
    leave: Event;
  }

  interface DocumentPictureInPicture {
    requestWindow(options?: DocumentPictureInPictureOptions): Promise<Window>;
    readonly window: Window | null;
    onenter: ((event: Event) => void) | null;
    onleave: ((event: Event) => void) | null;
    addEventListener<K extends keyof DocumentPictureInPictureEventMap>(
      type: K,
      listener: (event: DocumentPictureInPictureEventMap[K]) => void,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof DocumentPictureInPictureEventMap>(
      type: K,
      listener: (event: DocumentPictureInPictureEventMap[K]) => void,
      options?: boolean | EventListenerOptions
    ): void;
  }

  interface Window {
    documentPictureInPicture: DocumentPictureInPicture;
  }

  interface WindowWithQuery extends Window {
    querySelector(selector: string): Element | null;
  }

  interface PageTransitionEvent extends Event {
    target: WindowWithQuery;
  }

  const documentPictureInPicture: DocumentPictureInPicture;
}
