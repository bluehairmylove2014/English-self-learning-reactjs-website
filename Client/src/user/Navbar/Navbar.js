
// import library
import { Link } from 'react-router-dom'
import $ from 'jquery'

function Navbar(props) {
    const acc = props.acc;

    const hideDropdownIfClickout = (event) => {
        const dropdown = document.getElementById("avt-dropdown");
        if (!dropdown.contains(event.target)) {
            // hide the dropdown
            $('.management-dropdown').animate({
                height: '0',
                'padding-top' : 0,
            }, 400, () => {
                if(!($('.management-dropdown').hasClass('undisplay')))
                    $('.management-dropdown').addClass('undisplay');
            });
            // Remove event listener
            document.removeEventListener("click", hideDropdownIfClickout);
        }
    };

    const showDropdownItemDetail = (event) => {

    }

    const showManagementDropdown = () => {
        if($('.management-dropdown').hasClass('undisplay')) {
            $('.management-dropdown').removeClass('undisplay');
            $('.management-dropdown').animate({
                height: '200px',
                'padding-top' : '35px',
            }, 400)

            document.addEventListener("click", hideDropdownIfClickout);
        }
        else {
            $('.management-dropdown').animate({
                height: '0',
                'padding-top' : 0,
            }, 400, () => {
                if(!($('.management-dropdown').hasClass('undisplay')))
                    $('.management-dropdown').addClass('undisplay');
            })
            // Remove event listener
            document.removeEventListener("click", (event) => {
                hideDropdownIfClickout(event);
                showDropdownItemDetail(event);
            });
        }
    }
    return (
        <div className="bg-white">
            <div className="row min-navbar">
                <div className='col d-flex align-items-center justify-content-start'>
                    <div>
                        <Link to='/'>
                            <img 
                                src='/images/logo/SUNRISE.png' 
                                alt='logo' 
                                className='min-logo'
                            />
                        </Link>
                    </div>
                    <a target='_blank' rel='noreferrer' href="https://www.facebook.com/MinMinPD2211/" className='min-nav-icon'>
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a target='_blank' rel='noreferrer' href="https://twitter.com/PHAN_DUONG_MINH" className='min-nav-icon'>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a target='_blank' rel='noreferrer' href="https://discord.gg/VTABagPraN" className='min-nav-icon'>
                        <i className="fa-brands fa-discord"></i>
                    </a>
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

                    { acc.rol === 'anonymous' && 
                        <>
                            <Link to='/login' className='min-nav-btn'>
                                LOGIN
                            </Link>
                            <Link to='/register' className='min-nav-btn'>
                                REGISTER
                            </Link> 
                        </>
                    }
                    { acc.rol === 'user' && 
                        <div className='min-navavt-wrapper'>
                            <p className='min-nav-link'>Hi {acc.dname}!</p>
                            <div className='management-dropdown-holder' id='avt-dropdown'> 
                                    <button 
                                        className='empty-btn' 
                                        type='button'
                                        onClick={() => showManagementDropdown()}
                                    >
                                        <img 
                                            src={require(`../../assets/images/user/avt/${acc.avt}`)} 
                                            className='min-nav-avt' 
                                            alt='avt'
                                        />
                                    </button>
                                <div className='management-dropdown undisplay'>
                                    <Link 
                                        to=''
                                        className='d-flex justify-content-center mb-2'
                                    >
                                        <img 
                                            src='/images/graphics/profile.gif'
                                            className='management-icon'
                                            id='dropdown-profile'
                                        />
                                    </Link>
                                    <Link 
                                        to=''
                                        className='d-flex justify-content-center mb-2'
                                    >
                                        <img 
                                            src='/images/graphics/settings.gif'
                                            className='management-icon'
                                            id='dropdown-setting'
                                        />
                                    </Link>
                                    <Link 
                                        to=''
                                        className='d-flex justify-content-center mb-2'
                                    >
                                        <img 
                                            src='/images/graphics/logout.gif'
                                            className='management-icon'
                                            id='dropdown-logout'
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;