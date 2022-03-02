const theme: Itheme = {
  container: {
    borderRadius: "25px",
  },
  colors: {
    lightGrey: "#ebebeb",
    accent: "#8353e3",
  },
  text: {
    fontSize: {
      heading: "52px",
      smallHeading: "26px",
      subHeading: "22px",
      paragraph: "18px",
    },
    color: {
      heading: "black",
      smallHeading: "black",
      subHeading: "#4e4e4e",
      paragraph: "grey",
    },
  },
  button: {
    borderRadius: {
      outer: "20px",
      inner: "10px",
      round: "100%",
    },
    primary: {
      background: "white",
      color: "black",
      hover: {
        background: "lightgrey",
        color: "black",
      },
    },
    warn: {
      background: "#fff",
      color: "#b14040",
      hover: {
        background: "#d87272",
        color: "white",
      },
    },
    disabled: {
      background: "lightgrey",
      color: "#646464",
    },
  },
  background: "white",
  shadow: "0 5px 15px rgba(0,0,0,0.2)",
};

export default theme;
