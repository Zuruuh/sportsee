import { BrowserRouter } from 'react-router-dom';
import type { Decorator } from './Decorator';

export const withRouter: Decorator = (component) => (
  <BrowserRouter>{component()}</BrowserRouter>
);
