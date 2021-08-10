// pkgs:

// utils:
import './style.sass';
import { Container } from 'react-bootstrap';

// components:

// interfaces:
interface CompProps {
  heading: string;
  description: string;
  children?: JSX.Element;
}

const PagesHero: React.VFC<CompProps> = ({ children, heading, description }) => {
  return (
    <section className="pages-hero">
      <Container>
        <div className="hero-wrapper">
          <h2 className="hero-heading">{heading}</h2>
          <p className="hero-description">{description}</p>
          {children && <div className="buttons">{children}</div>}
        </div>
      </Container>
    </section>
  );
};

export default PagesHero;
