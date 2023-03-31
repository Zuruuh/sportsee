import { createContext } from 'react';
import type { User } from '~/shared/schemas/User';

export const UserContext = createContext<User>({ id: 12 });
