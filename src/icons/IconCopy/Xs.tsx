import * as React from 'react';

function Xs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" {...props}>
      <path d="M1 1a1 1 0 00-1 1v6a1 1 0 001 1h1V8H1V2h6v1h1V2a1 1 0 00-1-1H1z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V5zm1 0h6v6H4V5z"
      />
    </svg>
  );
}

export default Xs;
