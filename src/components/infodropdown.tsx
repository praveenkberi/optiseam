import React, { useState, useRef, useEffect } from 'react';

interface InfoDropdownProps {
  title: React.ReactNode;
  
  children: React.ReactNode;
}

const InfoDropdown: React.FC<InfoDropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
  <div
    ref={containerRef}
    className="max-w-md bg-gray-100 rounded-xl shadow-md mx-auto transition-all duration-300"
  >
    <button
      className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-gray-300 transition rounded-t-xl focus:outline-none focus:ring-0"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="font-semibold text-sm text-gray-800">{title}</span>
      <span className="text-gray-500 text-sm transition-transform duration-300">
        {isOpen ? '▲' : '▼'}
      </span>
    </button>
    {isOpen && (
      <div className="px-4 pt-4 pb-4 text-gray-700 text-sm rounded-b-xl">
        {children}
      </div>
    )}
  </div>
);

};

export default InfoDropdown;
