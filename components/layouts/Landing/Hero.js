import Link from 'next/link';
import NextPageTease from '../../utils/NextPageTease';

const Hero = () => {
	return (
		<div className='flex flex-col h-screen place-items-center  '>
			<div className='flex-grow grid place-items-center'>
				<div className='grid  place-items-center gap-6 lg:gap-12 '>
					<div className='text-4xl lg:text-9xl '>
						<Logo />
					</div>
					<div className='text-lg lg:text-2xl'>
						<BookNow />
					</div>
				</div>
			</div>
			<NextPageTease title='Find Your Stylist' />
		</div>
	);
};

export default Hero;

export const Logo = () => {
	return (
		<div className='flex space-x-2  items-center tracking-wider scale-y-110 text-black/80 '>
			<span className=''>nivala</span>
			<span className='text-white lg:text-8xl'>|</span>
			<span className='text-whit'>salon suites</span>
		</div>
	);
};

export function BookNow() {
	return (
		<Link href={'/'}>
			<div className='p-2 px-4 lg:p-4 bg-white rounded-lg  text-black/70  font-bold tracking-[.16rem] font-questrial shadow-lg hover:shadow-xl hover:text-black/100 cursor-pointer hover:scale-105 transition duration-700'>
				<span className=' '>Schedule Online Today</span>
			</div>
		</Link>
	);
}
