const data = [0,4,0,0,0,6,0,6,4,0]; 

function createTable(tableData) {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  tableData.forEach(function (rowData) {
    const row = document.createElement("tr");
    rowData.forEach(function () {
      const cell = document.createElement("td") ;
      cell.appendChild(document.createTextNode(""));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}
let tableData = [];

for (let i = 0; i < 10; i++) {
  tableData[i] = [];
  for (let j = 0; j < 10; j++) {
    const data = [""];
    tableData[i][j] = data;
  }
}

createTable(tableData);
const allTr = document.querySelectorAll("tr");

function waterTank(data) {
   let value = 0
    for (let k = 0; k < data.length; k++) {
      let count = data[k];
      let tr = allTr[k].childNodes;
      if(count != 0){
         value = count
         for (let j = 0; j < count; j++) {
            tr[j].className = "waterfill";
        }
      } else {
         for (let j = 0; j < value; j++) {
            tr[j].className = "waterfall";
        }
      }
     
   }
}

waterTank(data);
