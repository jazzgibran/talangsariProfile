import { FC } from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/welcome';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Welcome/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
};

export default Home;
