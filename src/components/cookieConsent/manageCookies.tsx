import { ICookiesObj } from "../../App";

export function getCookie(cookiesObj: ICookiesObj) {
  // get cookies of the users browser document
  let documentCookies = document.cookie.replaceAll(" ", "").split(";"),
    // get the index of the cookie in which the
    // category selection is stored
    indexSelectionCookie = documentCookies.findIndex(
      (el) => el.split("=")[0] === "selection"
    ),
    // the category selection
    cookieSelections = documentCookies[indexSelectionCookie]
      .split("=")[1]
      .split("+"),
    // new obj for the 'consent' state obj
    newObj: any = { show: false };
  // creates the new 'consent' state obj
  Object.keys(cookiesObj).forEach((category) => {
    newObj[category] = cookieSelections.includes(category);
  });
  return newObj;
}

export function setCookie(cookiesObj: ICookiesObj) {
  let selectionValues = Object.keys(cookiesObj).reduce(
    (accu: string, element: string, i: number, a): any => {
      if (cookiesObj[element]) {
        accu += element + "+";
      }
      return accu;
    },
    ""
  );

  // selection of cookie types declared as string
  // cookie = "selection=show+necessary+..."
  document.cookie = `selection=${selectionValues}`;
  console.log(document.cookie);
}
