type Tcolorway = {
  background: String;
  color: String;
  hover: {
    background: String;
    color: String;
  };
};

interface Itheme {
  container: {
    borderRadius: String;
  };
  text: {
    fontSize: {
      heading: String;
      subHeading: String;
      smallHeading: String;
      paragraph: String;
      lineHeight?: number;
    };
    color: {
      heading: String;
      subHeading: String;
      smallHeading: String;
      paragraph: String;
      lineHeight?: number;
    };
  };
  button: {
    borderRadius: {
      outer: String;
      inner: String;
      round: String;
    };
    primary: Tcolorway;
    warn: Tcolorway;
    disabled: {
      background: String;
      color: String;
    };
  };
  background: String;
  shadow: String;
}
