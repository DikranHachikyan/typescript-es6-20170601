"use strict"

let msg = 'Hello JS'; //глобална променлива

function show(){
	let a = 1; //локална променлива

	if(true){
		let b = 10;
		console.log('[if] b=',b); 
	}

	console.log('msg=', msg); //Ok - global scope
	console.log('a=',a); //Ok - function scope
	console.log('b=',b); //Error
}


show();