// 1. User → Orders → Total

// Create:

// getUser → after 1 sec gives { id: 101, name: "Kavita" }
// getOrders → takes userId, after 1 sec gives an array of 3 orders
// calculateTotal → takes orders, after 1 sec gives total price
// Print: "Kavita's total order value is ₹____"

// function getUser(username, cd){
//     setTimeout(() => {
//         console.log("User data...");
//         cd({id:101, name: "Kavita"});
//     }, 1000);
// }

// function getOrder(userId, cd){
//     setTimeout(() => {
//         console.log("Items that are selected by user...");
//         cd([{item:"top",price:1000},{item:"Wide Jeans",price:2000},{item:"Black shoes",price:5000}]);
//     }, 1000);
// }

// function calculateTotal(orders,cd){
//     setTimeout(()=>{
//         let totalPrice = 0;
//         for(let i = 0; i<orders.length; i++){
//             totalPrice += orders[i].price;
//         }
//         cd(totalPrice);
//     },1000)
// }

// getUser("Kavita",function(data){
//     console.log(data);
//     getOrder(data.id, function(items){
//         console.log(items);
//         calculateTotal(items, function(finalPrice){
//             console.log(`${data.name}'s total order value is ₹${finalPrice}`);
//         })
//     })
// })


// getStudent → after 1 sec gives { id: 101, name: "Kavita" }
// getSubjects → takes studentId, after 1 sec gives ["JavaScript", "DSA", "DBMS"]
// getMarks → takes subjects, after 1 sec gives [85, 72, 91]
// calculateResult → takes marks, after 1 sec calculates the average, highest mark, and grade
// Final callback → prints the student's name, average, highest mark, and grade

function getStudent(studentName, cd){
    console.log("Student info->");
    setTimeout(() => {
        cd({ id: 101, name: "Kavita"});
    }, 1000);
}

function getSubjects(studentId, cd){
    setTimeout(() => {
        cd(["JavaScript", "DSA", "DBMS"]);
    }, 1000);
}

function getMarks(subject, cd){
    console.log("Student marks in these subjects->");
    setTimeout(() => {
        cd([{subject: subject[0], marks: 85},{subject: subject[1], marks: 90},{subject: subject[2], marks: 60}]);
    }, 1000);
}

function calculateResult(marks, cd){
    setTimeout(()=>{
        let total = 0;
        let average;
        let highMarks = 0;
        let grade; 
        for(let i = 0; i<marks.length; i++){
            total+= marks[i].marks;
            if(highMarks<marks[i].marks){
                highMarks = marks[i].marks;
            }
        }
        average = (total/marks.length).toFixed(1);
        if(average>90){
            grade = "A+";
        }else if(average>80){
            grade = "A";
        }else if(average>70){
            grade = "B";
        }else if(average>60){
            grade = "C";
        }else{
            grade = "D";
        }
        
        cd(average,highMarks,grade);
    },1000);
}

getStudent("Kavita", function(info){
    console.log(info);

    getSubjects(info.id, function(subjects){

        getMarks(subjects,function(marks){
            console.log(marks);

            calculateResult(marks,function(a,h,g){
                console.log(`${info.name}'s average is ${a}, highest marks is ${h} and grade is ${g}`);
            })
        })
    })
})


