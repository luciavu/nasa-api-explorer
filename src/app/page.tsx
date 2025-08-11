import Search from '@/components/Search';
import StyledLink from '@/components/StyledLink';
import { BiMeteor, BiPlanet } from 'react-icons/bi';
const infoCards = [
  {
    href: '/apod',
    icon: <BiPlanet className="text-2xl text-gray-400 mb-2" />,
    heading: 'APOD: Astronomy Picture of the Day',
    description:
      "One of NASA's most popular websites. Features a daily photograph of our universe and an explanation written by a professional astronomer.",
  },
  {
    href: '/asteroids-neows',
    icon: <BiMeteor className="text-2xl text-gray-400 mb-2" />,
    heading: 'Asteroids NeoWs: Near Earth Object Web Service',
    description: 'Near-earth Asteroid data provided by the NASA JPL Asteroid team.',
  },
];
export default function Home() {
  return (
    <div className="mx-5 md:mx-2 box-border flex flex-col min-h-screen p-4 sm:p-8 md:p-20 gap-8 overflow-x-hidden">
      <main className="flex-1 min-w-[280px]">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4">Explorer</h1>
          <p className="text-lg text-gray-300 ">
            A web application to explore{' '}
            <StyledLink type="underline" href={'https://api.nasa.gov/'}>
              NASA API
            </StyledLink>{' '}
            data.
          </p>
        </div>
        <Search list={infoCards} />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
