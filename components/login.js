import PropTypes from 'prop-types';

function FormControl({ type, name, text, required, placeholder }) {
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
        placeholder={placeholder}
        className="border focus:outline-none focus:border-sky-700 focus:rounded focus:ring-1 focus:ring-sky-700 font-light py-3 px-2 invalid:required:text-pink-600 rounded focus:ring-blue-500"
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
      <div className="flex flex-col basis-11/12 sm:basis-3/12 py-5 px-6 border border-gray-300 rounded gap-y-6 bg-white">
        <div className="flex flex-col">
          <div className="text-center text-lg">App Name</div>
          <div className="text-center text-slate-500">
            <small>Description</small>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="m-0 flex flex-col gap-y-7">
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
          </div>
          <div className="flex flex-row-reverse">
            <button
              type="submit"
              className="py-5 px-10 bg-sky-700 rounded text-white"
            >
              <small>Login</small>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
