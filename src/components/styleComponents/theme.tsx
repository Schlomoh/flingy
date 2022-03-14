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
      color: "grey",
      hover: {
        background: "lightgrey",
        color: "grey",
      },
    },
    warn: {
      background: "#fff",
      color: "#d33c3c",
      hover: {
        background: "#d87272",
        color: "white",
      },
    },
    disabled: {
      background: 'lightgrey',
      color: "#b6b6b6",
    },
  },
  background: "white",
  shadow: "0 5px 15px rgba(0,0,0,0.2)",
};

export default theme;
