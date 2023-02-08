
// import library
import { Link, useNavigate } from 'react-router-dom'
import $ from 'jquery'
// import function api
import { getAccountByEmail, getLastAccountID, addNewAccount } from '../../api/index'

function Register(props) {
    const navigate = useNavigate();

    // ldr: login - data - require
    const ldr_animate_in = (e) => {
        const target_id = '#' + e.currentTarget.id;
        if(target_id.indexOf('email') !== -1) {
            $('#login-email-icon').addClass('unactive');
        }
        else if(target_id.indexOf('cmpsw') !== -1) {
            $('#login-cmpsw-icon').addClass('unactive');
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
        else if(target_id.indexOf('cmpsw') !== -1) {
            $('#login-cmpsw-icon').removeClass('unactive');
        }
        else if(target_id.indexOf('psw') !== -1) {
            $('#login-psw-icon').removeClass('unactive');
        }
        $(target_id).removeClass('active');
    }

    const checkEmailExist = async (email_address) => {
        const res = await getAccountByEmail(email_address);
        if(res.status === 200 && res.data.length !== 0) {
            return true;
        }
        else if(res.status === 500) {
            console.log('Error check email exist when get res. Error status: 500');
        }
        return false;
    }

    const checkEmailReal = (email_address) => {
        return true;
    }

    const createNewAccount = async (acc) => {
        // Get last ID
        let res = await getLastAccountID();
        if(res.status === 200) {
            // Config acc data
            // res.data: [{max:3}]
            acc.accid = res.data[0].max + 1;

            // Add account with new id
            res = await addNewAccount(acc);
            if(res.status === 200) {
                showNotification('#success');
                setTimeout(() => {
                    props.callbackSetAccount(acc);
                    navigate('/');
                }, 3000)
            }
            else if(res.status === 500) {
                console.log('Error add new account when get res. Error status: 500');
            }
        }
        else if(res.status === 500) {
            console.log('Error get last ID when get res. Error status: 500');
        }
    }
 
    const showNotification = (divIdentifier) => {
        $(divIdentifier).addClass("active");
    }

    const checkRegister = () => {
        let is_empty = false;
        const email = $('#login-email-input').val().trim();
        const psw = $('#login-psw-input').val().trim();
        const cmpsw = $('#login-cmpsw-input').val().trim();
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
                // Check empty commit password
                if(cmpsw === '') {
                    $('#cmpsw-error').addClass('active');
                    $('.error-notify').text('Please fill your commit password');
                    is_empty = true;
                }
                else {
                    // Check commit password does not match password
                    if(cmpsw !== psw) {
                        $('#cmpsw-error').addClass('active');
                        $('.error-notify').text('Commit password does not match your password');
                        is_empty = true;
                    }
                    else {
                        $('#cmpsw-error').removeClass('active');
                        $('.error-notify').text('');
                    }
                }
            }
        }
        if(!is_empty) {
            $('#email-error').removeClass('active');
            $('.error-notify').text('');
            
            // Check exist email in database
            checkEmailExist(email)
                .then(data => {
                    if(data) {
                        $('#email-error').addClass('active');
                        $('.error-notify').text('This email is already associated with an account');
                    }
                    // Check if this email is real!!!
                    else if(!checkEmailReal(email)) {
        
                    }
                    else {

                        // Write account to database
                        createNewAccount({
                            accid: -1,
                            email: email,
                            dname: 'user@' + email.split('@')[0],
                            psw: psw,
                            rol: 'user',
                            stts: 0,
                            avt: 'unknown_sex.png',
                            sex: 'unknown'
                        })
                        // Show notification and navigate to login page
                        $('.error-notify').text('');
                        $('#email-error').removeClass('active');
                        $('#psw-error').removeClass('active');
                        $('#cmpsw-error').removeClass('active');
                    }
                })
                .catch(err => {
                    console.log('Error check exist email: ' + err)
                })
        }
    }

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
                        <p className='menu-text-large'>REGISTER</p>
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
                            />
                            <span className='input-error' id='psw-error'>!</span>
                        </div>
                        <div className='ldr-wrapper'>
                            <i 
                                className="fa-solid fa-lock ldr-i" 
                                id='login-cmpsw-icon'
                            ></i>
                            <input 
                                className='login-data-require' 
                                placeholder='Commit password'
                                type='password'
                                id='login-cmpsw-input'
                                onFocus={(e) => ldr_animate_in(e)}
                                onBlur={(e) => ldr_animate_out(e)}
                            />
                            <span className='input-error' id='cmpsw-error'>!</span>
                        </div>
                        <div className='pt-2'>
                            <div className='text-center'>
                                <p className='error-notify'></p>
                            </div>
                            <button type='button' className='login-btn' onClick={() => checkRegister()}>
                                Submit
                            </button>
                        </div>
                    </form>
                    <Link 
                        to='/login' 
                        className='menu-text-me create-new-acc-link'
                    >
                        Already have an account? 
                    </Link>
                </div>
            </div>
            {/* Notification */}
            <div id='success' className='login-noti-wrapper'>
                <div className='login-noti'>
                    <img src='/images/Icons/check.png' alt='check' className='check-icon'/>
                    <div className='w-100'>
                        <p className='menu-title-xlarge text-center green-config'>
                            REGISTER SUCCESSFULLY
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

export default Register;