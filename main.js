'use strict'

function cachingDecorator(func) {
	let cache = new Map();// {name => age}

	return function(name, age) {
		if (name === 'show cache') {console.log(cache); return;}

		if ( cache.has(name) ) {
			if ( cache.get(name) === age ) {
				console.log("Hello from cache!"); return cache.get(name) 
			} else cache.delete(name);
		} 


		let _age = func(name, age);

		cache.set(name, _age);
		return _age;
	};
}

function getUserAge(name, age) {
	alert(`user name: ${name}, user age: ${age}`)
	return age;
}

getUserAge = cachingDecorator(getUserAge);

getUserAge('Viktor', 24);
getUserAge('Mufasa', 14);

getUserAge('show cache');

getUserAge('Viktor', 27);

getUserAge('show cache');



