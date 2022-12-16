import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col h-screen px-4 ">
			<div>
				<Navbar />
			</div>
			<div className="flex-grow">
				<main>{children}</main>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
