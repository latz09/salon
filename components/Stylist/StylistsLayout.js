import Image from 'next/image';
import Link from 'next/link';
import { BsArrowBarRight } from 'react-icons/bs';
import { stylists } from '../../data/stylists';
import stylistFillerImage from '../../public/images/stylistFiller.png';

const StylistsLayout = ({data}) => {
	return (
		<div className='max-w-[90rem] mx-auto  grid gap-8 p-4 md:grid-cols-2 lg:p-0 xl:grid-cols-3 lg:gap-16 text-black '>
			{data.map((stylist) => (
				<div key={stylist.officeExtension} className="mx-2">
					<Stylist
						firstName={stylist.firstName}
						lastName={stylist.lastName}
						specialty={stylist.specialty}
						email={stylist.email}
						facebook={stylist.faceBook}
						cellNumber={stylist.cellNumber}
						officeExtension={stylist.officeExtension}
						image={stylistFillerImage}
					/>
				</div>
			))}
		</div>
	);
};

export default StylistsLayout;

function Stylist({
	firstName,
	lastName,
	image,
	specialty,
	email,
	faceBook,
	cellNumber,
	officeExtension,
}) {
	return (
		<Link href={`/stylists/${firstName}`}>
			<div className='grid gap-8 tracking-widest font-nunito shadow-md border-black/10 border hover:scale-105 hover:shadow-lg transition duration-700 p-8 cursor-pointer'>
				<CardHeading
					image={image}
					firstName={firstName}
					lastName={lastName}
					specialty={specialty}
				/>
				<PersonalPageLink firstName={firstName} />
				<CardContact
					email={email}
					cellNumber={cellNumber}
					officeExtension={officeExtension}
				/>
			</div>
		</Link>
	);
}

function FullName({ first, last }) {
	return (
		<div className='flex space-x-1 text-2xl font-bold'>
			{' '}
			<span>{first}</span>
			<span>{last}</span>
		</div>
	);
}

function CardHeading({ image, firstName, lastName, specialty }) {
	return (
		<div className='grid place-items-center gap-4 '>
			<div className=' w-2/5 grid place-items-center'>
				<Image src={image} alt='' />
			</div>
			<div className='grid place-items-center '>
				<FullName first={firstName} last={lastName} />
				<span className='font-semibold text-xl font-nunito'> {specialty}</span>
			</div>
		</div>
	);
}

function CardContact({ email, cellNumber, officeExtension }) {
	return (
		<div className='grid gap-2 text-lg font-questrial font-semibold tracking-widest '>
			<span className=''>{email}</span>
			<span>{cellNumber}</span>
			<span>
				651-322-1955 ext{' '}
				<span className='font-bold text-dark'> {officeExtension}</span>
			</span>{' '}
		</div>
	);
}

function PersonalPageLink({ firstName }) {
	return (
		<div className='flex space-x-4 items-center justify-center text-xl text-dark font-extrabold'>
			<span>About {firstName}</span>
			<span className='text-dark'>
				<BsArrowBarRight />
			</span>
		</div>
	);
}
