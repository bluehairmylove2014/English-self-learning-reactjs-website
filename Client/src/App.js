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
    const [account, setAccount] = useState({
        // Default: normal
        stts: 0, // ban (-1) - normal (0)
        // Default: anonymous
        rol: 'anonymous' // admin - user - anonymous 
        // type and status only change when login
    })
    const updateAccount = (acc) => {
        setAccount(acc);
    }
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    {/* If not login */}
                    { account.rol === 'anonymous' && 
                        <>
                            <Route
                                exact path={"/"}
                                element={
                                    <>
                                        <UserHeader acc={account}/>
                                        <UserHome/>
                                        <UserFooter/>
                                    </>
                                }
                            /> 
                            <Route
                                exact path={"/login"}
                                element={
                                    <>
                                        <Login callbackSetAccount={updateAccount}/>
                                    </>
                                }
                            /> 
                            <Route
                                exact path={"/register"}
                                element={
                                    <>
                                        <Register callbackSetAccount={updateAccount}/>
                                    </>
                                }
                            /> 
                        </> 
                    }

                    {/* If login by using user account */}
                    { account.rol === 'user' && 
                        <>
                            <Route
                                exact path={"/"}
                                element={
                                    <>
                                        <UserHeader acc={account}/>
                                        <UserHome/>
                                        <UserFooter/>
                                    </>
                                }
                            /> 
                        </> 
                    }

                    {/* If login by using admin account */}
                    { account.rol === 'admin' && 
                        <>
                            {/* <Route
                                exact path={"/"}
                                element={
                                    <Navigate
                                        to="/login"
                                    />
                                }
                            /> */}
                        </> 
                    }
                </Routes>   
            </BrowserRouter>    
        </React.Fragment>
    );
}

export default App;
