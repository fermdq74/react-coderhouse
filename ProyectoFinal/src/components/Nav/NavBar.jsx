import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../Cart/CartWidget';
import { getCategories } from '../../services/products.js';
import './style.scss';

const Navbar = () => {

    const [categories, setCategories] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        getCategories()
            .then( result => {
                setCategories(result.categories);
            }).catch((error) => {
                console.log(error);
            });
    }, []);

    const navItems = categories;

    return (
            <nav className="navbar bg-primary navbar-expand-lg px-md-4" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className='navbar-brand' to='/'>
                        Zebra Store
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarToggler">
                        <ul className="nav mb-2 mb-lg-0">
                            <li className='nav-item'>
                                <NavLink 
                                    to='/' 
                                    className='nav-link' 
                                    >
                                    Inicio
                                </NavLink>
                            </li>
                            {
                                navItems.map((navItem, index) => {
                                    return (
                                        <li className="nav-item" key={index}>
                                            <NavLink 
                                                to={`/category/${navItem.slug}`} 
                                                className='nav-link'  
                                                >
                                                    {navItem.name}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <CartWidget count={cartCount} />
                </div>
            </nav>  
    )
}

export default Navbar;