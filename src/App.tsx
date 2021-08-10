// pkgs: installed libs like react, axios etc..
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// utils: utilities that you prepared your self
import './common/styles/app.sass';

// comps:
import Layout from './components/distributed/layout/layout.comp';

// views/pages:
import LandingPage from './views/landing/landing.page';

// component>>>
const App = () => (
  <Switch>
    <Route path="/">
      <Layout expanded minimal={false}>
        <LandingPage />
      </Layout>
    </Route>
  </Switch>
);

export default App;
