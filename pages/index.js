import Hero from '../components/layouts/Landing/Hero';
import StylistsLayout from '../components/Stylist/StylistsLayout';

export default function Home() {
	return (
		<div className=' h-screen snap-y snap-mandatory overflow-scroll [&>*]:snap-center [&>*]:h-screen scroll scroll-smooth scrollbar-hide  '>
			<div>
				<Hero />
			</div>
			<div>
				<StylistsLayout />
			</div>
			<div>
				<StylistsLayout />
			</div>
			<div>
				<StylistsLayout />
			</div>
		</div>
	);
}
