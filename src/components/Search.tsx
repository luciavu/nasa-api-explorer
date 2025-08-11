'use client';
import { useState } from 'react';
import StyledLink from './StyledLink';
import LinkSummary from './LinkSummary';
import { BiSearch } from 'react-icons/bi';
interface SearchProps {
  list: { heading: string; description: string; href: string; icon: React.ReactNode }[];
}
const Search = ({ list }: SearchProps) => {
  const [query, setQuery] = useState('');

  const filteredResults = list.filter(
    (item) =>
      item.heading.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full">
      <BiSearch className="absolute text-white/60 z-1 top-3 left-3" />
      <input
        className="mb-8 w-full md:w-120 p-2 pl-10 outline-1 outline-white/20 backdrop-blur-sm  bg-black/10 text-sm text-white/60 placeholder:text-white/60  rounded-xl focus:outline-none focus:ring-1 focus:ring-white/20 focus:bg-transparent"
        type="text"
        name="searchbar"
        id="searchbar"
        placeholder="Search for an API..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {filteredResults.map((item, index) => (
            <StyledLink key={index} type="summary" href={item.href} target_blank={false}>
              <LinkSummary icon={item.icon} heading={item.heading} description={item.description} />
            </StyledLink>
          ))}
        </div>
      ) : (
        <p className="text-sm text-white/60">No results found.</p>
      )}
    </div>
  );
};

export default Search;
