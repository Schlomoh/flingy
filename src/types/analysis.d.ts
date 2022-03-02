type TblazefaceResult = [
  {
    topLeft: number[];
    bottomRight: number[];
    probability: number[];
    landmarks: [
      number[], // right eye
      number[], // left eye
      number[], // nose
      number[], // mouth
      number[], // right ear
      number[] // left ear
    ];
  }
];

type TcocoResult = [
  {
    bbox: [number, number, number, number];
    class: string;
    score: number;
  }
];

type TaiResult = {
  faces: TblazefaceResult;
  coco: TcocoResult;
  finished: boolean;
};

type Tanalysis = { analysis: IanalysisInitialState };

type Toutput = {
  tags: string[];
  messages: {
    text: string;
    probability: number;
    reason: string;
  }[];
}[];

type Taction = "initialize" | "analyze";

type Tbbox = { x: number; y: number; w: number; h: number };

type Tfaces = [{ bbox: Tbbox; imgUrl: string }];
