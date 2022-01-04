import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";


const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt=""
                                className="c-icon" />
                            +55 12 99250-9452
                        </div>
                        <div className="c-info=item">
                            <img className="c-icon" src={Email} alt="" />
                            Silviocesar.computacao@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Vitória Vale - Caçapava/São Paulo
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> contact us. We can talk to you without obligation
                    </p>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
