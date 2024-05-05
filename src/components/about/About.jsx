import Footer from "../../common/Footer";
import Navigation from "../../common/Navigation";
import AboutInfo from "./AboutInfo";
import AboutCategories from "./AboutCategories";
import AboutSocials from "./AboutSocials";

const About = () => {
	return (
		<>
			<Navigation />
			<div className="container m-auto">
				<AboutInfo />
				<AboutCategories />
				<AboutSocials />
			</div>
			<Footer />
		</>
	)
}

export default About

