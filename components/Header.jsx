import Image from 'next/image';
import React from 'react';
import HeaderIcon from './HeaderIcon';
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <div className="flex flex-col items-center bg-gray-950 text-gray-400 select-none w-full p-6 sm:flex-row justify-between">
      <div className="flex">
        <HeaderIcon Icon={HomeIcon} title="Home" />
        <HeaderIcon Icon={UserIcon} title="Account" />
        <HeaderIcon Icon={PhoneIcon} title="Contact" />
        <HeaderIcon Icon={InformationCircleIcon} title="Account" />
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        width={100}
        height={100}
        alt="IMDB_Logo_2016"
        className="cursor-pointer hover:brightness-125"
      />
    </div>
  );
};

export default Header;
