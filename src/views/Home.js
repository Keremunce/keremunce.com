import { Outlet, NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from '../context/GlobalState';
export default function Home() {
    const { menuBtn, setMenuBtn } = useContext(GlobalContext);
    return (
        <>
            <h1 className="stillinprogress">Home Layout - still in progress</h1>

            <div className="main-container">
                <div className="bg-white"></div>

                <header className={`header-wrapper ${menuBtn ? 'open' : ''}`}>
                    <div className="content">
                        <div className="header">
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="keremunce.com profil resmi" />
                            </div>
                            <div className="text-container">
                                <h4>Kerem Unce</h4>
                                <h6 className="text-sm">Frontend Developer</h6>
                            </div>
                        </div>{/* header-HEADER END*/}

                        <div className="body">
                            <nav>
                                <ul>
                                    <li><NavLink className="navLink" to="/"><i className="ti-home"></i> Home </NavLink></li>
                                    <li><NavLink className="navLink" to="AboutTab"><i className="ti-user"></i> About </NavLink></li>
                                    <li><NavLink className="navLink" to="PortfolioTab"><i className="ti-briefcase"></i> Portfolio </NavLink></li>
                                    <li><NavLink className="navLink" to="ContactTab"><i className="ti-comment"></i>Contact </NavLink></li>
                                </ul>
                            </nav>
                        </div>{/* header-BODY END */}

                        <div className="footer">
                            <div className="socials">
                                <div className="box linkedin">
                                    <a href="https://linkedin.com/in/keremunce"><i className="ti-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="copyright">
                                <p>© 2023 Keremunce</p>
                            </div>
                        </div>{/* header-FOOTER END */}
                    </div>
                </header> {/* HEADER END */}

                <div onClick={() => setMenuBtn(!menuBtn)} className={`hamburger-menu ${menuBtn ? 'active' : ''}`}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <main className="content">
                    <Outlet></Outlet>
                </main>
            </div>
        </>
    )
}