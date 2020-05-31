import "notyf/notyf.min.css";

import { Notyf } from "notyf";

const bottomRight = new Notyf();
const bottomLeft = new Notyf({ position: { x: "left", y: "bottom" } });

export const showConnected = () =>
  bottomRight.success({ message: "Connected to VTT Bridge!", duration: 0, dismissible: true });

export const showCommands = (message) => bottomRight.success(message);

let visibilityToast;
export const showVisibility = (visible) => {
  bottomLeft.dismiss(visibilityToast);
  if (visible) {
    visibilityToast = bottomLeft.success({ message: "Commands are visible!", duration: 0, dismissible: true });
  } else {
    visibilityToast = bottomLeft.error({ message: "Commands are hidden!", duration: 0, dismissible: true });
  }
};