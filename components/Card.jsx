import Image from 'next/image';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
export default function Card({ result }) {
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="p-3 cursor-pointer hover:text-white active:text-yellow-400 xl:hover:scale-105 transition-transform duration-200 rounded-md bg-gray-800 m-3">
      <Image
        layout="responsive"
        src={BASE_URL + result.backdrop_path}
        width={200}
        height={100}
        alt={result.title || result.name}
      />
      <div className="p-2">
        <h2 className="text-lg font-bold">{result.title || result.name}</h2>
        <p className="line-clamp-2 text-lg hover:line-clamp-none hover:text-yellow-200">
          {result.overview}
        </p>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}
          <HandThumbUpIcon className="h-5 ml-3 mr-1" />
          {result.vote_average} by {result.vote_count}
        </p>
      </div>
    </div>
  );
}
