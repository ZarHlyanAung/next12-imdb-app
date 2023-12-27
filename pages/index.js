import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import Results from '@/components/Results';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <Header />

      <NavBar />

      <Results />
    </main>
  );
}
