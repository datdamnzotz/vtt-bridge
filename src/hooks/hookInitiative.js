import { ROLL_INITIATIVE } from "../messages";
import createButton from "./createButton";
import { onElementLoad } from "../common";

const hookInitiative = (onClick) => {
  const elem = document.querySelector(".initiative");
  const button = createButton("roll", function () {
    onClick({
      type: ROLL_INITIATIVE,
      mod: elem.innerText,
    });
  });
  button.classList.add("m-t-10");
  elem.parentNode.appendChild(button);
  console.debug("Hooked initiative");
};

export default (onClick) =>
  onElementLoad(".initiative", () => hookInitiative(onClick));
