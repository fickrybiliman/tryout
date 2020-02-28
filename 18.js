const cities = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung'];

function duplicatesRemover(arr) {
   return arr.filter(function(value, index) {
      return arr.indexOf(value) === index;
   })
};

console.log(duplicatesRemover(cities));