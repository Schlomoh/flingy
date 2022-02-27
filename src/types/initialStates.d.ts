interface IanalysisInitialState {
  img: string | undefined;
  aiResult: TaiResult | undefined;
  output: Toutput | undefined;
  showResult: boolean;
}

interface IcookieInitialState {
  analysisCookies: boolean;
  advertisementCookies: boolean;
  showManageView: boolean;
}

interface IroutingInitialState {
  location: String;
}
