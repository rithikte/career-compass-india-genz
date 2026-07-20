import React from 'react';

const DomainExplore: React.FC = () => {
  return (
    <div
      className="ug-domain-explore"
      style={{ background: '#0A1020', color: '#F5F7FA', borderRadius: 24 }}
    >
      <style>{`
        .ug-domain-explore { position: relative; overflow: hidden; min-height: 100%; }
        @media (prefers-reduced-motion: reduce) {
          .ug-domain-explore * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
};

export default DomainExplore;
