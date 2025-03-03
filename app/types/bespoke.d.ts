declare module "bespoke" {
    const bespoke: {
      from: (parent: HTMLElement, plugins?: any[]) => any;
    };
    export default bespoke;
  }
  
  declare module "bespoke-loop" {
    const bespokeLoop: () => any;
    export default bespokeLoop;
  }
  