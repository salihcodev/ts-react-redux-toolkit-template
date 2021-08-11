// pkgs: installed libs like react, axios etc..
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// utils: utilities that you prepared your self
import './common/styles/app.sass';
import ScrollToTop from './common/utilities/scroll-to-top/scroll-to-top.util';

// comps:
import Layout from './components/distributed/layout/layout.comp';

// views/pages:
import LandingPage from './views/landing/landing.page';
import NotFound from './views/not-found/notfound.page';

// component>>>
const App = () => (
  <ScrollToTop>
    <Switch>
      <Route exact path="/">
        <Layout expanded>
          <LandingPage />
        </Layout>
      </Route>

      {/* 404 */}
      <Route path="*">
        <Layout expanded>
          <NotFound />
        </Layout>
      </Route>
    </Switch>
  </ScrollToTop>
);

export default App;
