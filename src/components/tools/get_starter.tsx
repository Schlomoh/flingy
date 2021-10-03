import * as lines from "../../assets/all_lines.json";

export const getStarter = (category: any) => {
  const file: any = lines;
  const selection = file.default[category.toString()];
  let line = selection[Math.round(Math.random() * selection.length)];
  return {
    message: line,
    rValue: (55 + 40 * Math.random()).toFixed(1),
    shown: false
  };
};

export const checkMessage = (message: string) => {
  const xcluders = [
    "butt",
    "penis",
    "dick",
    "pussy",
    "fuck",
    "sex",
    "ass",
    "bang",
    "sexual",
    "hot",
    "hotter",
    "sexy",
    "knees",
    "love",
    "erect",
    "erected",
    "nipple",
    "nipples",
    "boobs",
    "tits",
    "ram",
    "babe",
    "baby",
    "d",
    "naked",
    "nude",
    "nudes",
    "hit",
  ];

  let appropriate = true;
  const items = message
    .toLowerCase()
    .replaceAll("?", "")
    .replaceAll(":", "")
    .replaceAll(";", "")
    .replaceAll('"', "")
    .replaceAll(".", "")
    .replaceAll(",", "")
    .split(" ");
  for (let i in items) {
    for (let x in xcluders) {
      if (x === i) {
        appropriate = false;
      }
    }
  }
  return appropriate;
};
