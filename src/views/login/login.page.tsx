// pkgs:
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// comps:
import FormInput from '../../components/distributed/form-input/form-input.comp';

// utils:
import './style.sass';

const LoginPage = () => {
  // comps info:

  // builtin hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // login form schema
  type loginFormTypes = {
    email: null | string;
    password: null | string;
  };

  const formSchema = {
    email: null,
    password: null,
  };

  // login form data
  // statically:
  const [formData, setFormData] = useState<loginFormTypes>(formSchema);

  // with login user form:
  const handleLoginSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <main className="page login-page">
      <section className="login-form">
        <div className="header">
          <h2>login</h2>
        </div>
        <div className="login-form">
          <form onSubmit={handleLoginSubmit}>
            <FormInput
              type="text"
              label="Email"
              inputName="email"
              collectInputData={(name: string, value: string) =>
                setFormData({ ...formData, [name]: value })
              }
            />
            <FormInput
              type="password"
              label="password"
              inputName="password"
              collectInputData={(name: string, value: string) =>
                setFormData({ ...formData, [name]: value })
              }
            />

            {/* submitter btn */}
            <button type="submit">Login</button>

            <p className="not-registered">
              Dont't have one.. no worries
              <Link to="/signup">Signup</Link>
              now!
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
