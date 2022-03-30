// const timeUnit = prompt(`Enter the Time Unit's:`)
// const Earning = prompt(`Enter the Earnings:`)

const timeUnit = 7;
const earning = 3000;
let T = 0;
let P = 0;
let C = 0;

const maxProfit = (tu,earning)=>{

  const t = theatre(tu,earning)
  if(t>0){
    console.log(`T:${t} P:${0} C:${0}`);
  }
  const p = pub(tu,earning)
  if(p>0){
    console.log(`T:${0} P:${p} C:${0}`);

  }
  const c = community(tu,earning)
  if(c>0){
    console.log(`T:${0} P:${0} C:${c}`);
  }
}


const theatre =(tu, earning) => {
    T =0
    let div = Math.floor(tu/5)
  let totalE = 0;
  if (div > 1) {
    for (let i = 1; i <= div; i++) {
      let timeR = tu - 5 * i;
      let earnings = timeR * 1500;
      totalE = totalE + earnings;
      T += 1;
    }
  } else {
    timeR = tu - 5;
    earnings = timeR * 1500;
    totalE = earnings;
    T = 1
  }

  if (totalE === earning) {
    return (T);
  } else {
    return (T = 0);
  }
}


const pub = (tu, earning) => {
    P =0
    let div = Math.floor(tu/4)
  let totalE = 0;
  if (div > 1) {
    for (let i = 1; i <= div; i++) {
      let timeR = tu - 4 * i;
      let earnings = timeR * 1000;
      totalE = totalE + earnings;
      T += 1;
    }
  } else {
    timeR = tu - 4;
    earnings = timeR * 1000;
    totalE = earnings;
    P = 1
  }

  if (totalE === earning) {
    return (P);
  } else {
    return (P = 0);
  }
}


const community = (tu, earning) =>{
    C =0
    let div = Math.floor(tu/10)
  let totalE = 0;
  if (div > 1) {
    for (let i = 1; i <= div; i++) {
      let timeR = tu - 10 * i;
      let earnings = timeR * 3000;
      totalE = totalE + earnings;
      C += 1;
    }
  } else {
    timeR = tu - 10;
    earnings = timeR * 3000;
    totalE = earnings;
    C = 1
  }

  if (totalE === earning) {
    return (C);
  } else {
    return (C = 0);
  }
}
