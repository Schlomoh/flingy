import axios from "axios";

export const analyseScreenshot = (imgUrl: string) => {
  let config = {
    headers: {
      "api-key": "quickstart-QUdJIGlzIGNvbWluZy4uLi4K",
    },
  };
  try {
    (async function () {
      let resp = await axios.post(
        "localhost/api/facial-recognition",
        {
          image: imgUrl,
        },
        config
      );
      console.log(resp);
    })();
  } catch (error) {
    console.log(error);
  }
};
