import type { Validator } from 'prop-types';
import type { HexColor } from '~/shared/types/HexColor';

const HexColorValidator: Validator<HexColor> = (
  props: Record<string, unknown>,
  propName: string,
  componentName: string
): Error | null => {
  const prop = props[propName];

  if (
    typeof prop !== 'string' ||
    !String(prop).match(/^#([a-f\d]{3}|[a-f\d]{6})$/i)
  ) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to <${componentName} /> (${String(
        prop
      )}). Hex code must start with a # and have 3 or 6 digits`
    );
  }

  return null;
};

export default HexColorValidator;
