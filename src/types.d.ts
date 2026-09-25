import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean | string;
        'camera-controls'?: boolean | string;
        'shadow-intensity'?: string;
        'shadow-softness'?: string;
        'camera-orbit'?: string;
        'environment-image'?: string;
        'exposure'?: string;
        'interaction-prompt'?: string;
        'tone-mapping'?: string;
        'auto-rotate-delay'?: string;
        'rotation-per-second'?: string;
      }, HTMLElement>;
    }
  }
}
