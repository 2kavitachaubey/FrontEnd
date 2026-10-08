let user = [
    "kavita23@gmail.com",
    "bhavesh34@gmail.com",
    "pawan45@gmail.com"
]

function sentEmail(email){
    return new Promise((res,rej)=>{
    let time = Math.floor(Math.random()*3);

    setTimeout(()=>{
        let probability = Math.floor(Math.random()*10);
        if(probability >= 5){
            res("Email sent successfully...");
        }else{
            rej("Email is rejected...");
        }
    },time*1000);
    })
}

async function sentEmails(userLists){
    let response = userLists.map((users)=>{
        return sentEmail(users)
        .then((data)=>{
            return data;
        }).catch((err)=>{
            return err;
        })
    })

    let ans = await Promise.all(response);

    ans.forEach(function(status){
        console.log(status);
    });
}

sentEmails(user);
