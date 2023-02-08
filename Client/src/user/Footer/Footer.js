import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-4 p-5 ms-5 mt-5">
                    <p className="footer-title">ABOUT US</p>
                    <p className="footer-description">
                    Are you tired of struggling with English and looking for a more effective way to improve your language skills? Look no further than Sunrise English which is powered by <strong>Sunrise Company</strong>. Sunrise English is also the ultimate online platform for English learners. Our goal is to make learning English a fun and easy experience for everyone.
                    </p>
                </div>
                <div className="col pt-5 mt-5 ms-5">
                    <p className="footer-sm-title">Office</p>
                    <p className="footer-description">
                        1264 Kha Van Can Road <br/>
                        Linh Trung, Thu Duc <br/>
                        Ho Chi Minh City <br/>
                        Viet Nam, PC 71308
                    </p>
                    <p className="footer-email">sunrisecontinent.company@gmail.com</p>
                    <p className="footer-phonenumber">+84-0337839146</p>
                </div>
                <div className="col pt-5 mt-5 ms-5">
                    <p className="footer-sm-title">Link</p>
                    <div className='footer-link-holder'>
                        <button 
                            className='footer-link'
                            type='button'
                            onClick={() => {
                                document.getElementById("intro").scrollIntoView({block: "end"});
                            }}
                        >
                            Home
                        </button>
                    </div>
                    <div className='footer-link-holder'>
                        <button 
                            className='footer-link'
                            type='button'
                            onClick={() => {
                                document.getElementById("service").scrollIntoView({block: "end"});
                            }}
                        >
                            Service
                        </button>
                    </div>
                    <div className='footer-link-holder'>
                        <button 
                            className='footer-link'
                            type='button'
                            onClick={() => {
                                document.getElementById("community").scrollIntoView({block: "end"});
                            }}
                        >
                            Community
                        </button>
                    </div>
                    <div className='footer-link-holder'>
                        <button 
                            className='footer-link'
                            type='button'
                            onClick={() => {
                                document.getElementById("aboutus").scrollIntoView({block: "end"});
                            }}
                        >
                            About Us
                        </button>
                    </div>
                </div>
                <div className="col pt-5 mt-5 footer-last-part">
                    <p className="footer-sm-title">Contact with us</p>
                    <div className='d-inline-block pe-4 me-2'>
                        <a 
                            target='_blank' 
                            rel='noreferrer' 
                            href="https://www.facebook.com/MinMinPD2211/" 
                            className='footer-icon'
                        >
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                    </div>
                    <div className='d-inline-block pe-4 me-2'>
                        <a 
                            target='_blank' 
                            rel='noreferrer' 
                            href="https://twitter.com/PHAN_DUONG_MINH" 
                            className='footer-icon'
                        >
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                    <div className='d-inline-block pe-4 me-2'>
                        <a 
                            target='_blank' 
                            rel='noreferrer' 
                            href="https://discord.gg/VTABagPraN" 
                            className='footer-icon'
                        >
                            <i className="fa-brands fa-discord"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <div className='w-100'>
                    <hr className='footer-line'/>
                </div>
                <p className='footer-phonenumber mb-0 pb-3'>
                    Sunrise Continent Company © 2022 - All Right Reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;