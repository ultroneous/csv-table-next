import Container from "./container";

const Layout = (props: React.PropsWithChildren) => (
  <div className="min-h-screen bg-secondary">
    <Container>{props.children}</Container>
  </div>
);

export default Layout;
