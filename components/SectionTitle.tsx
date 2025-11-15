
import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, className = '' }) => {
  return (
    <div className={className}>
      <p className="text-secondary font-semibold mb-2">{subtitle}</p>
      <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
