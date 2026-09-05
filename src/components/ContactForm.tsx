import { useState } from "react";

const ContactForm = (): React.ReactNode => {
    const [submitted, setSubmitted] = useState(false);

    const [result, setResult] = useState("");

    const onSubmit = async (e: React.SyntheticEvent<HTMLElement>) => {
        const target = e.target as HTMLFormElement

        e.preventDefault();
        setResult("Sending....");
        const formData = new FormData(target);
        formData.append("access_key", "e76d2078-e773-4ccd-8d0f-3ef951cf74d3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Thanks!");
            target.reset();
            setSubmitted(true);
        }
        else {
            setResult("Error! :(");
            console.log(data);
        }
    };

    return (
        <form className="contact-form" method="POST" action="https://api.web3forms.com/submit" onSubmit={onSubmit}>
            <h2>Contact me!</h2>
                {
                    submitted
                    ? <></>
                    : <>
                        <div>
                            <label htmlFor="i-name">Name</label>
                            <input
                                id="i-name"
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="i-email">Email Address</label>
                            <input id="i-email" type="email" name="email" placeholder="name@email.com" required />
                        </div>

                        <div>
                            <label htmlFor="i-age">Message</label>
                            <textarea id="i-age" name="message" placeholder="Your message..." required />
                        </div>
                        
                        <button type="submit">Submit</button>
                    </>
                }
                <p>{result}</p>
        </form>
    );
}
export default ContactForm;