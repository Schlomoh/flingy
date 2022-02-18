import { ICookiesObj } from "../../App";
import { AES, enc } from "crypto-js";

const KEY = "iFuckingHateCookiesForeverAAAAAHHH";

/**
 * reads out the 'document.cookie' value and formats the
 * returned string into an object
 *
 * @returns {ICookiesObj} the allowed cookies as object:
 *
 * {necessary: boolean, analytics: boolean, advertisement: boolean}
 */
export function getCookie(): ICookiesObj {
  // get array of cookies of the users browser document
  let documentCookies = document.cookie,
    // get the index of the cookie in which the
    // category selection is stored
    cookiesArray = documentCookies.replaceAll(" ", "").split(";");
  const indexSelectionCookie = cookiesArray.findIndex(
      (el) => el.split("=")[0] === "selection"
    ),
    // the category selection as array
    encrCookieSelections =
      indexSelectionCookie >= 0
        ? cookiesArray[indexSelectionCookie].split("=")[1]
        : "",
    cookieSelections = AES.decrypt(encrCookieSelections, KEY)
      .toString(enc.Utf8)
      .split("+");
  // creating the consent object
  return cookieSelections.reduce((accu: any, item) => {
    if (cookieSelections.includes(item) && item !== "") accu[item] = true;
    else accu[item] = false;
    return accu;
  }, {});
}

/**
 * Creates a string containing the selection of allowed cookies
 * and creates the cookie using the documents cookie method
 *
 * @param cookiesObj
 */
export function setCookie(cookiesObj: any) {
  let selectionValues = Object.keys(cookiesObj).reduce(
    (accu: string, element: string, i: number): any => {
      if (cookiesObj[element]) {
        if (i > 0) accu += "+";
        accu += element;
      }
      return accu;
    },
    ""
  );
  // selection of cookie types declared as string
  // cookie = "selection=necessary+..."
  if (selectionValues !== "")
    document.cookie = `selection=${AES.encrypt(selectionValues, KEY)}`;
}

/**
 * may be called every re-render of <app/> to check
 * if the cookie pop-over should be displayed.
 *
 * When a cookie created by this app was found, the internal
 * state gets updated to the selection data of the cookie.
 */
export function handleCookies(
  consent: ICookiesObj,
  setConsent: any,
  setShow: any
) {
  // checks if the consent object exists
  if (consent !== undefined) {
    if (consent !== getCookie()) {
      setCookie(consent);
      setShow(false);
    }
  }
  // cosent obj doesnt exist
  else {
    //if sites cookie is found the consent state obj gets set
    if (document.cookie.includes("selection=")) {
      setConsent(getCookie());
      setShow(false);
    } else setShow(true);
  }
}
