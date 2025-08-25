import Search from '@/components/Search';
import StyledLink from '@/components/StyledLink';
import { BiMeteor, BiPlanet } from 'react-icons/bi';
import { GiStarSattelites } from 'react-icons/gi';
import { MdControlCamera } from 'react-icons/md';
import { PiLinktreeLogo } from 'react-icons/pi';
const infoCards = [
  {
    href: '/apod',
    icon: <BiPlanet className="text-2xl text-gray-400 mb-2" />,
    heading: 'APOD: Astronomy Picture of the Day',
    description:
      "One of NASA's most popular websites. Features a daily photograph of our universe and an astronomer's explanation.",
  },
  {
    href: '/asteroids-neows',
    icon: <BiMeteor className="text-2xl text-gray-400 mb-2" />,
    heading: 'Asteroids NeoWs: Near Earth Object Web Service',
    description: 'Near-earth Asteroid data provided by the NASA JPL Asteroid team.',
  },
  {
    href: '/donki',
    icon: <GiStarSattelites className="text-2xl text-gray-400 mb-2" />,
    heading: 'DONKI: Space Weather Database',
    description:
      'Daily interpretations of space weather observations, analysis, models, forecasts, and notifications provided by the Space Weather Research Center',
  },
  {
    href: '/eonet',
    icon: <PiLinktreeLogo className="text-2xl text-gray-400 mb-2" />,
    heading: 'EONET: The Earth Observatory Natural Event Tracker',
    description: 'Examine NRT natural events using NASA imagery.',
  },
  {
    href: '/epic',
    icon: <MdControlCamera className="text-2xl text-gray-400 mb-2" />,
    heading: 'EPIC: Earth Polychromatic Imaging Camera',
    description: "Daily imagery collected by DSCOVR's EPIC instrument.",
  },
];
export default function Home() {
  return (
    <>
      <div className="mx-5 md:mx-2 box-border flex flex-col min-h-screen p-4 sm:p-8 md:p-20 gap-8 overflow-x-hidden">
        <main className="flex-1 min-w-[280px] mb-8">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4">
              NASA Open API Explorer
            </h1>
            <p className="text-lg text-gray-300 ">
              Explore{' '}
              <StyledLink type="underline" href={'https://api.nasa.gov/'}>
                NASA API
              </StyledLink>{' '}
              public space data.
            </p>
          </div>
          <Search list={infoCards} />
        </main>
        <StyledLink href="https://unsplash.com/@shadesofsamadhi" type="underline">
          Background Credit: Adrian Moise
        </StyledLink>
      </div>
    </>
  );
}
