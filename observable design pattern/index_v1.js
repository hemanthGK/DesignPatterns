
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

// subject
class Door {
    open() {
        console.log("door opened..")
        light.toggle({ type: 'open' })
        fan.toggle({ type: 'open' })
    }
    close() {
        console.log("door closed")
        light.toggle({ type: 'close' })
        fan.toggle({ type: 'close' })

    }
}

const door = new Door();

setTimeout(() => {
    door.open();
    setTimeout(() => {
        door.close()
    }, 3000)
}, 3000);


/*

// design issues
    => subject & listener(s) are tightly coupled
    => blocking calls
*/