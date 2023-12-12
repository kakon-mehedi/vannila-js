/**
 * Async function means oi function er execution ta asynchronously hobe.
 * If I use await before a function call that means oi await function ta call na houa porjonto nicher line gulo execute hobe na.
 * Until await function get it's data, the line below code or the next instuction will not be executed
 * Await subscribe the promise.resolve data.
 */

function delay(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

async function exampleAsyncFunction() {
	console.log('Start');

	// Using await to wait for the promise to resolve
	await delay(2000);
	console.log('After 2 seconds');

	// Another example with a promise-returning function
	const data1 = await fetchData();
    console.log(data1);

    const data2 = fetchData2();

    /**
     * as I did not use await before fetchData2() call, as fetchData2() is an async function it will return a promise.
     * That's why data2 will print a promise in the console log down here.
     */
    console.log(data2); 

	console.log('Data fetch done');

	console.log('End');
}

async function fetchData() {
	console.log('Fetching starts');
	const result = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = await result.json();
	console.log('fetching end');

	return data;
}


async function fetchData2() {
	console.log('Fetching starts');
	const result = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = await result.json();
	console.log('fetching end');

	return data;
}


// Call the async function
exampleAsyncFunction();
