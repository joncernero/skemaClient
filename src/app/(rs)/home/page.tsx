import Hero from '@/components/Hero';
import About from '@/components/About';
import Reviews from '@/components/Reviews';

export const metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Reviews />
    </>
  );
}
