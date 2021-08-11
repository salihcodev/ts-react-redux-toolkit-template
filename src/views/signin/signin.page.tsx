// pkgs:
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// comps:
import FormInput from '../../components/distributed/form-input/form-input.comp';

// utils:
import './style.sass';
import { SignInFormTypes } from '../../common/types/signin-form.types';

// component>>>
const LoginPage = () => {
  // comps info:

  // preConfigured hooks:
  const history = useHistory();
  const dispatch = useDispatch();

  const formSchema = {
    email: null,
    password: null,
  };

  // collect inputs data:
  const [formData, setFormData] = useState<SignInFormTypes>(formSchema);

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
            {/* START ADD YOUR INPUTS AS BE MIGHT NEEDED */}
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
            {/* you can use btn component here as you like */}
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
