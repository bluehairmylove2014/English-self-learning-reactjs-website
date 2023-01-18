// Import library
import React, { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
// Import file
import "./App.css";
// Import component
import UserHome from './user/Home/Home';
import UserHeader from './user/Navbar/Navbar';
import UserFooter from './user/Footer/Footer';
import Login from './user/Login/Login';
import Register from './user/Register/Register';

function App() { 
    const [account_detail, setAccountDetail] = useState({
        // Default: normal
        status: 'normal', // ban - normal
        // Default: anonymous
        type: 'anonymous' // admin - user - anonymous 
        // type and status only change when login
    })
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    {/* If not login */}
                    { account_detail.type === 'anonymous' && 
                        <>
                            <Route
                                exact path={"/"}
                                element={
                                    <>
                                        <UserHeader acc={account_detail}/>
                                        <UserHome/>
                                        <UserFooter/>
                                    </>
                                }
                            /> 
                            <Route
                                exact path={"/login"}
                                element={
                                    <>
                                        <Login/>
                                    </>
                                }
                            /> 
                            {/* <Route
                                exact path={"/"}
                                element={
                                    <Navigate
                                        to="/login"
                                    />
                                }
                            />  */}
                        </> 
                    }

                    {/* If login by using user account */}
                    { account_detail.type === 'user' && 
                        <>
                            <Route
                                exact path={"/"}
                                element={
                                    <>
                                        <UserHeader acc={account_detail}/>
                                        <UserHome/>
                                        <UserFooter/>
                                    </>
                                }
                            /> 
                        </> 
                    }

                    {/* If login by using admin account */}
                    {/* { account_detail.type === 'admin' && 
                        <>
                            <Route
                                exact path={"/"}
                                element={
                                    <Navigate
                                        to="/login"
                                    />
                                }
                            />
                        </> 
                    } */}
                </Routes>   
            </BrowserRouter>    
        </React.Fragment>
    );
}

export default App;
