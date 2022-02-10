import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { List } from 'immutable';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { ChevronUpIcon } from '@heroicons/react/solid';

function MenuItem({ href, title }) {
  return (
    <div className="flex bg-gray-800 border-b-2 border-gray-700 last:border-y-0">
      <Link href={href} passHref className="basis-full">
        <a
          title={title}
          className="basis-full text-white font-light h-14 sm:h-10 flex items-center"
        >
          <small className="px-5">{title}</small>
        </a>
      </Link>
    </div>
  );
}

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default function NavMain({
  brandTitle,
  brandImageSrc,
  brandHref,
  username,
  menu,
}) {
  const [menuHidden, setMenuHidden] = useState('hidden');
  const menuItems = ({ data }) => {
    if (data == null || data.length === 0) return null;

    const list = List(data);
    const listItems = list.map(({ href, title }) => {
      return <MenuItem key={href} href={href} title={title} />;
    });
    const arrayItems = listItems.toArray();

    return arrayItems;
  };

  return (
    <div>
      <div className="fixed top-0 flex flex-col w-full">
        <nav className="bg-white dark:bg-sky-900 mx-auto flex flex-row flex-wrap w-full">
          <div className="grow shrink-0 flex-wrap dark:bg-blue dark:text-slate-50 items-center flex flex-column px-3">
            <Link href={brandHref}>
              <a className="flex">
                <div className="dark:bg-white rounded-lg flex items-center">
                  <Image
                    src={brandImageSrc}
                    width="40"
                    height="40"
                    alt={brandTitle}
                    className=""
                  />
                </div>
                <div className="px-3 items-center flex flex-row font-bold text-lg">
                  <span>{brandTitle}</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="flex flex-row flex-row-reverse">
            <button
              className={`${
                !menuHidden
                  ? 'dark:bg-slate-700 bg-slate-200'
                  : 'dark:bg-sky-900'
              } dark:sm:active:bg-sky-900 dark:text-cyan-50 flex flex-row w-28 iphone-se:w-36 iphone-8:w-48 sm:w-56 items-center px-3 h-16`}
              onClick={() => setMenuHidden(!menuHidden ? 'hidden' : '')}
            >
              <span className="font-light align-center mx-auto text-ellipsis break-all overflow-hidden whitespace-nowrap">
                <small>{username}</small>
              </span>
              <span
                className={`${
                  !menuHidden ? 'hidden' : ''
                } flex shrink-0 flex justify-center`}
              >
                <ChevronDownIcon className="w-5" />
              </span>
              <span
                className={`${menuHidden} flex shrink-0 flex justify-center`}
              >
                <ChevronUpIcon className="w-5" />
              </span>
            </button>
          </div>
        </nav>
        <div className={`${menuHidden} flex flex-row-reverse`}>
          <div className="flex flex-col sm:w-56 w-full absolute">
            {menuItems({ data: menu })}
            <MenuItem href="/logout" title="Logout" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="h-16"></div>
      </div>
    </div>
  );
}

NavMain.propTypes = {
  brandTitle: PropTypes.string,
  brandImageSrc: PropTypes.string,
  brandImageHref: PropTypes.string,
  username: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.shape()),
};

NavMain.defaultProps = {
  brandTitle: 'App',
  brandImageSrc: '/images/vms-icon-mug.png',
  brandHref: '/',
  username: 'username@email.com',
  menu: [
    { href: '/billing', title: 'Billing' },
    { href: '/profile', title: 'Profile' },
  ],
};
