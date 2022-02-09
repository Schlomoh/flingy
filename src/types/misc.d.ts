interface IcomponentChildren {
  children: never[] | ReactChild | ReactChild[];
}

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
