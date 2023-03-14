/*


*@example
*['A+', 'A', 'Fail'] => ['A+', 'A']
*['Fail', 'Fail', 'B'] => ['B']
*['Fail'] => []
*/


let grades = ['A+', 'A', 'Fail']

let goodGrades = []


for (let i = 0; i < grades.length; ++i) {
 if (grades[i] !== 'Fail') {
    goodGrades.push(grades[i]);
 }
}

console.log(goodGrades);