import * as React from 'react';

function M(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M9 4a1 1 0 011-1h4a1 1 0 011 1v16a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6H0v-4h9V4zm15 6h-5v4h5v-4z" />
    </svg>
  );
}

export default M;
