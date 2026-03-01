const fetchDataFormServer1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Server 1");
        }, 2000);
    });
};

const fetchDataFormServer2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error Server 2")
        }, 1000);
    });
};

const fetchDataFormServer3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Server 3");
        }, 3000);
    });
};

Promise.any([
    fetchDataFormServer1(),
    fetchDataFormServer2(),
    fetchDataFormServer3()
])
.then((result) => {
    console.log("กรณีที่ 1");
    console.log(`ข้อมูลจาก Server ตัวแรกที่ตอบสนองได้สำเร็จ`, result);
})
.catch((error) => {
    console.log(`Error`, error);
})

Promise.allSettled([
    fetchDataFormServer1(),
    fetchDataFormServer2(),
    fetchDataFormServer3()
])
.then((result) => {
    console.log("กรณีที่ 2", result);
    console.log(`ผลลัพธ์ทั้งหมดจากServer`, result)
})