import { HiArrowNarrowDown } from 'react-icons/hi';


const NextPageTease = ({title}) => {
	return (
		<div className='text-xl lg:text-3xl tracking-widest hover:scale-110 cursor-pointer transition duration-700 font-nunito text-dark font-bol mb-16 '>
			<div className='grid place-items-center gap-4'>
				<span>{title}</span>
				<span className='animate-pulse text-2xl lg:text-4xl'>
					<HiArrowNarrowDown />
				</span>
			</div>
		</div>
	);
};

export default NextPageTease;
