// pkgs:
import { useState, VFC } from 'react';

// utils:
import './style.sass';

// comps:

// interfaces:
interface CompProps {
  type: string;
  title: string;
  msg?: string;
}

const Notifyer: VFC<CompProps> = ({ type, title, msg }) => {
  // comp's locals:
  const stylesSchema = { colors: undefined, borders: undefined };
  const [styles, setStyles] =
    useState<{ colors: string | undefined; borders: string | undefined }>(stylesSchema);

  // change the notifier box theme AKA `colors, borders`
  switch (type) {
    case `info`:
      setStyles({ colors: `#bdf7bd`, borders: `#8cdf8c` });
      break;

    case `warning`:
      setStyles({ colors: `#ecdfac`, borders: `#dac676` });
      break;

    case `error`:
      setStyles({ colors: `#f5adad`, borders: `#e78787` });
      break;

    default:
      setStyles({ colors: `#fff`, borders: `#ddd` });
      break;
  }

  return (
    <section
      className="notifyer"
      style={{ backgroundColor: styles.colors, borderColor: styles.borders }}
    >
      {/* the wrapper */}
      <div className="notifyer-wrapper">
        <h2 className="heading" style={{ color: styles.colors }}>
          {title}
        </h2>
        <p className="msg" style={{ color: styles.colors }}>
          {msg}
        </p>
      </div>
    </section>
  );
};

export default Notifyer;
