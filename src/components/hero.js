/** HERO COMPONENT **/

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge" 
import { Button  } from 'react-bootstrap'

const Hero = () => {
  const { HeroImage } = useStaticQuery(
    graphql`
     query {
      HeroImage: file(relativePath: {eq: "hero1.jpg"}) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
 `)
 
  const pluginImage = getImage(HeroImage)

  return (
        <BgImage
          className="hero-image"
          image={pluginImage}
          backgroundColor={`#2a7ac9`} 
          > 
          <div className="hero-overlay">
          <div className="hero-text">
            <h1> Joining threads <br/> Joining lives </h1>< br/>
            <h4 className="mb-3">Creativity develops confidence, awakens dormant talents and promotes resourcefulness while availing possibilities to improve livelihoods. We promote and share handicraft skills with a majority of disadvantaged women and children in projects in North India.</h4>
            <Button className="btn" variant="outline-light" href="/blog">OUR PROJECTS</Button>
          </div>
          </div>
        </BgImage>
     
  
    )
  }

export default Hero
