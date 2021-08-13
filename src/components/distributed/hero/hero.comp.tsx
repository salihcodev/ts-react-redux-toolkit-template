// pkgs:

// utils:
import './style.sass';
import { Container } from 'react-bootstrap';
import { PagesHeroInterface } from '../../../common/interfaces/comps/hero.interface';

// comps:

// components>>>
const PagesHero: React.VFC<PagesHeroInterface> = ({ children, heading, description }) => {
  return (
    <section className="pages-hero">
      <Container>
        <div className="hero-wrapper">
          <h1 className="hero-heading">{heading}</h1>
          <p className="hero-description">{description}</p>
          {children ? <div className="buttons">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
};

export default PagesHero;
