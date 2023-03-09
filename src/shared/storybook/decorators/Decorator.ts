import { type Decorator as StorybookDecorator } from '@storybook/react';

// By default Storybook Decorator types takes StrictArgs (A Record<string, unknown>)
// But since we can't use generics here, we must allow any args (Record<string, any>)
// Or typescript will be angry :/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Decorator = StorybookDecorator<Record<string, any>>;
