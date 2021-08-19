const dob = document.querySelector("#dob")
const luckyNumber = document.querySelector("#lucky-number")
const Checkbtn = document.querySelector("#checkNumber")
const outputdiv = document.querySelector("#output")


function clickhandler(){
    date=dob.value
    lucky=luckyNumber.value

    console.log(date,lucky)
    const sum=calculateSum(date)
    console.log(sum)
    comparevalues(lucky,sum,)

}


function comparevalues(luckynumber,sum){
    if(sum % luckynumber===0){
        showMessage ("Your number is lucky")
    }
    else{
        showMessage("your number is not lucky")
    }

}


function showMessage(message){
    outputdiv.innerText=message;
}



function calculateSum(dob){
    dob=dob.replaceAll("-","")
    let sum=0;
    for(i=0;i<=dob.length;i++){
        sum=sum+ Number(dob.charAt(i));
    }
    return sum;
}


Checkbtn.addEventListener("click",clickhandler)

