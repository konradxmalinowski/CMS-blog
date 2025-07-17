import React from 'react';

const Category = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="bg-gray-200 text-neutral-950 rounded-xl text-center px-2 py-0.5">
      {children}
    </span>
  );
};

export default Category;
