
// import library
import { Link, useNavigate } from 'react-router-dom'
import $ from 'jquery'
import React, { useEffect, useState } from 'react'
// import function api
import { fetchAccounts } from '../../api/index'

function Login(props) {
    const [accounts, setAccounts] = useState([]);
    const navigate = useNavigate();

    const ldr_animate_in = (e) => {
        const target_id = '#' + e.currentTarget.id;
        if(target_id.indexOf('email') !== -1) {
            $('#login-email-icon').addClass('unactive');
        }
        else if(target_id.indexOf('psw') !== -1) {
            $('#login-psw-icon').addClass('unactive');
        }
        $(target_id).addClass('active');
    }

    const ldr_animate_out = (e) => {
        const target_id = '#' + e.currentTarget.id;
        if(target_id.indexOf('email') !== -1) {
            $('#login-email-icon').removeClass('unactive');
        }
        else if(target_id.indexOf('psw') !== -1) {
            $('#login-psw-icon').removeClass('unactive');
        }
        $(target_id).removeClass('active');
    }

    const showNotification = (divIdentifier) => {
        $(divIdentifier).addClass("active");
    }

    const checkLogin = () => {
        let is_empty = false;
        const email = $('#login-email-input').val().trim();
        const psw = $('#login-psw-input').val().trim();
        if(email === '') {
            $('#email-error').addClass('active');
            $('.error-notify').text('Please enter your email');
            is_empty = true;
        }
        else {
            $('#email-error').removeClass('active');
            $('.error-notify').text('');
            // Check empty password
            if(psw === '') {
                $('#psw-error').addClass('active');
                $('.error-notify').text('Please fill your password');
                is_empty = true;
            }
            else {
                $('#psw-error').removeClass('active');
                $('.error-notify').text('');
            }
        }
        if(!is_empty) {
            let is_valid = false;
            let result = {};
            accounts.forEach(acc => {
                if(acc.email === email) {
                    if(acc.psw === psw) {
                        $('.error-notify').text('');
                        $('#email-error').removeClass('active');
                        $('#psw-error').removeClass('active');
                        is_valid = true;
                        result = acc;
                        showNotification('#success');
                        return;
                    }
                }
            })

            if(!is_valid) {
                $('.error-notify').text('Email or password is incorrect');
            }
            else {
                setTimeout(() => {
                    props.callbackSetAccount(result);
                    navigate('/');
                }, 3000)
            }
        }
    }

    const getAllAccounts = async () => {
        const accounts_data = await fetchAccounts();
        const data = accounts_data.data;
        setAccounts(data);
    }

    useEffect(() => {
        getAllAccounts();
    })

    return (
        <div className='min-login-bg'>
            <div className='min-login-wrapper'>
                <div className='left-img-login'>
                    <p className='text-login-intro'>
                        WELCOME TO <br/> SUNRISE CONTINENT
                    </p>
                    <p className='text-login-detail'>
                        With this account, you can sign in in any websites powered by Sunrise Continent such as Sunrise Foods, Sunrise English and more.
                        <br/>
                        <i className='sub-textlogin-detail'>
                            DUONG MINH
                        </i>
                    </p>
                </div>
                <div className='right-side-login'>
                    <div>
                        <p className='menu-text-large'>LOGIN</p>
                    </div>
                    <form className='login-form'>
                        <div className='ldr-wrapper'>
                            <i 
                                className="fa-solid fa-envelope ldr-i" 
                                id='login-email-icon'
                            ></i>
                            <input 
                                className='login-data-require' 
                                placeholder='Email'
                                type='email'
                                id='login-email-input'
                                onFocus={(e) => ldr_animate_in(e)}
                                onBlur={(e) => ldr_animate_out(e)}
                                data-toggle='empty-email'
                                data-content='Please enter your email'
                            />
                            <span className='input-error' id='email-error'>!</span>
                        </div>
                        <div className='ldr-wrapper'>
                            <i 
                                className="fa-solid fa-lock ldr-i" 
                                id='login-psw-icon'
                            ></i>
                            <input 
                                className='login-data-require' 
                                placeholder='Password'
                                type='password'
                                id='login-psw-input'
                                onFocus={(e) => ldr_animate_in(e)}
                                onBlur={(e) => ldr_animate_out(e)}
                                data-toggle='empty-psw'
                                data-content='Please enter your password'
                            />
                            <span className='input-error' id='psw-error'>!</span>
                        </div>
                        <div className='pt-2'>
                            <div className='text-center'>
                                <p className='error-notify'></p>
                            </div>
                            <button type='button' className='login-btn' onClick={() => checkLogin()}>
                                Login
                            </button>
                        </div>
                    </form>
                    <div className='social-wrapper'>
                        <p className='menu-text-me text-center mb-0'>Or login with</p>
                        <div className='social-login-btnwrapper pt-0'>
                            <button type='button' className='social-login-btn'>
                                <img src='/images/Icons/facebook.png' alt='facebook'/>
                            </button>
                            <button type='button' className='social-login-btn'>
                                <img src='/images/Icons/google.png' alt='google'/>
                            </button>
                        </div>
                    </div>
                    <Link 
                        to='/register' 
                        className='menu-text-me create-new-acc-link'
                    >
                        Create new account? 
                    </Link>
                </div>
            </div>
            {/* Notification */}
            <div id='success' className='login-noti-wrapper'>
                <div className='login-noti'>
                    <img src='/images/Icons/check.png' alt='check' className='check-icon'/>
                    <div className='w-100'>
                        <p className='menu-title-xlarge text-center green-config'>
                            LOGIN SUCCESSFULLY
                        </p>
                    </div>
                    <div className='w-100'>
                        <p className='menu-text-large text-justify'>
                            Wait for a second, we will redirect you to home page right now. Welcome!
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Login;