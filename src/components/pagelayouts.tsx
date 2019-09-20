import React, {CSSProperties} from 'react';

import './pagelayouts.css';

export interface FullAreaProps {
  style?: CSSProperties;
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  centered?: boolean;
}

/**
 * This is a utility component wrapping some css code written in `./pagelayouts.css`.
 * 
 * It is useful to have helper components whenever we feel like we are doing the
 * same thing over and over. I mean we always need to center some stuff.
 */
export const FullArea: React.FC<FullAreaProps> = (props) => {
  const {className, children, orientation, centered, style} = props;

  return (
      <div
          style={style}
          className={
            `pagelayouts-fullarea pagelayouts-fullarea-${orientation || 'horizontal'} ` +
            (centered ? `pagelayouts-fullarea-centered ` : "") +
            (className || "")
          }
      >
        {children}
      </div>
  );
};
