interface IcomponentChildren {
  children: never[] | ReactChild | ReactChild[];
}

declare module "*.png" {
  const value: any;
  export = value;
}
