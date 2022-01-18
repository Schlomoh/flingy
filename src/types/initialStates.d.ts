interface IanalysisInitialState {
  img: HTMLImageElement | String | undefined;
  aiResult: TaiResult | undefined;
  messages: Toutput | undefined;
}

interface IcookieInitialState {
  analysisCookies: boolean;
  advertisementCookies: boolean;
}

interface IroutingInitialState {
    location: String;
}