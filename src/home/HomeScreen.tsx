import NavigationBar from '../app/components/NavigationBar.tsx';
import HomeChips from './HomeChips.tsx';
import HomeCustomBooking from './HomeCustomBooking.tsx';
import { useMemo, useState } from 'react';
import HomeGrid from './HomeGrid.tsx';
import Footer from '../app/components/Footer.tsx';

export default function HomeScreen() {
  const chips = useMemo(
    () => [
      'Chef at Home',
      'Large Event',
      'Meal Prep',
      'Gormet Delivery',
      'Cooking Class',
      'Fine Dining',
      'Corporate Dining',
      'CHEFS'
    ],
    []
  );
  const [selected, setSelected] = useState(chips[0]);

  return (
    <main className="h-screen w-screen">
      <NavigationBar />
      <HomeChips chips={chips} selected={selected} setSelected={setSelected} />
      <HomeCustomBooking title={selected} />
      <HomeGrid />
      <Footer />
    </main>
  );
}
