import React from 'react';
import Heading from '../Heading';
import MultiColumnTable from '../MultiColumnTable';

const NEOWS = async () => {
  const apiKey = process.env.NASA_API_KEY;
  const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const neoData = await response.json();
    console.log('neows api call');

    if (!response.ok) {
      throw new Error(neoData.msg || 'Failed to fetch NEO data');
    }

    const startDate = neoData.links.self.slice(48, 58);
    const endDate = neoData.links.next.slice(68, 78);

    return (
      <>
        <Heading
          title={`${neoData.element_count} Asteroids found.`}
          subtitle={
            'From ' +
            new Date(startDate).toLocaleDateString() +
            ' to ' +
            new Date(endDate).toLocaleDateString()
          }
        />
        {neoData.near_earth_objects &&
          Object.entries(neoData.near_earth_objects).map(([date, neos]) => {
            const column_headings = [
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

            const row_data = neos.map((neo) => ({
              name: neo.name,
              //url: neo.nasa_jpl_url,
              //abs_mag: neo.absolute_magnitude_h.toFixed(2),
              diameter_km: neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2),
              is_hazardous: neo.is_potentially_hazardous_asteroid ? 'true' : 'false',
              approach_time: neo.close_approach_data[0].close_approach_date_full.slice(-4),
              //approach_epoch: neo.close_approach_data[0].epoch_date_close_approach,
              velocity_kmh: neo.close_approach_data[0].relative_velocity.kilometers_per_hour,
              miss_distance_km: neo.close_approach_data[0].miss_distance.kilometers,
              //orbiting_body: neo.close_approach_data[0].orbiting_body,
              //is_sentry_object: neo.is_sentry_object ? 'true' : 'false',
            }));

            return (
              <MultiColumnTable
                key={date}
                heading={date}
                column_headings={column_headings}
                row_data={row_data}
              />
            );
          })}
      </>
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching NEO:', error.message);
    }
    return <p>Error fetching data.</p>;
  }
};

export default NEOWS;
