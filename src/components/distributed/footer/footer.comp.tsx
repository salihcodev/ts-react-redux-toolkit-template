// pkgs:
import { FaHeart } from 'react-icons/fa';
import { AiOutlineCoffee } from 'react-icons/ai';
import { VFC } from 'react';
import { Container } from 'react-bootstrap';

// utils:
import './style.sass';

// comps:

// interfaces:
interface CompProps {
  expanded: boolean;
  minimal: boolean;
}

const Footer: VFC<CompProps> = ({ expanded, minimal }) => {
  return (
    <footer className="default-footer">
      <Container fluid={expanded}>
        <p className="author">
          Built with
          <span className="icon">
            <FaHeart />
          </span>
          and
          <span className="icon">
            <AiOutlineCoffee />
          </span>
          in
          <span className="icon">
            <code>Menufia, Egypt</code>
          </span>
        </p>
        <p className="reservation">
          <span className="icon">©</span>Copyright {new Date().getFullYear()}
          <span>
            <a href="https://asalih.netlify.com/me" target="_blank noopener noreferer">
              @salihcodev
            </a>
          </span>
          All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
