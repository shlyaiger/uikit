import * as React from 'react';

function M(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M5 5v3h5.5v12h3V8H19V5H5z" />
    </svg>
  );
}

export default M;
