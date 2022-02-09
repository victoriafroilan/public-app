import PropTypes from 'prop-types';
import Link from 'next/link';

function Tab({ href, title }) {
  return (
    <div className="text-neutral-800 dark:text-neutral-200 flex justify-center border-r-2 last:border-x-0 border-neutral-300 dark:border-gray-800">
      <Link href={href}>
        <a className="bg-neutral-200 basis-full flex items-center justify-center dark:bg-gray-900">
          <span className="">
            <small>{title}</small>
          </span>
        </a>
      </Link>
    </div>
  );
}

Tab.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default function Footer({ name, yearFrom, yearTo }) {
  const years =
    yearFrom === yearTo ? yearFrom.toString() : (yearTo - yearFrom).toString();

  return (
    <div className className="order-last">
      <div className="h-16 sm:h-7" />
      <div className="h-16 sm:hidden fixed dark:bg-sky-900 bg-white grid grid-cols-4 inset-x-0 bottom-0">
        <Tab href="/link-1" title="link 1" />
        <Tab href="/link-1" title="link 1" />
        <Tab href="/link-1" title="link 1" />
        <Tab href="/link-1" title="link 1" />
      </div>
      <footer className="hidden sm:flex h-7 fixed dark:bg-gray-900 bg-gray-800 inset-x-0 bottom-0 justify-center items-center">
        <div className="dark:text-slate-200 text-neutral-100">
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
  yearFrom: new Date().getFullYear(),
  yearTo: new Date().getFullYear(),
};
