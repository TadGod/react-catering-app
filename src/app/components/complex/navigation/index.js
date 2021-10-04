import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import auth from '../../../redux/auth';
import Button from '../../common/button';
import logo from '../../../assets/images/fast-food.png';

function Navigation() {
    const dispatch = useDispatch();
    const history = useHistory();

    const loginStatus = useSelector(auth.selectors.loginStatus);

    const logout = () => {
        dispatch(auth.actions.logout());
        history.push('/login');
    }

    return(
        <header>
            <nav className='ui-container'>
                <div className='logo'>
                        <img src={logo} alt='logotype' className='logo-image'/>
                </div>
                <div className='nav-link-container'>
                    <ul className='nav-links'>
                        <li className='nav-link'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='nav-link'>
                            <a>About</a>
                        </li>
                        <li className='nav-link'>
                            <a>FAQ</a>
                        </li>
                    </ul>
                </div>
                {loginStatus ?
                    <div className='ui-users'>
                        <Button title='Logout' className='ui-button' onClick={logout}/>
                    </div>
                :
                    <div className='ui-users'>
                    <Link to='/registration' className='ui-link'>
                        <p className='ui-text'>Register</p>
                    </Link>
                    <Link to='/login' className='ui-link'>
                        <p className='ui-text-login'>Login</p>
                    </Link>
                    </div>
                }
            </nav>
        </header>
    );
}

export default Navigation;