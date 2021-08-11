// pkgs:

// utils:
import './style.sass';
import { BannerPropsTypes } from '../../../common/interfaces/comps/banner.interface';

// comps:

// component>>>
const Banner: React.VFC<BannerPropsTypes> = ({ heading, description }) => {
  return (
    <section className="banner">
      <h2 className="banner-heading">{heading}</h2>
      {description ? <p className="banner-desc">{description}</p> : null}
    </section>
  );
};

export default Banner;
