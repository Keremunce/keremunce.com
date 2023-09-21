import { NavLink } from "react-router-dom";

export default function HomeTab() {
    return (
        <>
            <section className="HomeTab-container">
                <div className="contact-container">
                    <div>
                        <a className="phoneNumber" href="tel:+90 539 482 90 04"><i className="ti-mobile"></i> +90 539 482 90 04</a>
                    </div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" className="mailAdress" href="mailto:info@keremunce.com"><i className="ti-email"></i> info@keremunce.com</a>
                    </div>
                </div>
                <div className="inner-container">
                    <div className="textContent">
                        <p className="helloText"><span>👋</span> HELLO!</p>
                        <h3 className="title">I'm Kerem</h3>
                        <p className="desc">I am Kerem Unce, Frontend Developer from Turkey, Istanbul. I have rich
                            experience in web site design and building and customization, I aim to create impressive and
                            user-oriented websites by combining my passion for design and coding.</p>
                        <div className="buttons-wrapper">
                            <NavLink to='AboutTab' className="hl">More About Me</NavLink>
                            <NavLink to='PortfolioTab'>View Works <i className="ti-arrow-right"></i></NavLink>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="keremunce.com profil resmi" />
                    </div>
                </div>
            </section>
        </>
    )
}