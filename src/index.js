// Promises solve the problem of callback hell and allow us to handle the code asynchronously without blocking the main thread.

const directions = [
    "Starting point: Glaceria Madrid",
    "➔ Turn right toward P. de la Chopera",
    "← At the roundabout, take the 1st exit onto P. de la Chopera",
    "* Lune Creperie P. de la Chopera 33, Madrid"
  ];
   
   
  function obtainDirections(step) {
    return new Promise (function (resolve, reject) {
       setTimeout(() => {
        console.log( directions[step] );
   
        if (!directions[step]) reject("Instructions not found.")
        else resolve();
       }, 2000); 
      
    })
  };
   
   
  obtainDirections(0)
    .then(() => obtainDirections(1) )
    .then(() => obtainDirections(2) )
    .then(() => obtainDirections(3) )
    .then(() => console.log("You arrived at your destination!") )
    .catch((err) => console.log(err));

    const myPromise = new Promise( (resolve, reject) => {
        if (/* condition */) {
           resolve(/* value */);  // fulfilled successfully
        }
        else {
           reject(/* reason */);  // error, rejected
        }
     });

     //Promise all

     const p1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("foo"), 1000);
      });
       
      const p2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1337), 2000);
      });
       
      const p3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve( { name: "Bob" } ), 4000);
      });
       
       
      Promise.all( [p1, p2, p3] )
        .then((values) => console.log("values", values));
      