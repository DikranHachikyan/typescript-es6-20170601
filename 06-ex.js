"use strict"

function createUser(user, plan = 'developer'){
	if( typeof user !== 'string' || user.trim().length === 0){
		throw 'undefined or empty user name!';
	}
	console.log(`Create user ${user} [${plan}]`);
}

createUser('John','developer');
createUser('John');
createUser(' ');