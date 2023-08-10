import { ContainerPropsType } from "@utils/types";

const Container = ({ children, className }: ContainerPropsType) => (
  <div className={`max-w-screen-xl mx-auto ${className}`}>
    {children}
  </div>
);

export default Container;
