import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import auth from '../redux/auth';

function PrivateRoute(props) {
    const location = useLocation();
    const loginStatus = useSelector(auth.selectors.loginStatus);

    window.scrollTo(0, 0);
    
    if (loginStatus) {
        return <Route {...props} />
    }

    return <Redirect to={{ pathname: '/login', state: { initialRoute: location }} } />
}

export default PrivateRoute;