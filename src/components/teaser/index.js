import React from "react";
import styles from "./teaser.module.css";
import Img from "gatsby-image";
import Container from "../container";
import { rhythm } from "../../utils/typography"

class Teaser extends React.Component {
  render() {

    return (
      <div
        css={{
          margin: '1em 0',
          marginBottom: rhythm(2),
          clear: 'both'
        }}>
        <div
          css={{
            float: 'left',
            width: '200px',

          }}
        >
          <Img
            fluid={
              this.props.image
            } 
          />
        </div>
        <h3><a href={this.props.path}>{this.props.title}</a></h3>
        <div>
        {this.props.content.replace(/(<([^>]+)>)/ig,"").substring(0,250)+"..."};
        </div>


      </div>
  
    )
  }
}

export default Teaser;