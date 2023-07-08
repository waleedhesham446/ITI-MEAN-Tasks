let n = 34;
let students = [];
let avgTotal = 0;
let maxAvg = 0;
let minAvg = 100;
let StudentWithMaxAvg = { id: 0, avg: 0 };
let StudentWithMinAvg = { id: 0 , avg: 0 };

function getNewId(studentsList) {
    let isNew = false;
    let id;
    let i;
    while(!isNew){
        id = Math.floor(Math.random() * 100000)
        for(i = 0; i < studentsList.length; i++){
            if(studentsList[i].id === id)
                break;
        }
        if(i === studentsList.length)
            isNew = true;
    }
    return id;
}

for(let i = 0; i < n; i++){
    //  Adding Data Of Students
    let genderNum = Math.round(Math.random());
    students.push({
        name: `Student ${i+1}`,
        age: Math.floor((Math.random() * 13) + 13),
        gender: (genderNum == 1)? "Male" : "Female",
        grades: [
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100)
        ],
        id: getNewId(students)
    });

    let avg = 0;
    for(let j = 0; j < 5; j++)
        avg += students[i].grades[j];
    avg /= 5;
    avgTotal += avg;
    students[i].avg = avg;
    
    if(avg > maxAvg){
        maxAvg = avg;
        StudentWithMaxAvg.id = students[i].id;
        StudentWithMaxAvg.avg = students[i].avg;
    }

    if(avg < minAvg){
        minAvg = avg;
        StudentWithMinAvg.id = students[i].id;
        StudentWithMinAvg.avg = students[i].avg;
    }
}

avgTotal /= n;

console.log(students);
console.log(`Total AVG: ${avgTotal}`);
console.log(`Student with id ${StudentWithMaxAvg.id} has max AVG: ${StudentWithMaxAvg.avg}`);
console.log(`Student with id ${StudentWithMinAvg.id} has min AVG: ${StudentWithMinAvg.avg}`);
