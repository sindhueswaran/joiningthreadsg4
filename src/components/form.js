import * as React from "react"
 
const ContactForm = () => {

    return(
        <>   
        <form className="d-grid" name="contact" method="POST" action="/thankyou" data-netlify="true" netlify-honeypot="bot-field">
          <input name="bot-field" type="hidden" name="form-name" value="contact" />
            <div className="row">
              <div className="col mb-3">
                <input type="text" name="name" className="form-control text-center border border-1 rounded-0" placeholder="Your Name" required/> 
              </div>
              <div className="col mb-3"> 
                <input type="email" name="email" className="form-control text-center border border-1 rounded-0" placeholder="Your Email" required/> 
              </div>
              </div>
              <div className="mb-3 ">
                <textarea name="message" className="form-control text-center border border-1 rounded-0" rows="3" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-outline-warning btn-lg rounded-0">Submit</button>
        </form> 
    </>
    )
}

export default ContactForm
