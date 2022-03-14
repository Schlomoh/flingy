import { AES, enc } from "crypto-js";

const KEY = "balalbalfbl";

class CookieUtil {
  readCookies(): ICookieSelection {
    let cookieObject = undefined;
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
          : "";

    if (encrCookieSelections !== '') {
      const cookieSelections = AES.decrypt(encrCookieSelections, KEY).toString(
        enc.Utf8
      );
      cookieObject = JSON.parse(cookieSelections);
    }

    // creating the consent object
    return cookieObject;
  }

  writeCookies(cookieObject: ICookieSelection) {
    const strCookieObj = JSON.stringify(cookieObject);
    if (strCookieObj !== "")
      document.cookie = `selection=${AES.encrypt(strCookieObj, KEY)}`;
  }
}

export default CookieUtil;
