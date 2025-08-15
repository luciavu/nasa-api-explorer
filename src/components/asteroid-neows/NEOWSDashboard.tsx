'use client';
import { useState } from 'react';
import Heading from '../Heading';

interface NEOWSDashboardProps {
  numAsteroids: number;
  startDate: string;
  endDate: string;
  neoData: Record<string, any[]>;
}

const NEOWSDashboard = ({ numAsteroids, startDate, endDate, neoData }: NEOWSDashboardProps) => {
  const [selectedDate, setSelectedDate] = useState(Object.keys(neoData)[0] || '');

  const dates = Object.keys(neoData).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  const labels = [
    'name',
    //'url',
    //'abs_mag',
    'diameter_km',
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
    diameter_km: neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2),
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
        subtitle={
          'From ' +
          new Date(startDate).toLocaleDateString() +
          ' to ' +
          new Date(endDate).toLocaleDateString()
        }
      />
      <div className="flex mt-4">
        <aside className="w-64 border-r border-gray-300 h-full overflow-y-auto p-4">
          <h2 className="text-lg font-semibold mb-4">Available Dates</h2>
          <ul className="space-y-2">
            {dates.map((date) => (
              <li
                key={date}
                className={`cursor-pointer p-2 rounded ${
                  selectedDate === date ? 'bg-gray-100' : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-4">
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
        </div>
      </div>
    </>
  );
};

export default NEOWSDashboard;
