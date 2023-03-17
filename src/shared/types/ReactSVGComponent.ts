import type * as React from 'react';

export type ReactSvgComponent = React.FunctionComponent<
  React.ComponentProps<'svg'> & { title?: string }
>;
