

const row = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "L", "M"];
function get(i) {
   let listChairs = []
   for (let j = 1; j < 12; j++) {
      let item = { position: row[i] + j, price: 7500, isEmpty: false }
      listChairs.push(item);
   }
   return listChairs
}


const seats = [];
let i = 0;
while (i < row.length) {
   let itemRow = {
      row: row[i],
      listChairs: get(i)
   }
   seats.push(itemRow);

   i++;
}

let seatNew = JSON.stringify(seats);
console.log(seatNew);
