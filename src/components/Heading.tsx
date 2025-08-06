import React from 'react';
interface HeadingProps {
  title: string;
  subtitle?: string;
  text?: string;
}
const Heading = ({ title, subtitle, text }: HeadingProps) => {
  return (
    <div>
      <h1 className="text-2xl mb-2">{title}</h1>
      <h2 className="text-gray-300 text-l">{subtitle}</h2>
    </div>
  );
};

export default Heading;
