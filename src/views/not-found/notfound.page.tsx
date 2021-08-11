// pkgs:
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

// comps:

// utils:
import './style.sass';

// component>>>
const NotFound = () => {
  // preConfigured hooks:
  const history = useHistory();

  const [redirectionCountDown, setRedirectionCountDown] = useState<number>(5);

  useEffect(() => {
    setTimeout(() => setRedirectionCountDown(redirectionCountDown - 1), 1000);
    if (redirectionCountDown === 0) {
      history.push('/');
    }

    // clear the effect
    return () => {
      if (redirectionCountDown === 0) {
        setRedirectionCountDown(5);
      }
    };
  }, [history, redirectionCountDown]);

  return (
    <main className="page notfound-page">
      <Container fluid={false}>
        <div className="page-wrapper">
          <div className="flex-shield">
            <h2 className="notfound-number">404</h2>
            <p className="notfound-description">
              <b>Error 404</b> May you hits a broken/not existed route, Sadness
            </p>
            <Link to="/" className="redirect-home">
              Take me back home {redirectionCountDown}
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default NotFound;
