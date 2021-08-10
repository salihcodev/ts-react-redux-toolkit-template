// pkgs:

// components:

// utils:
import './style.sass';

// interfaces:
interface CompProps {
  heading: string;
  description: string;
}

const Banner: React.VFC<CompProps> = ({ heading, description }) => {
  return (
    <section className="banner">
      <h2 className="banner-heading">{heading}</h2>
      <p className="banner-desc">{description}</p>
    </section>
  );
};

export default Banner;
