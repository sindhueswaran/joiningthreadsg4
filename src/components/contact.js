/** CONTACT COMPONENT **/

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Col } from 'react-bootstrap'
import { FaEnvelope, FaInstagram } from 'react-icons/fa';
import ContactForm from "./form";

const Contact = () => {
   const data = useStaticQuery(graphql`
     query ContactQuery {
      site {
        siteMetadata {
          email
          title
        }
      }
    }
`)

const email = data.site.siteMetadata.email
  return (
    <section id="contact"> 
    <Container>
      <div  className="mb-5">
        <h3 className="section-title"> Write to us </h3> 
          <a className="email-link" href="mailto:joiningthreads@gmail.com"> 
        <p className="section-text"> 
          <FaEnvelope /> &nbsp; {email} 
        </p>
        </a>
        <a className="email-link" href="https://www.instagram.com/joiningthreadsjoininglives/" target="_blank"> 
        <p className="section-text"> 
          <FaInstagram /> &nbsp; follow us on Instagram
        </p>
        </a>
      </div> 
      <Col xs md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
        <ContactForm/>
      </Col>
      </Container>
    </section>
  )
}

export default Contact
