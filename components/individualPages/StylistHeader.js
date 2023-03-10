import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import { stylistLinks } from '../../data/stylists';

import { motion } from 'framer-motion';

const StylistHeader = ({ name }) => {
	return (
		<div className='my-4 font-nunito tracking-widest text-dark font-thin grid gap-8'>
			<IndividualPageHeader name={name} />
			<Navigation />
		</div>
	);
};

export default StylistHeader;

function Navigation() {
	return (
		<div className='grid grid-cols-3 gap-4 lg:gap-0 lg:grid-cols-6 place-items-center text-black opacity-100 tracking-widest'>
			{stylistLinks.map((link) => (
				<div
					key={link.name}
					className='cursor-pointer text-lg lg:text-2xl font-questrial '
				>
					<Link href={`/stylists/${link.name}`}>
						<span>{link.name}</span>
					</Link>
				</div>
			))}
		</div>
	);
}

function IndividualPageHeader({ name }) {
	return (
		<div className='grid  gap-6 pt-2'>
			<div className='grid place-items-cente ml-8 opacity-80 hover:opacity-100 hover:scale-105 transition duration-700 cursor-pointer'>
				<StylistPageLogo />
			</div>
			<div className='border-b pb-3 border-black border-opacity-30 flex justify-between'>
				<div className='text-2xl lg:text-4xl font-bold flex space-x-2'>
					{' '}
					<span className='opacity-60 font-thin italic'> Stylist -</span>{' '}
					<motion.div
						initial={{ opacity: 0, scale: 0.4 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3 }}
					>
						{name}
					</motion.div>
				</div>
				<Link href={'/'}>
					<div className='text-2xl cursor-pointer  flex items-center  space-x-4 mr-8 hover:text-white hover:scale-105 transition duration-700'>
						<span>
							<BiArrowBack />
						</span>
						<span>home</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

function StylistPageLogo() {
	return (
		<Link href={'/'}>
			<div className='text-2xl text-center flex space-x-2   place-items-center tracking-wider  text-black/80 '>
				<span className=''>nivala</span>
				<span className='text-white'>|</span>
				<span>salon suites</span>
			</div>
		</Link>
	);
}
