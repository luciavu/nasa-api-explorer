import Title from '@/components/Title';
import React from 'react';

const page = () => {
  return (
    <div>
      <Title heading="EONET: The Earth Observatory Natural Event Tracker">
        <p>
          The EPIC API provides information on the daily imagery collected by DSCOVR&apos;s Earth
          Polychromatic Imaging Camera (EPIC) instrument. Uniquely positioned at the Earth-Sun
          Lagrange point, EPIC provides full disc imagery of the Earth and captures unique
          perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel
          CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope.
        </p>
      </Title>
      <p className="dark:text-white">WIP</p>
    </div>
  );
};

export default page;
