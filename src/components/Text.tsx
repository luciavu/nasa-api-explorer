import React from 'react';

interface TextProps {
  children: React.ReactNode;
}

const Text = ({ children }: TextProps) => {
  return (
    <p className="text-sm text-wrap text-justify text-gray-600 dark:text-gray-500">{children}</p>
  );
};

export default Text;
