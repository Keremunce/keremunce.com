import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import emailjs from '@emailjs/browser';
export default function ContactTab() {
    const { form, formData, setFormData, isSending, setIsSending } = useContext(GlobalContext);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setIsSending(true);

        emailjs.sendForm('service_78bu60c', 'template_43euvsk', form.current, '8VbdwLVbpo6gJ3h7R')
            .then((result) => {
                console.log(result.text)
                setIsSending(false);
                setFormData({
                    form_name: "",
                    user_email: "",
                    subject: "",
                    message: ""
                });
                // form.current.reset();
            }, (error) => {
                console.error(error.text)
            })
    };



    const contactBoxes = [
        {
            title: 'Phone',
            value: '+90 539 482 90 04',
            icon: 'ti-mobile',
            bgColor: 'rgb(230, 225, 255)',
            color: 'rgb(88, 72, 180)'
        },
        {
            title: 'E-Mail',
            value: 'info@keremunce.com',
            icon: 'ti-email',
            bgColor: 'rgb(255, 217, 201)',
            color: 'rgb(255, 101, 37)'
        },
        {
            title: 'Location',
            value: 'Istanbul/Pendik',
            icon: 'ti-map',
            bgColor: 'rgb(255, 213, 223)',
            color: 'rgb(255, 51, 102)'
        }
    ]
    return (
        <>
            <section className="ContactTab-container">
                <div className="subtitle">
                    <p><i className="ti-comment text-orange-600"></i> Get In Touch</p>
                </div>
                <div className="title">
                    <h2>Contact</h2>
                </div>
                <div className="inner-container">
                    <div className="contactBox-container">
                        {contactBoxes.map((box, index) => (
                            <div key={index} className="contactBox">
                                <div style={{ backgroundColor: box.bgColor, color: box.color }} className="icon-container">
                                    <i className={box.icon}></i>
                                </div>
                                <div>
                                    <p className="title">{box.title}</p>
                                    <p className="subtitle">{box.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="form-container">
                        <div className="title">
                            <p>Send Message</p>
                        </div>
                        <form ref={form} onSubmit={handleFormSubmit}>
                            <div className="input-group inputName">
                                <input
                                    name="from_name"
                                    placeholder="Your Name"
                                    value={formData.from_name}
                                    onChange={handleInputChange}
                                    type="text" />
                            </div>
                            <div className="input-group inputEmail">
                                <input
                                    name="user_email"
                                    placeholder="Email address"
                                    value={formData.user_email}
                                    onChange={handleInputChange}
                                    type="email" required/>
                            </div>
                            <div className="input-group inputSubject">
                                <input
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    type="text" />
                            </div>
                            <div className="input-group inputMessage">
                                <textarea
                                    name="message"
                                    placeholder="Your message here..."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    type="text" ></textarea>
                            </div>
                            <div className="button-container">
                                <button type="submit" className={isSending ? 'sending' : ''}>
                                    {isSending ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}