import PropTypes from 'prop-types';

function FormControl({ type, name, text, required }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>
        <small>{text}</small>
      </label>
      <input
        required={required}
        id={name}
        name={name}
        type={type}
        className="border focus:outline-none focus:border-sky-700 focus:rounded focus:ring-1 focus:ring-sky-700 text-sm font-light py-3 px-2 invalid:border-pink-500 invalid:text-pink-500 focus:invalid:border-pink-500 rounded focus:invalid:ring-pink-500"
      />
    </div>
  );
}

FormControl.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

FormControl.defaultProps = {
  required: false,
};

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target;
    const { email, password } = target;
    const props = { email: email.value, password: password.value };

    console.log(JSON.stringify(props));
  };

  return (
    <div className="flex justify-center my-3">
      <div className="flex flex-col basis-3/4 sm:basis-3/12 p-3 border border-gray-300 rounded gap-y-6 bg-white">
        <div className="flex flex-col">
          <div className="text-center text-lg">App Name</div>
          <div className="text-center text-slate-500">
            <small>Description</small>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="m-0 flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-2">
            <FormControl type="email" name="email" text="Email" required />
            <FormControl
              type="password"
              name="password"
              text="Password"
              required
            />
          </div>
          <div className="flex flex-row-reverse">
            <button
              type="submit"
              className="py-2 px-7 bg-sky-700 rounded text-white"
            >
              <small>Login</small>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
