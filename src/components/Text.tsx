import React from 'react';

interface TextProps {
  text: string;
}

const Text = ({ text }: TextProps) => {
  return <p className="mt-4 text-sm text-wrap text-justify text-gray-600">{text}</p>;
};

export default Text;
