interface Itheme {
  base: {
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
      borderRadius: String;
      background: String;
      color: String;
      hover: {
        background: String;
        color: String;
      };
    };
    background: String;
    shadow: String;
  };
}
