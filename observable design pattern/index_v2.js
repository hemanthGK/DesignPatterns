
// observer/listener(s)

const light = {
    toggle(event) {
        if (event.type === 'open')
            console.log("light on")
        if (event.type === 'close')
            console.log("light off")
    }
}


const fan = {
    toggle(event) {
        if (event.type === 'open')
            console.log("fan on")
        if (event.type === 'close')
            console.log("fan off")
    }
}

const AC = {
    toggle(event) {
        if (event.type === 'open')
            console.log("AC on")
        if (event.type === 'close')
            console.log("AC off")
    }
}

// subject   ( open for extension , closed for modification )
class Door {
    constructor() {
        this.listeners = []
    }
    addDoorListener(listener) {
        this.listeners.push(listener)
    }
    removeListener(listener) {
        const idx = this.listeners.findIndex(ele => ele === listener);
        this.listeners.splice(idx, 1)
    }
    open() {
        console.log("door opened..")
        this.listeners.forEach(listener => listener.toggle({ type: 'open' }))
        //...
    }
    close() {
        console.log("door closed")
        this.listeners.forEach(listener => listener.toggle({ type: 'close' }))
    }
}


const door = new Door();

door.addDoorListener(light)
door.addDoorListener(fan)

door.removeListener(fan)

// setTimeout(() => {
//     door.open();
//     setTimeout(() => {
//         door.close()
//     }, 3000)
// }, 3000);



const openBtn = document.getElementById("btn1");
const closeBtn = document.getElementById("btn2");

openBtn.addEventListener('click', e => {
    door.open()
})
closeBtn.addEventListener('click', e => {
    door.close();
})


/*

// design issues

    => subject & listener(s) are tightly coupled
    => blocking calls


*/