import React from 'react';
import Text from './Text';

interface MultiColumnTableProps {
  heading: string;
  caption?: string;
  column_headings: string[];
  row_data: Record<string, string | number>[];
}

const MultiColumnTable = ({
  heading,
  caption,
  column_headings,
  row_data,
}: MultiColumnTableProps) => {
  if (!row_data || row_data.length === 0) {
    return <Text>No data available</Text>;
  }
  return (
    <table className="overflow-x-scroll mb-8 w-full border-collapse">
      {heading && <caption className="text-lg font-semibold mb-4">{heading}</caption>}
      {caption && <caption className="text-sm text-gray-500 mb-2">{caption}</caption>}
      <thead>
        {' '}
        <tr>
          {column_headings &&
            column_headings.map((heading, index) => <th key={index}>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {' '}
        {row_data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {column_headings.map((key, colIndex) => (
              <td key={colIndex} className="border-b border-gray-400 py-1 text-sm">
                {row[key] || 'N/A'}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MultiColumnTable;
