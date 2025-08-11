import React from 'react';
interface LinkSummaryProps {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

const LinkSummary = ({ icon, heading, description }: LinkSummaryProps) => {
  return (
    <>
      {icon}
      <div className="p-4 flex flex-col gap-2">
        <div className="text-2xl font-semibold text-gray-200">{heading}</div>
        <div className="text-sm text-white/60">{description}</div>
      </div>
    </>
  );
};

export default LinkSummary;
