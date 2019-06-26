import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import seal from "./seal.png"
import redacted from "./redacted.png"

const Padder = styled.div`
padding: 5em;
`

const BlackBox = styled.div`
background-color: black;
color: white;
padding: 2em;
margin: 2em;
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`



const Blocker = (unit) => {
    const [toggler, setToggler]= useState(true);

    function SwitchToggle() {
	setToggler(!toggler);
    }

    return (
	    <span onClick={SwitchToggle}>{toggler ? unit.concat(" ") : "■".repeat(unit.length).concat(" ") }</span>
    )
}

function Graf(props) {
    const words = props.text;
    
    const paragraphs = words.map((line, i) =>
				 <p key={i}>{line.split(" ").map((word) => Blocker(word))}</p>
				)
    return (
	    <div><p>{paragraphs}</p></div>
    )
}

const data = { "words": [   "Gonsa originally intended to complete the purchase at a show on April 1, 2006.",
			    "He told Agent Tunney in a recorded telephone call that he had to change this to April 2 because his bank could not complete the money transfer in time and he had to travel to San Diego to pick up the money for the purchase.",
			    "Similar to Gonsa’s March 18 purchase, Agent Tunney planned to conduct surveillance of the April 2 purchase.",
			    "The plan also included coordinating with agents Rais and Murdock in the San Diego Office if Gonsa traveled there to pick up the money and placing a tracking device on his vehicle to help locate the machine conversion shop previously mentioned."
] } 

const Layout = ({ children }) => (
	<Padder>    
	{children}
	</Padder>
)


const Intro = () => {
    return (
	    <div>
	    <h1> Redacted: The Game</h1>
	    <img src={seal} alt="seal_us"/>
	    <BlackBox>
	    <p>Do you have what it takes to redact documents in response to freedom of information requests?</p>
	    <p>Play this game to find out.</p>
	</BlackBox>
	    <StyledLink to="/text" component={Text}>&#9193;</StyledLink>
	    </div>
    )
}


const Text = () => {
    return (
	    <div>
	    <Graf text={data.words}/>
    	    <StyledLink to="/finish" component={Finish}>&#9193;</StyledLink>
	    </div>
    )
}

const Finish = ({ children }) => (
	<div>    
	<p>On the honor system:</p>
	<h1>PASS</h1>
	<p>But consider:</p>
	<p>Releasing information is important for democracy.</p>
	<p><img src={redacted} alt="redacted"/></p>
	<p>An <a href="https://www.eff.org/deeplinks/2015/03/foilies-round-3-redactions">article</a> on the subject.</p> 
	</div>
)

function App() {
  return (
    <div className="App">
	  <Router>

	  <Layout>
          <div className="content">
          <Route exact path="/" component={Intro}/>
 	  <Route path="/text" component={Text} />
 	  <Route path="/finish" component={Finish} />	  
	  </div>
	  </Layout>
	  </Router>
    </div>
  );
}

export default App;
