import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

const Header = ({ titulo, esGestor }) => {
    return (
		<header className='d-flex align-items-center header'>
			<Container>
				<p className={`header-paragraph ${esGestor ? "header-paragraph-margin-top" : "header-paragraph-margin-top"}`}>{ titulo }</p>
			</Container>
		</header>
	);
}

Header.propTypes = {
    titulo: PropTypes.string,
    esGestor: PropTypes.bool
}

export default Header;
