function myFunction(x:Array<number>):number{
    let sum:number=0;
    for (let e of x) {
        sum+=e;
    }
    return sum;
  }
  let value:Array<number> =new Array<number>();
  value.push(1);
  value.push(2);
  value.push(3);
  console.log(myFunction(value));