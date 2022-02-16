interface IanalysisInitialState {
  img: string | undefined;
  aiResult: TaiResult | undefined;
  output: Toutput | undefined;
  faces: Tfaces | undefined;
}

interface IcookieInitialState {
  analysisCookies: boolean;
  advertisementCookies: boolean;
}

interface IroutingInitialState {
  location: String;
}
