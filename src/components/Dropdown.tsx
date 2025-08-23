import React from 'react';
import Text from './Text';

interface DropdownProps {
  label: string;
  options: string[];
  onChange: (value: string) => void;
}

const Dropdown = ({ label, options, onChange }: DropdownProps) => {
  return (
    <div className="my-4 flex gap-2 items-center ">
      <Text>Sort by:</Text>
      <select
        className="p-1 dark:bg-black bg-white border dark:border-gray-800 dark:text-gray-400 border-gray-300 rounded-sm focus:outline-none focus:ring-2 light:focus:ring-gray dark:focus:ring-white"
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option className="" key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
