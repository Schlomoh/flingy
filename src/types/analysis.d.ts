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

type TaiResult = {
  faces: TblazefaceResult | undefined;
  coco: any;
  finished: boolean
};

type Tanalysis = { analysis: IanalysisInitialState };

type Toutput = {
  tags: String[];
  messages: [
    {
      text: String[];
      probability: number;
    }
  ];
};

type Taction = 'initialize' | 'analyze'

type Tbbox = { x: number, y: number, w: number, h: number }

type Tfaces = [{bbox: Tbbox, imgUrl: string }]