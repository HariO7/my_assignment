const data = [1,4,0,0,6,0,4,6,9]

function createTable(tableData) {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  tableData.forEach(function (rowData) {
    const row = document.createElement("tr");
    rowData.forEach(function () {
      const cell = document.createElement("td");
      cell.appendChild(document.createTextNode(""));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}
let tableData = []

for(let i=0;i<10;i++){
   tableData[i] = []
   for(let j=0;j<10;j++){
      const data = ['']
      tableData[i][j]= data;
   }
}

createTable(tableData);
const allTr = document.querySelectorAll('tr')

function waterTank(data){
   for(let i=0;i<2;i++){
      let count = data[i]
      // const allTd = document.querySelectorAll('td')
      console.log(count);

      // for(let j=0;j<1;j++){
      //    let td = allTr[i].childNodes
      //    console.log(td[j]);
      // }


      allTr.forEach((e,i)=>{
         let tr = e.childNodes
            console.log(tr);
            for(let j=0;j<count;j++){
               if(j<count){
                  tr[j].className = "waterfill"
               }
               
            }
            // tr.forEach((q,j)=>{
            //    if(j<=count){
            //       console.log(q[j]);
            //       q[j].classList.add('waterfill') 
            //    }
            // })
      })
      // allTd.forEach((e,i)=>{
      //    if(i<=19){
      //       return  e.classList.add('waterfill')
      //    }
      // })
   }
}

waterTank(data)