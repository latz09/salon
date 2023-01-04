import { HiArrowNarrowDown } from 'react-icons/hi';
import { motion } from 'framer-motion';

const NextPageTease = ({ title }) => {
	return (
		<div className='text-xl lg:text-3xl tracking-widest hover:scale-110 cursor-pointer transition duration-700 font-nunito text-dark font-bol mb-16 '>
			<motion.div
				className='grid place-items-center gap-4'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2, duration: 1.6 }}
			>
				<span>{title}</span>
				<motion.div
					className=' text-3xl lg:text-4xl '
					initial={{  y: 0 }}
					animate={{  y: '6px' }}
					transition={{ duration: 0.9, repeat: Infinity, repeatType:'mirror' }}
				>
					<HiArrowNarrowDown />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default NextPageTease;
