import * as starters from "../../assets/all_lines.json";
import { xcluders, puctuation } from "./patterns";

const isAppropriate = (message: string) => {
  let appropriate = true;
  puctuation.forEach((sign) => {
    message = message.replaceAll(sign, " ");
  });
  let items = message.split(" ");
  items.forEach((item) => {
    xcluders.forEach((xcluder) => {
      if (xcluder === item) appropriate = false;
    });
  });
  return appropriate;
};

export const getStarter = (selection: string = "", nsfwAllowed: boolean) => {
  const checkLines = (inpLines: any, nsfw: boolean) => {
    let outLines: any = [];
    inpLines.forEach((text: any) => {
      if (nsfw && !isAppropriate(text)) outLines.push(text);
      else if (!nsfw && isAppropriate(text)) outLines.push(text);
    });
    return outLines;
  };

  const file: any = starters;
  let lines: any = [];
  if (selection !== "")
    lines = checkLines(file.default[selection], nsfwAllowed);
  else
    Object.keys(file.default).forEach((category: string) => {
      lines = lines.concat(checkLines(file.default[category], nsfwAllowed));
    });

  let line = lines[Math.round(Math.random() * lines.length)];

  return {
    message: line,
    rValue: (55 + 40 * Math.random()).toFixed(1),
    shown: false,
  };
};
