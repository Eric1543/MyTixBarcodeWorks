import React from 'react';

class Graph extends React.Component{
	constructor(){
		super();
	}


render(){
	return(
		<div>
		 		<p align="center">
	     	 	<canvas id="mycanvas"></canvas> 
	    	</p>  
    </div>
   	)
	}
}

export default Graph;