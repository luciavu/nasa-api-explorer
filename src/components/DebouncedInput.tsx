import React, { useState, useEffect } from 'react';

interface DebouncedInputProps {
  query: string;
  setQuery: (value: string) => void;
}
const DebouncedInput = ({ query, setQuery }: DebouncedInputProps) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setQuery(inputValue);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, setQuery]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      className="mb-8 w-full md:w-120 p-2 pl-10 outline-1 outline-white/20 backdrop-blur-sm  bg-black/5 text-sm text-white/60 placeholder:text-white/60  rounded-xl focus:outline-none focus:ring-1 focus:ring-white/20 focus:bg-transparent"
      type="text"
      name="searchbar"
      id="searchbar"
      placeholder="Search for an API..."
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default DebouncedInput;
