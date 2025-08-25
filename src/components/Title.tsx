import React from 'react';

interface TitleProps {
  heading: string;
  children?: React.ReactNode;
}
const Title = ({ heading, children }: TitleProps) => {
  return (
    <div className="mb-10">
      <p className="text-4xl font-semibold mb-4 mt-10 dark:text-white">{heading}</p>
      <div className="dark:text-white text-md">{children}</div>
    </div>
  );
};

export default Title;
