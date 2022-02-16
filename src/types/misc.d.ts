declare module "*.png" {
  const value: any;
  export = value;
}

declare module "worker-loader!*" {
  class WebpackWorker extends Worker {
    constructor();
  }
  export default WebpackWorker;
}
interface IcomponentChildren {
  children: never[] | ReactChild | ReactChild[];
}

type TimageSizes = {
  natural: { w: number; h: number };
  scaled: { w: number; h: number };
};

type Tworker = { instance: Worker; init: boolean };

type enumActions = "load" | "analyze" | "clear";
