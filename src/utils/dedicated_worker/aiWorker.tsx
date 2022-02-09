import Analyzer from "../analysis";
async function load(a: Analyzer) {
  await a.initialize();
  postMessage({ ready: true });
}

async function analyze(a: Analyzer, image: ImageData) {
  await a.analyze(image);
  postMessage({ result: a.result });
}

{
  const ctx: Worker = self as any;
  let analyzer: Analyzer;

  ctx.onmessage = (event: MessageEvent) => {
    console.log("called listener", event.data, "analyzer: ", analyzer);

    const action = event.data.action;
    const image = event.data.image;

    if (!analyzer) analyzer = new Analyzer();

    switch (action) {
      case "initialize":
        load(analyzer);
        break;
      case "analyze":
        if (image && analyzer.state === "loaded") analyze(analyzer, image);
        break;
    }
  };
}
export {};
