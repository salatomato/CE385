function calculate(weight,height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5 ){
        console.log("ผอม");
    }
    else if (18.5 <= bmi && bmi < 25){
        console.log("ปกติ");
    }
    else if (25 <= bmi && bmi < 30) {
        console.log("อ้วน");
    }
    else{
        console.log("เอ็มอ้วนมาก")
    }

    return bmi;
}


console.log(calculate(70,1.75).toFixed(2));
console.log(calculate(50,1.60).toFixed(2));
console.log(calculate(90,1.70).toFixed(2));