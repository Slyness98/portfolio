import React, {useEffect, useCallback} from 'react';

import Banner from '../components/hero-banner/Banner';
import Stars from '../components/space-background/Stars';

const Home = () => {
  return (
	<>
	  <Stars />
	  <Banner />
	</>
  );
}

export default Home;