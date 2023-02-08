
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <div className="bg-white">
            <section>
                <header className="intro" id='intro'>
                    <div className="intro-text-holder">
                        <p 
                            className="intro-title"
                        >
                            LEARNING ENGLISH BETTER
                        </p>
                        <hr className="intro-line"/>
                        <p
                            className="intro-describe"
                        >
                            Welcome to our innovative platform that is dedicated to making your English learning journey easier and more enjoyable! Our website is designed to help you store and keep track of your vocabulary, so you can master it in no time
                        </p>
                        <button 
                            type="button" 
                            className="getstarted-btn mt-4"
                        >
                            GET STARTED
                        </button>
                    </div>
                    <div className="intro-social-link-holder">
                        <p className="intro-social-link"
                        >
                            www.sunriseenglish.com
                        </p>
                    </div>
                    <img 
                        src="/images/bg/LEARNING_ENGLISH_BETTER.png" 
                        alt='intro-bg'
                        className="intro-img"
                    />
                </header>
                <article>
                    <div className="bg-white" id='service'>
                        <div className="mt-5 ms-5 me-5">
                            <div className="row">
                                <div className="col-7 position-relative">
                                    <div className="row">
                                        <div className="col-3">
                                            <img 
                                                src='/images/graphics/book.gif' 
                                                alt='book'
                                                className="img-fluid"
                                            />
                                        </div> 
                                        <div className="col-9 d-flex align-items-center">
                                            <i className="body-title">
                                                Store your vocabulary and make a test for you everyday
                                            </i>
                                        </div>
                                    </div>
                                    <p className='body-text'>
                                        Our website features an innovative vocabulary <b>storage system</b> that allows you to <b>keep track</b> of all the words you've learned and take <b>regular tests</b> to measure your progress. Whether you're a beginner or an advanced learner, this feature is an invaluable tool that will help you <b>retain the words you've learned</b> and monitor your progress.
                                    </p>
                                    <div className='text-center mt-5'>
                                        <Link
                                            to='/'
                                            className='homebtn home_btn_ver1'
                                        >
                                            Try it now!
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <img 
                                        src="/images/graphics/glenn-carstens-peters-P1qyEf1g0HU-unsplash.jpg" 
                                        alt='intro-bg'
                                        className="img-fluid smooth-border"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-5 w-75 ms-auto me-auto'/>
                    <div className="bg-white">
                        <div className="mt-5 ms-5 me-5 pb-5">
                            <div className="row">
                                <div className="col-5">
                                    <div id="topic_slide" className="carousel slide carousel-fade">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active position-relative">
                                                <img 
                                                    src="/images/graphics/enviroment.jpg" 
                                                    className="d-block w-100 topic_slide_img" 
                                                    alt="enviroment"
                                                />
                                                <div className='topic_slide_item_detail'>
                                                    <p className='slide_title'>Environment</p>
                                                    <hr className='slide_line'/>
                                                    <p className='slide_text'>
                                                        What can be done to lessen environmental damage. People's role and government's role.
                                                    </p>
                                                    <button type='button' className='slide_item_button'>
                                                        View
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="carousel-item position-relative">
                                                <img 
                                                    src="/images/graphics/advertisement.jpg" 
                                                    className="d-block w-100 topic_slide_img" 
                                                    alt="advertisement"
                                                />
                                                <div className='topic_slide_item_detail'>
                                                    <p className='slide_title'>ADVERTISING</p>
                                                    <hr className='slide_line'/>
                                                    <p className='slide_text'>
                                                        Your favorite advert. An advert you remember as a child. An advert that influenced you to buy something. The morality of advertising, particularly in relation to children.
                                                    </p>
                                                    <button type='button' className='slide_item_button'>
                                                        View
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="carousel-item position-relative">
                                                <img 
                                                    src="/images/graphics/transport.jpg" 
                                                    className="d-block w-100 topic_slide_img" 
                                                    alt="transport"
                                                />
                                                <div className='topic_slide_item_detail'>
                                                    <p className='slide_title'>TRANSPORT</p>
                                                    <hr className='slide_line'/>
                                                    <p className='slide_text'>
                                                        Traffic. The use of public transport
                                                    </p>
                                                    <button type='button' className='slide_item_button'>
                                                        View
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="carousel-item position-relative">
                                                <img 
                                                    src="/images/graphics/family.jpg" 
                                                    className="d-block w-100 topic_slide_img" 
                                                    alt="family"
                                                />
                                                <div className='topic_slide_item_detail'>
                                                    <p className='slide_title'>FAMILY</p>
                                                    <hr className='slide_line'/>
                                                    <p className='slide_text'>
                                                        More common in speaking and General IELTS. Care for the elderly. The size of the family.
                                                    </p>
                                                    <button type='button' className='slide_item_button'>
                                                        View
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="carousel-item position-relative">
                                                <img 
                                                    src="/images/graphics/costume_and_culture.jpg" 
                                                    className="d-block w-100 topic_slide_img" 
                                                    alt="costume_and_culture"
                                                />
                                                <div className='topic_slide_item_detail'>
                                                    <p className='slide_title'>CUSTOMS and CULTURE</p>
                                                    <hr className='slide_line'/>
                                                    <p className='slide_text'>
                                                    The decline of traditional customs. Are cultures becoming more alike? The impact of computers/technology on culture; the impact of tourism on host countries
                                                    </p>
                                                    <button type='button' className='slide_item_button'>
                                                        View
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#topic_slide" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#topic_slide" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-7 position-relative ps-4">
                                    
                                    <div className="row">
                                        <div className="col-9 d-flex align-items-center pe-0">
                                            <i className="body-title">
                                                Many vocabulary in several topics are waiting for you
                                            </i>
                                        </div>
                                        <div className="col-3">
                                            <img 
                                                src='/images/graphics/rocket.gif' 
                                                alt='book'
                                                className="img-fluid"
                                            />
                                        </div> 
                                    </div>
                                    <p className='body-text'>
                                        To help you prepare for the IELTS and TOEIC exams, we have a comprehensive library of <b>IELTS and TOEIC vocabulary organized by topic</b>. This library is constantly being updated to ensure that you have access to the latest information and resources you need to excel in these exams.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-e" id='community'>          
                        <div className="mt-5 ms-5 pt-5 text-center">
                            <i className="body-title text-smooth-white">
                                Join the learning english community with us!
                            </i>
                        </div>
                        <div className="mt-5 ms-5 me-5 pb-5 row">
                            <div className="col-5">
                                <p className='body-text-white'>
                                    In addition to our vocabulary storage system, we also provide a platform for users to connect with each other and share tips and ideas on how to study English effectively. Our community is a supportive and inclusive space where English learners can come together to learn, grow, and motivate each other.
                                </p>
                            </div>
                            <div className="col-7">
                                <span 
                                    className="font-inter-bold"
                                >
                                    
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white" id='aboutus'>
                        <div className="mt-5 ms-5 me-5 pb-5">
                            <div className="row">
                                <div className="col-7 position-relative">
                                    <i className="body-title">
                                        ABOUT US
                                    </i>
                                </div>
                                <div className="col-5">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}

export default Home;