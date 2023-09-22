import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
    const { logout } = useLogout()

    const handleClick = () => {
        logout()
    }
    return ( 
        <header>
                <nav>
                    <div>
                        <button onClick={handleClick}>Log out</button>
                    </div>
                    <div className='users'>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Signup</Link>
                    </div>
                </nav>
        </header>
     );
}
 
export default Navbar;