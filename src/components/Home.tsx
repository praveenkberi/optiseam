import Hero from './Hero';
import Overview from './Overview';
import Benefits from './Benefits';
import Testimonials from './Testimonials';

function Home() {
  return (
    <div className="bg-soft-blue min-h-screen">
      <Hero />
      <Overview />
      <Benefits />
      {/*<Testimonials /> */}
    </div>
  );
}

export default Home; 