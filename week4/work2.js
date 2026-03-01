const fetchDataWithCallback = (callback) => {
    console.log("...");
    setTimeout(() => {
        const data = { id: 1, name:'Pao', email:'pao@gmail.com'};
        callback(null, data);
    }, 2000);
};

fetchDataWithCallback((error,result) => {
    if(error){
        console.log("Error:", error);
    } else {
        console.log("operation, complete, result:", result);
    }
});

const fetchDataWithPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("...");
        setTimeout(() => {
            const data = { id: 1, name: 'Pao', email: 'pao@gmail.com'};
            const success = true; 

            if (success) {
                resolve(data);
            } else {
                reject("Failed to fetch data.")
            }
        }, 2000);
    });
};

fetchDataWithPromise()
    .then((data) => {
        console.log("Data fetch succussfully:", data);
    })
    .catch((error) => {
        console.error("error fetching data:", error);
    });
