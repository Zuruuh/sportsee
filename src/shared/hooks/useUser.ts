import { useContext } from 'react';
import { UserContext } from '~/shared/contexts/UserContext';
import { User } from '~/shared/schemas/User';

export const useUser = (): User => {
  const user = useContext(UserContext);

  if (!user) {
    throw new Error('');
  }

  return user;
};
