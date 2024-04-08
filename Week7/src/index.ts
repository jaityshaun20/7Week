//step one 
function isNumber(value: any): value is number {
    return typeof value === 'number';
  }
  
  function isString(value: any): value is string {
    return typeof value === 'string';
  }

  let mixedArray: (string | number)[] = [];

  mixedArray.push("pink", "head", "nose", "bag", "pen", 1, 2, 3, 4, 5);
  mixedArray.forEach(item => {
    if (isString(item)) {
      console.log("string:", item);
    } else if (isNumber(item)) {
      console.log("number:", item);
    }
  });