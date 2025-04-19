import homeImg from '@/public/images/home.jpg'
import Hero from '@/components/hero'

export default function AppPage() {
  return (
    <Hero imgData={homeImg} imgAlt="home" title="Home" />
  );
}
