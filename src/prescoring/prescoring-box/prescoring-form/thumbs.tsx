import * as React from 'react';
import { StatelessComponent } from 'react';

type ThumbsProps = {
  value: boolean
}

export const Thumbs: StatelessComponent<ThumbsProps> = ( {value} ) => {

  if ( value === null ) {
    return <div></div>
  }

  return (
    <div>
      { value ? '👍' : '👎' }
    </div>
  );

};

