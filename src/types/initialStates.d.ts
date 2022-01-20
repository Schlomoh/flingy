interface IanalysisInitialState {
  img: string | undefined;
  aiResult: TaiResult | undefined;
  output: Toutput | undefined;
}

interface IcookieInitialState {
  analysisCookies: boolean;
  advertisementCookies: boolean;
}

interface IroutingInitialState {
    location: String;
}