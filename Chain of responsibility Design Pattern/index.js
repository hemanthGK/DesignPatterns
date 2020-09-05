


function MoneyDispensor(currency) {
    this.currency = currency;
    this.next = null;
    this.setNext = function (next) {
        this.next = next;
        return this;
    }
    this.process = function (amount) {
        let v = amount % this.currency;
        if (v !== 0) {
            if (this.next !== null)
                this.next.process(v)
        } else {
            console.log(this.currency + " fulfilled")
        }
    }
}


const twok = new MoneyDispensor(2000)
const fiveh = new MoneyDispensor(500)
const hundred = new MoneyDispensor(100)

const chain=twok.setNext(hundred)

chain.process(4500)

