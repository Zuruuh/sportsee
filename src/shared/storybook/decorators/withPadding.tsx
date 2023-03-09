import type { Decorator } from './Decorator';

export const withPadding: Decorator = (component) => (
  <div style={{ padding: '1rem' }}>{component()}</div>
);
