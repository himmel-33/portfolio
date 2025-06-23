import React from 'react';

export function Button({ children, variant = 'default', className = '', ...props }) {
  const base =
    'px-4 py-2 rounded font-medium transition-colors ' +
    (variant === 'outline'
      ? 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-50'
      : 'bg-blue-600 text-white hover:bg-blue-700');
  return (
    <button className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}