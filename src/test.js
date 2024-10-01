const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(8);
  }, 3000);
});

promise.then(
  (result) => {
    console.log(result);
  },
  (error) => {}
);
