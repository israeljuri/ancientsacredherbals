import AncientRoot from './components/AncientRoot';
import Header from './components/Header';
import Intro from './components/Intro';
import Products from './components/Products';
import Profiles from './components/Profiles';
import Quotes from './components/Quotes';
import TalesOfWisdom from './components/TalesOfWisdom';

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <AncientRoot />
      <TalesOfWisdom />
      <Products />
      <Profiles />
      <Quotes />
    </>
  );
}
