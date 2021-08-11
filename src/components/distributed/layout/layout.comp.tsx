// pkgs:
import { Fragment } from 'react';

// utils:
import './style.sass';
import { LayoutInterface } from '../../../common/interfaces/comps/layout.interface';

// comps:
import Footer from '../footer/footer.comp';
import Header from '../header/header.comp';

// component>>>
const Layout: React.VFC<LayoutInterface> = ({ children, expanded }) => {
  return (
    <Fragment>
      <Header expanded={expanded} />
      {children}
      <Footer expanded={expanded} />
    </Fragment>
  );
};

export default Layout;
