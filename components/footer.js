import PropTypes from 'prop-types';

export default function Footer({ name, yearFrom, yearTo }) {
  const years =
    yearFrom === yearTo ? yearFrom.toString() : (yearTo - yearFrom).toString();

  return (
    <div className className="order-last">
      <div className="h-16 sm:h-7" />
      <div className="h-16 sm:hidden fixed dark:bg-sky-900 flex inset-x-0 bottom-0">
        <footer className=" dark:bg-gray-900 dark:text-white justify-center">
          <div className="">
            <small>lkjuglkjh</small>
          </div>
        </footer>
      </div>
      <footer className="hidden sm:flex h-7 fixed bg-slate-900 inset-x-0 bottom-0 justify-center items-center">
        <div className="text-slate-200">
          <small>{`Copyright ${years}. ${name}.`}</small>
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  name: PropTypes.string,
  yearFrom: PropTypes.number,
  yearTo: PropTypes.number,
};

Footer.defaultProps = {
  name: 'Company',
  yearFrom: new Date().getFullYear().toString(),
  yearTo: new Date().getFullYear().toString(),
};
