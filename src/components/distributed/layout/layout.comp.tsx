// pkgs:
import { Fragment } from 'react';

// utils:
import './style.sass';

// comps:
import Footer from '../footer/footer.comp';
import Header from '../header/header.comp';

// interfaces:
interface CompProps {
  expanded: boolean;
  minimal: boolean;
  children?: JSX.Element;
}

const Layout: React.VFC<CompProps> = ({ children, expanded, minimal }) => {
  return (
    <Fragment>
      <Header expanded={expanded} minimal={minimal} />
      {children}
      <Footer expanded={expanded} minimal={minimal} />
    </Fragment>
  );
};

export default Layout;
