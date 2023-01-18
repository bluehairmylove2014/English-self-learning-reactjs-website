
// import library
import { Link } from 'react-router-dom'

// import image
import logo from '../../assets/images/logo/SUNRISE.png'
import avt from '../../assets/images/other/avt.png'

function Navbar(props) {
    return (
        <div className="bg-white">
            <div className="row min-navbar">
                <div className='col d-flex align-items-center justify-content-start'>
                    <div>
                        <img src={logo} alt='logo' className='min-logo'/>
                    </div>
                    <Link to="/" className='min-nav-icon'>
                        <i className="fa-brands fa-facebook"></i>
                    </Link>
                    <Link to="/" className='min-nav-icon'>
                        <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link to="/" className='min-nav-icon'>
                        <i className="fa-brands fa-discord"></i>
                    </Link>
                </div>
                <div className='col d-flex align-items-center justify-content-end'>
                    <Link to='/login' className='min-nav-link'>
                        Do a test!
                    </Link> 
                    <Link to='/login' className='min-nav-link'>
                        Repository
                    </Link>
                    <Link to='/login' className='min-nav-link'>
                        Vocabulary today
                    </Link>
                    <p className='min-nav-link'>|</p>

                    { props.acc.type === 'anonymous' && 
                        <>
                            <Link to='/login' className='min-nav-btn'>
                                LOGIN
                            </Link>
                            <Link to='/register' className='min-nav-btn'>
                                REGISTER
                            </Link> 
                        </>
                    }
                    { props.acc.type === 'user' && 
                        <div className='min-navavt-wrapper'>
                            <span className='min-nav-link'>Hi Eris!</span>
                            <img src={avt} className='min-nav-avt'/>
                        </div>
                    }
                </div>
            </div>
            <hr></hr>
        </div>
    );
}

export default Navbar;