import React from 'react';

import Banner from '../components/hero-banner/Banner';
import Stars from '../components/space-background/Stars';

const Home = () => {
  return (
  <>
	<main className="section-home">
	  <Banner />
	</main>
	<Stars />
  </>
  );
}

export default Home;