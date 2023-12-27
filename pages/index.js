import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Results from '@/components/Results';
import requests from '@/utils/requests';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ results }) {
  console.log(results, 'in server side component');

  return (
    <div
      className={`flex min-h-screen flex-col items-center ${inter.className} overflow-hidden`}
    >
      <Header />

      <NavBar />

      <Results results={results} />
    </div>
  );
}

//explain this function in next js, does it have to be 'getServerSideProps'
export async function getServerSideProps(context) {
  const genre = context.query.genre || 'fetchTrending';

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre].url}`
  ).then((response) => response.json());

  return {
    props: {
      results: request.results,
    },
  };
}
