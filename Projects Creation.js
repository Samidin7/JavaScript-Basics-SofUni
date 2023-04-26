function projects(input){
let name = input[0]
let work = Number(input[1])

let workTime = work * 3;

console.log(`The architect ${name} will need ${workTime} hours to complete ${work} project/s.`);
}
projects(["George","4"]);