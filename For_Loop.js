// let n=5; let sum=0;
// for(let i=0;i<=n;i++){
//     sum=sum+i;
//     console.log(" the value of sum is "+sum);
// }
let n=121;
let reverse=0;
let t=n;
let d;
while(n>0){
    d=n%10;
    reverse=reverse*10+d;
    n=n/10;
}
if(reverse==t){
    console.log("enter a number is palindrome");
}
