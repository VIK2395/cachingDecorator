'use strict'

// function slow(x) {
//   // здесь могут быть ресурсоёмкие вычисления
//   alert(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function(x) {
//     if (cache.has(x)) {    // если кеш содержит такой x,
//       return cache.get(x); // читаем из него результат
//     }

//     let result = func(x); // иначе, вызываем функцию

//     cache.set(x, result); // и кешируем (запоминаем) результат
//     return result;
//   };
// }

// slow = cachingDecorator(slow);

// alert( slow(1) ); // slow(1) кешируем
// alert( "Again: " + slow(1) ); // возвращаем из кеша

// alert( slow(2) ); // slow(2) кешируем
// alert( "Again: " + slow(2) ); // возвращаем из кеша


function cachingDecorator(func) {
	let cache = new Map();// {name => age}

	return function(name, age) {
		if ( cache.has(name) ) {
			if ( cache.get(name) === age ) {
				console.log("Hello from cache!"); return cache.get(name) 
			} else map.delete(name);
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

alert( getUserAge('Viktor', 24) ); //кешуэм
alert( "Again: " + getUserAge('Viktor', 24) ); //Берем з кеша

alert( getUserAge('Mufasa', 14) ); //кешуэм

alert( "Again: " + getUserAge('Mufasa', 14) );