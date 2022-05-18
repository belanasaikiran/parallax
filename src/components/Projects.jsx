import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import SentimentalAnalysis from "../images/sentimental-analysis.jpg";
import BitcoinPrice from "../images/bitcoin-price.png";


function Projects() {
  return (
    <ParallaxLayer offset={1} speed={0.5}>

      <div className="projects">
      
      <h1> projects</h1>
      <br/>
      <br/>


        <div className="project">


          <div className="project-card">
            <img className="project-card-img" src={SentimentalAnalysis} alt="project" />



            <div className="project-card-title">
            <i className="fab fa-twitter "> </i>  Twitter Sentimental Analysis
              <p className="project-card-description">
              Sentiment analysis of any topic/trend by parsing the tweets fetched from twitter using API provided by twitter-dev using Python & Natural Language Processing.
              </p>
            </div>
          </div>




      {/* /project 2 */}
      <div className="project-card">
      <img className="project-card-img" src={BitcoinPrice} alt="project" />

            <div className="project-card-title">
            <i class="fab fa-brands fa-bitcoin"></i>   Bitcoin Price Prediction
              <p className="project-card-description">
              Cryptocurrency prediction using Deep Recurrent Neural Networks and LSTM. Predicting the future price of Bitcoin based on previous data.
              </p>
              
            </div>
          </div>
      


          </div>



      </div>
    </ParallaxLayer>
  );
}

export default Projects;
