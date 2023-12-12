async function printAfterDelay() {
	for (let i = 1; i < 6; i++) {
		await print(i);
	}
}

function print(index) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(index);
			resolve();
		}, index * 1000);
	});
}


// Without using async await 

// Sol 1 - Recursive function 

function printDelayWithoutAsync() {
    let count = 1;
  
    function printSequentially() {
      print(count)
        .then(() => {
          count++;
          if (count < 6) {
            return printSequentially(); // Recursively call printSequentially for the next iteration
          }
        });
    }
  
    printSequentially();
  }
  
  function print(index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(index);
        resolve();
      }, index * 1000);
    });
  }
  
  printDelayWithoutAsync();

  

  // Sol 2 : IFFE

  function printDelayWithoutAsync() {
    let count = 1;
  
    function printNext() {
      if (count < 6) {
        print(count).then(() => {
          count++;
          printNext(); // Call the function recursively
        });
      }
    }
  
    printNext();
  }
  
  function print(index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(index);
        resolve();
      }, index * 1000);
    });
  }
  
  printDelayWithoutAsync();

  
// Sol 3: For loop and Promise chain 

function printDelayWithoutAsync() {
    let count = 1;
  
    function printInSequence() {
      let promiseChain = Promise.resolve();
  
      for (let i = 1; i < 6; i++) {
        promiseChain = promiseChain.then(() => {
          return print(i);
        });
      }
    }
  
    printInSequence();
  }
  
  function print(index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(index);
        resolve();
      }, index * 1000);
    });
  }
  
  printDelayWithoutAsync();
  