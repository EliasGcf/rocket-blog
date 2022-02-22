import type { NextPage } from 'next';

import { Header } from '@components/Header';

const Home: NextPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Header />
    </div>
  );
};

export default Home;
