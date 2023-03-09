import type { Decorator } from './Decorator';

export const withCentered: Decorator = (component) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}
  >
    {component()}
  </div>
);
