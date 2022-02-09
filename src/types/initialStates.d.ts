interface IanalysisInitialState {
  img: string | undefined;
  aiResult: TaiResult | undefined;
  output: Toutput | undefined;
  init: boolean;
}

interface IcookieInitialState {
  analysisCookies: boolean;
  advertisementCookies: boolean;
}

interface IroutingInitialState {
  location: String;
}
