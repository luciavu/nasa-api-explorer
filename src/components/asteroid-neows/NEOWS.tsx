import React from 'react';
import NEOWSDashboard from './NEOWSDashboard';

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
        <NEOWSDashboard
          numAsteroids={neoData.element_count}
          startDate={startDate}
          endDate={endDate}
          neoData={neoData.near_earth_objects}
        />
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
