import Title from '@/components/Title';
import React from 'react';

const page = () => {
  return (
    <div>
      <Title heading="EONET: The Earth Observatory Natural Event Tracker">
        <p>
          The Earth Observatory Natural Event Tracker (EONET) is a prototype web service with the
          goal of providing a curated source of continuously updated natural event metadata and
          providing a service that links those natural events to thematically-related web
          service-enabled image sources (e.g., via WMS, WMTS, etc.).
        </p>
      </Title>
      <p className="dark:text-white">WIP</p>
    </div>
  );
};

export default page;
