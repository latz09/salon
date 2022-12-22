import { FaFacebook } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className=' py-16 grid place-items-center text-dark tracking-widest '>
			<div className='grid gap-8 '>
				<Address />
				<RecommendThisPage />
			</div>
		</div>
	);
};

export default Footer;

function Address() {
	return (
		<div className='grid place-items-center gap-1 text-xl md:text-2xl  '>
			<span className='text-3xl'>Nivala Salon Suites</span>
			<span>15039 Crestone Ave W</span>
			<span>Rosemount, MN 55058</span>
		</div>
	);
}

function RecommendThisPage() {
	return (
		<div className='grid gap-2 place-items-center text-xl md:text-2xl '>
			<span>Recommend us!</span>
			<div className='flex space-x-8 text-2xl md:text-3xl'>
				<span>
					<FaFacebook />
				</span>
				<span>
					<BsTwitter />
				</span>
			</div>
		</div>
	);
}
