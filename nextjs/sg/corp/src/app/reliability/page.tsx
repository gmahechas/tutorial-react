import Hero from '@/components/hero';
import reliabilityImg from 'public/reliability.jpg';

export default function ReliabilityPage() {
	return (
    <Hero
      imgData={reliabilityImg}
      imgAlt='car factory'
      title='Reliability Cloud Hosting'
    />
	)
}
