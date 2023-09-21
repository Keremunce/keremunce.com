export default function PortfolioTab() {
    const projects = [
        { title: 'Personal Portfolio Website', image: '/images/profile.jpg' },
        { title: 'Personal Portfolio Website', image: '/images/profile.jpg' },
        { title: 'Personal Portfolio Website', image: '/images/profile.jpg' },
        { title: 'Personal Portfolio Website', image: '/images/profile.jpg' },
        { title: 'Personal Portfolio Website', image: '/images/profile.jpg' }
    ]
    return (
        <>
            <section className="PortfolioTab-container">
                <div className="subtitle">
                    <p><i className="ti-user text-orange-600"></i>My Works</p>
                </div>
                <div className="title">
                    <h2>Portfolio</h2>
                </div>
                <div className="inner-container">
                    {projects.map((project, index) => (
                        <div key={index} className="projectBox">
                            <div className="img-container">
                                <div className="blank"></div>
                            </div>
                            <div className="content-container">
                                <p className="title">{project.title}</p>
                            </div>
                            <div className="button-container">
                                <button>View Project</button>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </section>
        </>
    )
}