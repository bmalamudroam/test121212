<<<<<<< HEAD
var obj = {};
var populateObjWithPrimeFactor = function(obj, num) {
  if (isPrime(num)) {
    obj[num] = (obj[num] || 0) + 1;
    return;
  }
  var i = 2;
  while (i <= Math.ceil(Math.sqrt(num))){
    if (num % i === 0) {
      num = num / i;
      populateObjWithPrimeFactor(obj, i);
      populateObjWithPrimeFactor(obj, num);
      return;
    }
    i++;
  }

};
var isPrime = function(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (var i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
=======

>>>>>>> a4b0da639a5acc3366b9c737f944f72f62f0258f
