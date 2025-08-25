import Title from '@/components/Title';
import React from 'react';

const page = () => {
  return (
    <div>
      <Title heading="DONKI: Space Weather Database">
        <p>
          The Space Weather Database Of Notifications, Knowledge, Information (DONKI) chronicles the
          daily interpretations of space weather observations, analysis, models, forecasts, and
          notifications provided by the Space Weather Research Center (SWRC). It provides a
          comprehensive knowledge-base search functionality to support anomaly resolution and space
          science research, intelligent linkages, relationships, cause-and-effects between space
          weather activities and comprehensive webservice API access to information stored in DONKI.
        </p>
        <p className="mt-4">This API consists of the following component services:</p>
      </Title>
      <p className="dark:text-white">WIP</p>
    </div>
  );
};

export default page;
