function verify(){
    var no;
    var wt;
    no = Number(document.getElementById("myage").value);
    nom = Number(document.getElementById("phone").value);
    wt = Number(document.getElementById("mywt").value);
    if(wt<=0){
        console.log("please fill all info");
    }
    else if(wt<50){
        alert("you are not eligible for blood donation because you are under 50");
    }
    else if(no<=0){
        console.log("please fill all info");
    }
    else if(no<=18){
        alert("you are not eligible for blood donation because you are under 18");
    }
    else if(no>=55){
        alert("you are not eligible for blood donation because you are above 55");
    }
    else if(nom<7000000000){
        alert("Invalid number, Please enter right number");
    }
    else if(nom>9999999999){
        alert("Invalid number, Please enter right number");
    }
}