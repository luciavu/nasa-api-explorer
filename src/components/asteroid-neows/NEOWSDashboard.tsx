'use client';
import { useState } from 'react';
import Heading from '../Heading';
import Text from '../Text';
import Dropdown from '../Dropdown';
import InfoCard from './InfoCard';
import StyledLink from '../StyledLink';

interface NEOWSDashboardProps {
  numAsteroids: number;
  startDate: string;
  endDate: string;
  neoData: Record<string, any[]>;
}

const NEOWSDashboard = ({ numAsteroids, startDate, endDate, neoData }: NEOWSDashboardProps) => {
  const [selectedDate, setSelectedDate] = useState(Object.keys(neoData)[0] || '');
  const [sortBy, setSortBy] = useState('Approach time');

  const dates = Object.keys(neoData).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  const labels = [
    'name',
    'url',
    'abs_mag',
    'diameter_m',
    'is_hazardous',
    'approach_time',
    'approach_epoch',
    'velocity_kmh',
    'miss_distance_km',
    'orbiting_body',
    'is_sentry_object',
  ];

  const rowData = neoData[selectedDate].map((neo) => ({
    name: neo.name,
    url: neo.nasa_jpl_url,
    abs_mag: neo.absolute_magnitude_h.toFixed(2),
    diameter_m: neo.estimated_diameter.meters.estimated_diameter_max.toFixed(2),
    is_hazardous: neo.is_potentially_hazardous_asteroid ? 'true' : 'false',
    approach_time: neo.close_approach_data[0].close_approach_date_full,
    approach_epoch: neo.close_approach_data[0].epoch_date_close_approach,
    velocity_kmh: parseFloat(neo.close_approach_data[0].relative_velocity.kilometers_per_hour),
    miss_distance_km: parseFloat(neo.close_approach_data[0].miss_distance.kilometers),
    orbiting_body: neo.close_approach_data[0].orbiting_body,
    is_sentry_object: neo.is_sentry_object ? 'true' : 'false',
  }));

  rowData.sort((a, b) => {
    switch (sortBy) {
      case 'Approach time':
        return a.approach_time.localeCompare(b.approach_time);
      case 'Name':
        return a.name.localeCompare(b.name);
      case 'Diameter (m)':
        return parseFloat(b.diameter_m) - parseFloat(a.diameter_m);
      case 'Hazardous':
        return a.is_hazardous.localeCompare(b.is_hazardous);
      case 'Velocity (km/h)':
        return b.velocity_kmh - a.velocity_kmh;
      case 'Miss distance (km)':
        return b.miss_distance_km - a.miss_distance_km;
      default:
        return 0;
    }
  });

  return (
    <>
      <Heading
        title={`${numAsteroids} Asteroids found.`}
        subtitle={'From ' + startDate + ' to ' + endDate}
      />
      <div className="flex flex-col mt-4">
        <aside className="w-full border-b border-gray-300 h-full  p-4">
          <ul className="flex space-x-4 w-100% overflow-y-auto ">
            {dates.map((date) => (
              <li
                key={date}
                className={`cursor-pointer px-4 py-1 rounded dark:text-white/90 ${
                  selectedDate === date
                    ? 'bg-gray-100 dark:bg-gray-900 text-gray-900 '
                    : 'hover:bg-gray-100 hover:dark:bg-gray-900'
                }`}
                onClick={() => setSelectedDate(date)}
              >
                {new Date(date).toLocaleDateString().slice(0, -5)}
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-4">
          <h3 className="text-lg font-semibold dark:text-white">
            Asteroids on {new Date(selectedDate).toLocaleDateString()}
          </h3>
          <Text>{neoData[selectedDate].length} results found.</Text>

          <Dropdown
            id="neows-sort"
            label="Sort by:"
            options={[
              'Approach time',
              'Name',
              'Diameter (m)',
              'Hazardous',
              'Velocity (km/h)',
              'Miss distance (km)',
            ]}
            onChange={(value) => setSortBy(value)}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 my-10">
            {rowData.map((row, index) => (
              <div
                key={index}
                className="border p-2 rounded-lg dark:border-gray-800 dark:text-white md:p-4"
              >
                <InfoCard
                  name={row['name']}
                  approach_time={row['approach_time']}
                  diameter={row['diameter_m']}
                  hazardous={row['is_hazardous'] === 'true'}
                  velocity={row['velocity_kmh']}
                  miss_distance={row['miss_distance_km']}
                />
              </div>
            ))}
          </div>

          <Text>
            Asteroid SVG Credit:{' '}
            <StyledLink
              href="https://science.nasa.gov/solar-system/asteroids/facts/"
              type="underline"
            >
              NASA
            </StyledLink>
          </Text>
        </div>
      </div>
    </>
  );
};

export default NEOWSDashboard;
