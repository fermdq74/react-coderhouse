
import './style.css';
import Link from '../Link/Link.jsx';
import CartWidget from '../Cart/CartWidget';

const Navbar = () => {

    const navItems = [
        {
            itemName: 'Inicio',
            itemLink: '/'
        },
        {
            itemName: 'TV y Audio',
            itemLink: '/category/tv_y_audio'
        },
        {
            itemName: 'Tecnología',
            itemLink: '/category/tecnologia'
        },
        {
            itemName: 'Hogar',
            itemLink: '/category/hogar'
        }
    ];

    const cartCount = 0;

    return (
            <nav className="navbar bg-primary navbar-expand-lg px-md-4" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link 
                        label="Zebra Store"
                        url="/"
                        cssClass="navbar-brand"
                    />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarToggler">
                        <ul className="nav mb-2 mb-lg-0">
                            {
                                navItems.map((navItem, index) => {
                                    return (
                                        <li 
                                            className="nav-item"
                                            key={index}
                                        >
                                            <Link 
                                                label={navItem.itemName}
                                                url={navItem.itemLink}
                                                cssClass={'nav-link'}
                                            />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <CartWidget
                        count={cartCount}
                    />
                </div>
            </nav>  
    )
}

export default Navbar;