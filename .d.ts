declare module "styled-transition-group" {
  import { transition } from "styled-transition-group";
  import type { StyledInterface } from "styled-components/macro";

  const transition: StyledInterface<CSSTransition>;
  export default transition;
}
