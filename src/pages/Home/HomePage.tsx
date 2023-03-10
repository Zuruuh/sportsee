import { type FC } from 'react';

const HomePage: FC = () => {
  console.log(import.meta.env);

  return (
    <main>
      <p>Hello, Home</p>
    </main>
  );
};

export default HomePage;
