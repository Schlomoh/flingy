type TaiResult = [
  {
    topLeft: Number[];
    bottomRight: Number[];
    probability: Number[];
    landmarks: [
      Number[], // right eye
      Number[], // left eye
      Number[], // nose
      Number[], // mouth
      Number[], // right ear
      Number[] // left ear
    ];
  }
];

type Toutput = {
  tags: String[];
  messages: [
    {
      text: String;
      probability: number;
    }
  ];
};
