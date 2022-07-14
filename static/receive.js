function verify(){
    var ag;
    var no;
    ag = Number(document.getElementById("size").value);
    no = Number(document.getElementById("phone").value);
    if(ag<=0){
        console.log("please fill all info");
    }
    else if(ag>=1000){
        alert("Please enter size maximum 1000");
    }
    else if(no<=0){
        console.log("please fill all info");
    }
    else if(no<7000000000){
        alert("Invalid number, Please enter right number");
    }
    else if(no>9999999999){
        alert("Invalid number, Please enter right number");
    }
}