// pkgs:
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// comps:
import FormInput from '../../components/distributed/form-input/form-input.comp';

// utils:
import './style.sass';

const SignupPage = () => {
  // comps info:

  // builtin hooks
  const history = useHistory();
  const dispatch = useDispatch();

  // Signup form schema
  type SignupFormTypes = {
    firstName: null | string;
    lastName: null | string;
  };

  const formSchema = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  };

  // Signup form data
  // statically:
  const [formData, setFormData] = useState<SignupFormTypes>(formSchema);

  // with Signup user form:
  const handleSignupSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <main className="page Signup-page">
      <section className="Signup-form">
        <div className="header">
          <h2>Signup</h2>
        </div>
        <div className="Signup-form">
          <form onSubmit={handleSignupSubmit}>
            <FormInput
              type="text"
              label="Email"
              inputName="email"
              collectInputData={(name: string, value: string) =>
                setFormData({ ...formData, [name]: value })
              }
            />

            {/* submitter btn */}
            <button type="submit">Signup</button>

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

export default SignupPage;
