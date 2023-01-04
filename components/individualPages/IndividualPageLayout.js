import Image from 'next/image';
import { dumbyAbout } from '../../data/stylists';
import StylistHeader from './StylistHeader';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';
import { FaFacebook } from 'react-icons/fa';
import { GiSmartphone } from 'react-icons/gi';
import { BiBuilding } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { BookNow } from '../layouts/Landing/Hero';
import { useState } from 'react';

const IndividualPageLayout = ({
	firstName,
	lastName,
	specialty,
	email,
	facebook,
	cellNumber,
	officeExtension,
	image,
}) => {
	return (
		<div className=' font-nunito grid gap-12 lg:gap-24 mx-4 border-b border-black border-opacity-30  pb-16'>
			<div>
				<StylistHeader name={firstName} />
			</div>
			<div className='grid gap-8 lg:gap-16 place-items-center'>
				<div className='grid gap-4 lg:gap-0 lg:grid-cols-3 place-items-center '>
					<div className='lg:col-span-1 grid place-items-center w-1/3 lg:place-self-end lg:w-3/5 '>
						<Image src={image} alt='' />
					</div>
					<div className='lg:col-span-2 h-full grid gap-4 items-center'>
						<Details
							firstName={firstName}
							lastName={lastName}
							specialty={specialty}
							email={email}
							facebook={facebook}
							cellNumber={cellNumber}
							officeExtension={officeExtension}
						/>
					</div>
				</div>
				<div>
					<About name={firstName} />
				</div>
			</div>
		</div>
	);
};

export default IndividualPageLayout;

function Details({
	firstName,
	lastName,
	specialty,
	email,
	facebook,
	cellNumber,
	officeExtension,
}) {
	return (
		<div className='h-full grid gap-8 lg:gap-12'>
			<div className=' grid gap-4 place-items-center'>
				<div className='grid place-items-center lg:flex lg:space-x-1 text-2xl'>
					<div className='flex space-x-1'>
						<span>{firstName}</span>
						<span>{lastName} - </span>
					</div>
					<span className='lg:mx-4'>{specialty}</span>
				</div>
				<div className='flex space-x-4 text-2xl text-dark  '>
					<span>
						<BsInstagram />{' '}
					</span>
					<span>
						<BsTwitter />{' '}
					</span>
					<span>
						<FaFacebook />{' '}
					</span>
				</div>
			</div>
			<div className='grid place-items-center lg:text-lg'>
				<BookNow />
			</div>
			<div className='grid gap-2 text-lg tracking-widest '>
				<div className='flex space-x-2 lg:space-x-4 items-center'>
					<span className='text-dark'>
						<GiSmartphone />
					</span>
					<span>{cellNumber}</span>{' '}
				</div>
				<div className='flex space-x-2 lg:space-x-4 items-center'>
					<span className='text-dark'>
						<BiBuilding />
					</span>
					<span>651-322-1955 ext {officeExtension}</span>
				</div>
				<div className='flex space-x-2 lg:space-x-4 items-center'>
					<span className='text-dark'>
						<AiOutlineMail />
					</span>
					<span>{email}</span>
				</div>
			</div>
		</div>
	);
}

function About({ name }) {
	const [openAbout, setOpenAbout] = useState(false);

	return (
		<div className='grid gap-4 max-w-4xl mx-auto text-lg font-roboto text-black place-items-center '>
			<div className='flex space-x-4 items-center'>
				<div className='text-3xl tracking-wider text-center lg:text-start'>
					About {name}...
				</div>
				<button
					onClick={() => {
						setOpenAbout(!openAbout);
					}}
				>
					<span className='text-dark text-3xl hover:opacity-70 transition duration-700'>
						{!openAbout ? <AiFillCaretDown /> : <AiFillCaretUp />}
					</span>
				</button>
			</div>
			<AnimatePresence>
				{openAbout && (
					<motion.div
						className='tracking-wider leading-8 text-justify '
						initial={{ opacity: 0, scale: 0.7 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1 }}
						exit={{ opacity: 0, scale: 0 }}
					>
						{dumbyAbout}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
