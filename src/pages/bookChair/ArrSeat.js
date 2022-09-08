
const row = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "L","M"];
const seats=[];   

for( let i=0; i<row.length; i++){
   for( let j=1; j<12;j++){
       let seat={
          position: row[i]+j,isEmpty: false
       };
       seats.push(seat);
   }
}

let seatNew=JSON.stringify(seats);
  console.log(seatNew);