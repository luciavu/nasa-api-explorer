import React from 'react';
import { scientificNotation } from '@/lib/scientificNotation';
import Text from '../Text';

interface InfoCardProps {
  name: string;
  diameter: string;
  hazardous: boolean;
  approach_time: string;
  velocity: number;
  miss_distance: number;
}

const InfoCard = ({
  name,
  diameter,
  hazardous,
  approach_time,
  velocity,
  miss_distance,
}: InfoCardProps) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center mb-4 gap-2">
        <h3 className="text-4xl font-semibold">{name.replaceAll('(', '').replaceAll(')', '')}</h3>
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col gap-1 ">
          {hazardous && (
            <div className="bg-red-500 text-white text-sm px-2 py-0.5 font-semibold w-fit">
              Hazardous
            </div>
          )}
          <p className="text-3xl text-gray-500 mb-2">
            {new Date(approach_time).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
          <div className="text-md mb-1">
            <p className="font-semibold dark:text-gray-500 ">Velocity:</p>
            {scientificNotation(velocity)} km/h
          </div>
          <div className="text-md mb-1">
            <p className="font-semibold dark:text-gray-500">Miss Distance:</p>
            {scientificNotation(miss_distance)} km
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-center mb-2 mr-3 gap-2">
            <div className=" rock-icon"></div>
            <Text>Estimated Size:</Text>
            <p className="text-lg mb-1 font-semibold ">{diameter}m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
