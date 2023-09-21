import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState"
export default function AboutTab() {
    const { isLoading, setIsLoading } = useContext(GlobalContext);

    const handleCVdownload = () => {
        setIsLoading(true);
        const pdfPath = process.env.PUBLIC_URL + '/downloadableContent/resume.txt';

        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'resume.txt';
        link.click();

        setTimeout(() => {
            setIsLoading(false);
          }, 1000); // Simüle edilen indirme süresi

    }
    return (
        <>
            <section className="AboutTab-container">
                <div>
                    <div className="subtitle">
                        <p><i className="ti-user text-orange-600"></i> Who am I?</p>
                    </div>
                    <div className="title">
                        <h2>About Me</h2>
                    </div>
                    <div className="inner-container">
                        <div className="image-container">
                            <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} alt="" />
                        </div>
                        <div className="content-container">
                            <div className="card bio">
                                <h6 className="title">Bio</h6>
                                <p className="desc">I am Riono Doe, web developer from USA, California. I have rich experience in web site design and building and customization, also I am good at WordPress. I love to talk with you about our unique. 🤠</p>
                            </div>
                            <div className="card info">
                                <div>
                                    <p>Age</p>
                                    <p>28</p>
                                </div>
                                <div>
                                    <p>Email</p>
                                    <p>info@keremunce.com</p>
                                </div>
                                <div>
                                    <p>Residence</p>
                                    <p>TR</p>
                                </div>
                                <div>
                                    <p>Phone</p>
                                    <p>+90 539 482 90 04</p>
                                </div>
                            </div>
                            <div className="downloadCV-container">
                                <span className="download-loader"></span>
                                <button onClick={handleCVdownload} className={`CVdownloadBtn ${isLoading ? 'loading' : ''}`}>{isLoading ? 'Downloading' : 'Download CV'} <i className="ti-download bottom-icon"></i><i className="ti-download top-icon"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}