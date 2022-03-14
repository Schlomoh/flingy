interface IanalysisInitialState {
  img: string | undefined;
  aiResult: TaiResult | undefined;
  output: Toutput | undefined;
}

interface ICookieSelection {
  [key: string];
  analysis: boolean;
  advertisement: boolean;
}

interface IcookieInitialState {
  selection: ICookieSelection;
  showManageView: boolean;
  showModal: boolean
}

interface IroutingInitialState {
  location: String;
}

interface ImodalInitialState {
  showResult: { show: boolean; id: number };
}
