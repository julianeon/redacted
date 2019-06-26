import React from "react";
import Masthead from './masthead';
import Footer from './footer';

export default ({ children }) => (
	<div>    
	<Masthead/>
	{children}
	<Footer/>
	</div>
)
