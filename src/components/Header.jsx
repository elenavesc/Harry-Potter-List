import harryPotter from "../images/harrypotter.png";
import '../scss/layout/Header.scss';
function Header() {
    return(
        <header className="header">
            <div className="header_image">
                <img src={harryPotter} alt="logoharrypotter" />
            </div>
        </header>
    );
}
export default Header;