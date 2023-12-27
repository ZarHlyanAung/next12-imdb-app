import requests from '@/utils/requests';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="w-full flex justify-center bg-gray-800">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h1
          key={key}
          className="text-xl m-4 my-2 font-bold text-gray-200 hover:text-yellow-400 hover:bg-black px-4 py-2 rounded-lg"
          onClick={() => router.push(`?genre=${key}`)}
        >
          {title}
        </h1>
      ))}
    </div>
  );
};

export default NavBar;
