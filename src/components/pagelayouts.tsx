import React, {CSSProperties} from 'react';

import './pagelayouts.css';

export interface FullAreaProps {
  style?: CSSProperties;
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  centered?: boolean;
}

export const FullArea: React.FC<FullAreaProps> = (props) => {
  const {className, children, orientation, centered, style} = props;

  return (
      <div
          style={style}
          className={
            `pagelayouts-fullarea page-fullarea-${orientation || 'horizontal'} ` +
            (centered ? `pagelayouts-fullarea-centered ` : "") +
            (className || "")
          }
      >
        {children}
      </div>
  );
};
