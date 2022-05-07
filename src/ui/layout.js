import Navigation from "./Navigation";

function Layout(props) {
  return (
    <div>
      <Navigation></Navigation>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
