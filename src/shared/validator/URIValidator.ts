import type { Validator } from 'prop-types';
import type { URI } from '~/shared/types/URI';

const URIValidator: Validator<URI> = (
  props: Record<string, unknown>,
  propName: string,
  componentName: string
): Error | null => {
  const prop = props[propName];

  if (typeof prop !== 'string' || !String(prop).match(/^\/.*$/)) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to <${componentName} />. URI must be relative and start with a /`
    );
  }

  return null;
};

export default URIValidator;
