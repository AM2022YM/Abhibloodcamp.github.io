function verify(){
    var no;
    no = Number(document.getElementById("phn").value);
    if(no<=0){
        console.log("please fill all info");
    }
    else if(no<7000000000){
        alert("Invalid number, Please enter right number");
    }
    else if(no>9999999999){
        alert("Invalid number, Please enter right number");
    }
}