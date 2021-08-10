// pkgs:

// comps:
import InitialSliceComponent from '../../components/base/initial/initial.comp';
import PagesHero from '../../components/distributed/hero/hero.comp';

// utils:
import './style.sass';

const LandingPage = () => {
  const heroHeading = `Start to track your activities, And be more productive`;
  const heroDescription = `join us and track your daily tasks and filter unnecessary and redundant activities `;

  return (
    <main className="page landing-page">
      {/* hero */}
      <PagesHero heading={heroHeading} description={heroDescription}></PagesHero>
      <InitialSliceComponent />
    </main>
  );
};

export default LandingPage;
