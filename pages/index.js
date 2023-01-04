import Location from '../components/businessDetails/Location';
import Hero from '../components/layouts/Landing/Hero';
import StylistsLayout from '../components/Stylist/StylistsLayout';
import connectToDatabase from '../lib/mongodb';

export default function Home({ stylists }) {
	// console.log(stylists)
	return (
		<div className='grid gap-16 mb-24 place-items-center'>
			<Hero />
			<div>
				<StylistsLayout data={stylists} />
			</div>
		</div>
	);
}

// h-screen snap-y snap-mandatory overflow-scroll [&>*]:snap-center [&>*]:h-screen scroll scroll-smooth scrollbar-hide
export async function getStaticProps() {
	const client = await connectToDatabase;
	const db = client.db('salon');
	const stylistsCollection = db.collection('stylists');
	const data = await stylistsCollection.find().toArray();

	return {
		props: { stylists: JSON.parse(JSON.stringify(data)) },
	};
}
