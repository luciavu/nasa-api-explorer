import React from 'react';
import { BiPlanet } from 'react-icons/bi';

interface LinkSummaryProps {
  heading: string;
  description: string;
}

const LinkSummary = ({ heading, description }: LinkSummaryProps) => {
  return (
    <>
      {' '}
      <BiPlanet className="text-2xl text-gray-400 mb-2" />
      <div className="p-4 flex flex-col gap-2">
        <div className="text-2xl font-semibold text-gray-200">{heading}</div>
        <div className="text-sm text-white/60">{description}</div>
      </div>
    </>
  );
};

export default LinkSummary;
