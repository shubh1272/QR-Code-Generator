const generateBtn = document.getElementById("generateBtn");

const apiurl  = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");

function generateQR(value){
    if(qrText.value.length > 0){
        qrImage.src = "";
        const response = (apiurl + value);
        console.log("got response");
        qrImage.src = response;
        imgBox.classList.add("show-img");
    }

    else{
        qrImage.src = "";
       qrText.classList.add("error");
       setTimeout(() => {
        qrText.classList.remove("error");
       }, 1000);
    }
    
}

generateBtn.addEventListener("click",()=>{
    generateQR(qrText.value);

})