import React from 'react';

interface TextProps {
  text: string;
}

const Text = ({ text }: TextProps) => {
  return (
    <p className="mt-4 text-sm text-wrap text-justify text-gray-600 dark:text-gray-500">{text}</p>
  );
};

export default Text;
