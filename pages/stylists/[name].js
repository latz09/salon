import IndividualPageLayout from '../../components/individualPages/IndividualPageLayout';
import connectToDatabase from '../../lib/mongodb';
import stylistFillerImage from '../../public/images/stylistFiller.png';

const Stylist = ({ stylist }) => {
	return (
		<div className='grid text-black max-w-[90rem] mx-auto'>
			{stylist.map((stylist) => (
				<div key={stylist._id}>
					<IndividualPageLayout
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

export default Stylist;

export const getStaticPaths = async () => {
	const client = await connectToDatabase;
	const db = client.db('salon');
	const stylistsCollection = db.collection('stylists');
	const data = await stylistsCollection.find().toArray();

	const paths = data.map((item) => {
		return {
			params: { name: item.firstName },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const stylistsName = context.params.name;
	const client = await connectToDatabase;
	const db = client.db('salon');
	const dbCollection = db.collection('stylists');
	const data = await dbCollection.find({ firstName: stylistsName }).toArray();

	return {
		props: { stylist: JSON.parse(JSON.stringify(data)) },
	};
};
