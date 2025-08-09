import React from 'react';
interface TableProps {
  title?: string;
  caption?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>[];
}
const Table = ({ title, caption, data }: TableProps) => {
  return (
    <>
      {' '}
      {title && <caption className="text-lg font-semibold mb-4">{title}</caption>}
      {caption && <caption className="text-sm text-gray-500 mb-2">{caption}</caption>}
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="mb-1">
            {Object.entries(item).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center border-b border-gray-400 py-1 text-sm"
              >
                <span className="text-gray-400">{key}</span>
                <span className="dark:text-gray-200 text-gray-700 font-medium truncate">
                  {value || `N/A`}
                </span>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p className="text-gray-500 italic">No data available</p>
      )}
    </>
  );
};

export default Table;
