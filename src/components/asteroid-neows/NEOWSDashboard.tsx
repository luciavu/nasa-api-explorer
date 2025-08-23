'use client';
import { useState } from 'react';
import Heading from '../Heading';
import Text from '../Text';
import Dropdown from '../Dropdown';

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
    //'url',
    //'abs_mag',
    'diameter_m',
    'is_hazardous',
    'approach_time',
    //'approach_epoch',
    'velocity_kmh',
    'miss_distance_km',
    //'orbiting_body',
    //'is_sentry_object',
  ];

  const rowData = neoData[selectedDate].map((neo) => ({
    name: neo.name,
    //url: neo.nasa_jpl_url,
    //abs_mag: neo.absolute_magnitude_h.toFixed(2),
    diameter_m: neo.estimated_diameter.meters.estimated_diameter_max.toFixed(2),
    is_hazardous: neo.is_potentially_hazardous_asteroid ? 'true' : 'false',
    approach_time: neo.close_approach_data[0].close_approach_date_full.slice(-4),
    //approach_epoch: neo.close_approach_data[0].epoch_date_close_approach,
    velocity_kmh: parseFloat(
      neo.close_approach_data[0].relative_velocity.kilometers_per_hour
    ).toFixed(2),
    miss_distance_km: parseFloat(neo.close_approach_data[0].miss_distance.kilometers).toFixed(2),
    //orbiting_body: neo.close_approach_data[0].orbiting_body,
    //is_sentry_object: neo.is_sentry_object ? 'true' : 'false',
  }));

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-2">
            {rowData.map((row, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg dark:border-white/20 dark:text-white"
              >
                {labels.map((label) => (
                  <div className={label === 'name' ? 'text-2xl font-semibold' : 'text-sm'}>
                    {label}: {row[label]}
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/*
          <table className="table-auto w-full text-sm border border-collapse border-gray-300 overflow-auto">
            <thead>
              <tr>
                {labels.map((label) => (
                  <th key={label} className="border p-2 text-left">
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowData.map((row, index) => (
                <tr key={index}>
                  {labels.map((label) => (
                    <td
                      key={label}
                      className={
                        row[label] === 'true' ? 'border p-2 bg-red-200 text-red-700' : 'border p-2'
                      }
                    >
                      {row[label]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          */}
        </div>
      </div>
    </>
  );
};

export default NEOWSDashboard;
