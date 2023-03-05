var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var employees = [{
        'empId': 12,
        'empName': "suchit",
        'salary': 10000,
        'isinIt': true
    },
    {
        'empId': 13,
        'empName': "prem",
        'salary': 10000,
        'isinIt': false
    },
    {
        'empId': 14,
        'empName': "kunal",
        'salary': 10000,
        'isinIt': true
    }
];
//every - Every element should satisfy condition
console.log(employees.every(function (e) { return e.empId < 20; }));
//fill()-this will update statically
var staticEmployee = {
    'empId': 12,
    'empName': "suchit",
    'salary': 10000,
    'isinIt': true
};
employees.fill(staticEmployee, 0, 1);
