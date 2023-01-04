import Link from 'next/link';
import NextPageTease from '../../utils/NextPageTease';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className='flex flex-col h-screen place-items-center  w-full'>
			<div className='flex-grow grid place-items-center'>
				<div className='grid gap-6 lg:gap-12  '>
					<motion.div
						initial={{ scale: 1.4, opacity: 0.4 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1.8 }}
						className='text-6xl sm:text-7xl lg:text-8xl'
					>
						<Logo />
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.8, duration: 0.7 }}
						className="place-self-center lg:text-xl"
					>
						<BookNow />
					</motion.div>
				</div>
			</div>
			<NextPageTease title='Find Your Stylist' />
		</div>
	);
};

export default Hero;

export const Logo = () => {
	return (
		<div className='text-center grid gap-2 lg:flex space-x-2   place-items-center tracking-wider  text-black/80  '>
			<span className='border-b-2 lg:border-b-0 border-white pb-2 lg:pb-0'>
				nivala
			</span>
			<span className='text-white hidden lg:block'>|</span>
			<span>salon suites</span>
		</div>
	);
};

export function BookNow() {
	return (
		<div>
			<Link href={'/'}>
				<div className='p-2 px-4 lg:p-4 bg-white rounded-lg  text-black/70  font-bold tracking-[.16rem] font-questrial shadow-lg hover:shadow-xl hover:text-black/100 cursor-pointer hover:scale-105 transition duration-700'>
					<span className=' '>Schedule Online Today</span>
				</div>
			</Link>
		</div>
	);
}
