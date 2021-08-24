import * as lines from "../../assets/all_lines.json";

export const getStarter = (category: string) => {
  const file: any = lines;
  const selection = file.default[category.toString()];
  let line = selection[Math.floor(Math.random() * selection.length)];
  return line;
};
