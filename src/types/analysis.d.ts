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
  face: TblazefaceResult | undefined;
  coco: any;
};

type Toutput = {
  tags: String[];
  messages: [
    {
      text: String;
      probability: number;
    }
  ];
};

type Taction = 'initialize' | 'analyze'