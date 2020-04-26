import { ROLL_SKILL } from "../messages";
import createButton from "./createButton";
import { onElementLoad } from "../common";

const hookSkills = (onClick) => {
  const rows = document.querySelector(".skills").querySelectorAll("tr");
  for (const row of rows) {
    const cell = document.createElement("td");
    const button = createButton("roll", function () {
      onClick({
        type: ROLL_SKILL,
        skill: row.querySelector(".skill-name").innerText,
        mod: row.querySelector(".skillbonus").innerText,
      });
    });
    button.classList.add("m-l-10");
    cell.appendChild(button);
    row.appendChild(cell);
  }
  console.debug("Hooked " + rows.length + " skills");
};

export default (onClick) => onElementLoad(".skills", () => hookSkills(onClick));
