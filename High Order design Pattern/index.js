
/*

    design issues
    -------------

    -> code tangling/tight-coupling
    -> code scattering/duplication

*/

//dev-1
function hello() {
    console.log("Hello")
}

// dev-2
function hi() {
    console.log("Hi")
}

// Higher-Order-Function ==> Higher-Order-Programming e.g thru function composition, we can build complex alogorithms from simple functions
function withFlowerBanner(f) {
    return function () {
        console.log("🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹")
        f()
        console.log("🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹")
    }
}


const helloWithFlowerBanner = withFlowerBanner(hello)
helloWithFlowerBanner();
const hiWithFlowerBanner = withFlowerBanner(hi)
hiWithFlowerBanner();


//--------------------------------------------------------

