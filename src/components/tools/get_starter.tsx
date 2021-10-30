import * as starters from "../../assets/all_lines.json";
import { xcluders, puctuation } from "./patterns";

// checks the message for inappropriate words and returns false if
// one was found
const isAppropriate = (message: string) => {
  let appropriate = true;
  // remove all the puctuation from the lines
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

// returns a starter message either sfw or nsfw
// If no category was specified a line from all the categories is
// randomly chosen
export const getStarter = (selection: string = "", nsfwAllowed: boolean) => {
  // returns an array of lines either sfw or not
  const checkLines = (inpLines: any, nsfw: boolean) => {
    let outLines: any = [];
    inpLines.forEach((text: any) => {
      if (nsfw && !isAppropriate(text)) outLines.push(text);
      else if (!nsfw && isAppropriate(text)) outLines.push(text);
    });
    return outLines;
  };
  // file var with type any so the default property does not throw an
  // error
  const file: any = starters;
  // empty array which appropriate lines get added to
  let lines: any = [];
  if (selection !== "")
    lines = checkLines(file.default[selection], nsfwAllowed);
  // iterates each category by getting the keys of the hookup lines
  // file object
  else
    Object.keys(file.default).forEach((category: string) => {
      // adds the fitting lines of each category to the resulting lines
      // array
      lines = lines.concat(checkLines(file.default[category], nsfwAllowed));
    });

  // randomly picks a line from the resulting array
  let line = lines[Math.round(Math.random() * lines.length)];

  return {
    message: line,
    rValue: (55 + 40 * Math.random()).toFixed(1),
    shown: false,
  };
};
