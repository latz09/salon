import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col font-questrial  mx-auto ">
			{/* <div className="">
				<Navbar />
			</div> */}
			<div className="flex-grow ">
				<main>{children}</main>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
