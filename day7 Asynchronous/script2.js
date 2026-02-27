console.log("start");

let loadPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Loaded");
    }, 2000);
});

async function run() {
    let result = await loadPromise;
    console.log(result);
}

run();

console.log("end");