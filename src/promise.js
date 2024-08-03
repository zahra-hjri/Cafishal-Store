const zahra = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(5);
    reject("khataaaa");
  }, 5000);
});

zahra.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  }
);
console.log(zahra);
