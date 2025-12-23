
let oneProc = document.getElementById("oneProc");

let binaryNumber = document.getElementById("binaryNumber");

let value = '';

oneProc.addEventListener('click', function () {
    value = '1' + value;
    binaryNumber.value = value;
});

zeroProc.addEventListener('click', function () {
    value = '0' + value;
    binaryNumber.value = value;
});


let singleRemove = () => {
    value = value.substring(1);
    binaryNumber.value = value;
}

let reset = ()=> {
    value = '';
    binaryNumber.value = value;
    decimalNumber.value = value;
}


let binToDecimal = () => {

    if (value == '' || value == null) {
        decimalNumber.value = '';    
    } else {
        let binLen = value.length;
        let num = 0;

        for (let i = binLen - 1; i >= 0; i--) 
            num = num + ((value.at(i) == '0'? 0: 1) * Math.pow(2, i));
        decimalNumber.value = num;
    }
    
}