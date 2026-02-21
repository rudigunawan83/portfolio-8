declare module "@studio-freight/lenis" {
  const Lenis: any;
  export default Lenis;
}

declare module "react-intersection-observer" {
  export function useInView(options?: any): [ (node?: any) => void, boolean, any];
  export const InView: any;
}
