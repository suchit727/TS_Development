class Employee{
    empId:number;
    empName:string;
    salary:number;
    isinIt:boolean;
}
let employees:Employee[]=[{
    'empId' : 12,
    'empName' : "suchit",
    'salary' : 10000,
    'isinIt' : true
},
{
    'empId' : 13,
    'empName' : "prem",
    'salary' : 10000,
    'isinIt' : false
},
{
    'empId' : 14,
    'empName' : "kunal",
    'salary' : 10000,
    'isinIt' : true
}
]

//every - Every element should satisfy condition
console.log(employees.every(e=>e.empId<20));

//fill()-this will update statically
var staticEmployee:Employee={
    'empId' : 12,
    'empName' : "suchit",
    'salary' : 10000,
    'isinIt' : true
}

employees.fill(staticEmployee,0,1);