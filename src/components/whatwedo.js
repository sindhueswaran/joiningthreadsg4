/**  WhatWeDo COMPONENT **/

import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

const WHATWEDOSECTION = {
  title: 'What we do',
} 

const WHATWEDO = [
    {
      title: 'Women Skill Building',
      image: 'whatwedo/knitting.jpg',
      text: 'We work with womens' groups teaching and sharing knitting, crochet, felting and sewing techniques through free classes and workshops for Non Government Organisations in New Delhi, Rajasthan and Uttarakhand.',
    },
    {
      title: 'Education',
      image: 'whatwedo/children.jpg',
      text: 'We offer teacher trainings and workshops to children and teenagers using arts and crafts to facilitate various different ways of learning through classroom activities.',
    },
    {
      title: 'Encouraging wealth for women',
      image: 'whatwedo/markets.jpg',
      text: 'Our  craftswomen are currently paid cash in hand directly. It is our policy to ensure they receive Fair Trade rates for every item made enabling them to contribute to their household expenses. It is a future hope and aim to find and collaborate with interested individuals and groups who can purchase these products thereby providing support for more woman.',
    },
  ];

const WhatWeDo = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {relativeDirectory: {eq: "whatwedo"}}) {
          edges {
            node {
              relativePath
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }         
    `}

 
  render={data => (
    <section id="whatwedo">
      <Container>  
        <h2 className="section-title">{WHATWEDOSECTION.title}</h2>
        <div className="wwd-items"> 
          {WHATWEDO.map(({ title, image, text }) => {
            const img = data.allFile.edges.find(
               ({ node }) => node.relativePath === image
             ).node;  
            
            return (  
            <article className="row wwd-item" key={title}>
              <div className="col-12 col-md-5  col-lg-4 offset-lg-1 wwd-img">
              <GatsbyImage 
                image={img.childImageSharp.gatsbyImageData}
                alt="Profile picture"
              /> 
              </div>
              
              <div className="col-12 col-md-6 col-lg-6 offset-lg-1 wwd-text ">
              <h4 className="text-center mb-3">{title}</h4>
              <p>{text}</p> 
              </div>
              
            </article> 
            );
          })}
        </div> 
        
      </Container>  
    </section>    
    )}
    />
  );
 

export default WhatWeDo
