import Link from 'next/link';
import { HiOutlineArrowRight } from 'react-icons/hi';

const Hero = () => {
	return (
		<div className='flex flex-col h-full place-items-center  '>
			<div className='place-self-center mt-8 '>
				<ProviderLink />
			</div>
			<div className='flex-grow grid place-items-center'>
				<div className='grid  place-items-center gap-12 '>
					<Logo />
					<BookNow />
				</div>
			</div>
		</div>
	);
};

export default Hero;

function Logo() {
	return (
		<div className='flex space-x-2 text-9xl items-center tracking-wider scale-y-110 text-black/80 '>
			<span className=''>nivala</span>
			<span className='text-white text-8xl'>|</span>
			<span className='text-whit'>salon suites</span>
		</div>
	);
}

function BookNow() {
	return (
		<Link href={'/'}>
			<div className='p-4 bg-white rounded-lg text-2xl text-black/70  font-bold tracking-[.16rem] font-questrial shadow-lg hover:shadow-xl hover:text-black/100 cursor-pointer hover:scale-105 transition duration-700'>
				<span className=' '>Schedule Online Today</span>
			</div>
		</Link>
	);
}

function ProviderLink() {
	return (
		<div className='text-3xl tracking-widest hover:scale-110 cursor-pointer transition duration-700 font-nunito text-dark font-bol '>
			<div className='flex items-center space-x-4'>
				<span>Find Your Stylist</span>
				<span>
					<HiOutlineArrowRight />
				</span>
			</div>
		</div>
	);
}
