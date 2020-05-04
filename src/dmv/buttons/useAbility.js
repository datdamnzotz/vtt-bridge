import * as classes from "../classes";
import * as commands from "../commands";

import { createButton, withLeftMargin, withTopMargin } from "../elements";

import { onElementLoad } from "../../common";

/**
 * Add use buttons for abilities.
 *
 * @param {Function} onClick
 */
export const addUseAbilityButtons = (onClick) => {
  onElementLoad(".actions p span", () =>
    ready(onClick, ".actions", "action", classes.useAction)
  );

  onElementLoad(".bonusActions p span", () =>
    ready(onClick, ".bonusActions", "bonus action", classes.useBonusAction)
  );

  onElementLoad(".features\\,Traits\\,AndFeats p span", () =>
    ready(
      onClick,
      ".features\\,Traits\\,AndFeats",
      "feature",
      classes.useFeature
    )
  );

  onElementLoad(".reactions p span", () =>
    ready(onClick, ".reactions", "reaction", classes.useReaction)
  );
};

const ready = (onClick, selector, label, buttonClass) => {
  const parent = document.querySelector(selector);
  const children = parent.querySelectorAll("p");
  for (const child of children) {
    // There may be more spans, but we don't care about them.
    const [abilitySpan, detailsSpan, ,] = child.querySelectorAll("span");
    const ability = abilitySpan.innerText;
    const details = detailsSpan.innerText;
    const button = createButton(
      "use",
      function () {
        onClick(commands.useAbility(ability, details));
      },
      [withTopMargin(), withLeftMargin(), buttonClass]
    );
    child.appendChild(button);
  }
  console.debug("Created " + children.length + " use " + label + " buttons");
};