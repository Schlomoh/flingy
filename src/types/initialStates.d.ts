interface IanalysisInitialState {
  img: string | undefined;
  aiResult: TaiResult | undefined;
  output: Toutput | undefined;
}

interface IcookieInitialState {
  analysisCookies: boolean;
  advertisementCookies: boolean;
  showManageView: boolean;
}

interface IroutingInitialState {
  location: String;
}

interface ImodalInitialState {
  showResult: { show: boolean; id: number };
}
