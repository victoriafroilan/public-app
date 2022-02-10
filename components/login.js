import PropTypes from 'prop-types';
import Link from 'next/link';

function FormControl({ type, name, text, required, placeholder }) {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={name} className="font-medium">
        <small>{text}</small>
      </label>
      <input
        required={required}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="border focus:outline-none focus:border-sky-700 focus:rounded focus:ring-1 focus:ring-sky-700 font-light py-2 px-4 invalid:required:text-pink-600 rounded focus:ring-blue-500"
      />
    </div>
  );
}

FormControl.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

FormControl.defaultProps = {
  required: false,
  placeholder: '',
};

export default function Login({ title, description, hrefForgotPassword }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const { email, password } = target;
    const props = { email: email.value, password: password.value };

    console.log(JSON.stringify(props));
  };

  return (
    <div className="flex justify-center my-3">
      <div className="flex flex-col basis-80 mx-2 iphone-8:mx-0 py-5 px-6 border border-gray-300 rounded-lg gap-y-6 bg-white">
        <div className="flex flex-col">
          <div className="text-center text-lg">{title}</div>
          <div className="text-center text-slate-500">
            <small>{description}</small>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="m-0 flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-3">
            <FormControl
              type="email"
              name="email"
              text="Email"
              required
              placeholder="username@email.com"
            />
            <FormControl
              type="password"
              name="password"
              text="Password"
              required
              placeholder="password"
            />
            <Link href={hrefForgotPassword}>
              <a className="text-blue-700">
                <small>Forgot Password?</small>
              </a>
            </Link>
          </div>
          <div className="flex flex-row-reverse">
            <button
              type="submit"
              className="py-4 px-10 bg-sky-700 rounded text-white"
            >
              <small>Login</small>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  hrefForgotPassword: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

Login.defaultProps = {
  hrefForgotPassword: '/forgot-password',
  title: 'App Name',
  description: 'Description',
};
