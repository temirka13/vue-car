const car = (name, model, owner, year, phone, imgSrc) => ({ name, model, owner, year, phone, imgSrc })
const log = (text, type, date = new Date()) => ({ text, type, date })

const cars = [
    car('Ford', 'Focus', 'A', '2013', '+ 7 111 111 11 11', './img/focus.png'),
    car('Nisan', '6', 'B', '2015', '+ 7 321 321 32 32', './img/6.png'),
    car('Lambargini', 'Veneno', 'C', '2017', '+ 7 123 123 21 12', './img/veneno.jpg'),
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectLi: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
    },
    methods: {
        selectCar(index) {
            this.car = cars[index]
            this.selectLi = index
            console.log("click " + index)
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Cancel order: ${this.car.name} - ${this.car.model}`, 'cancel')
            )
        }
    },
    computed: {
        phoneButtonText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filterCars() {
            const filtered = this.cars.filter((car) => {
                return car.name.toLowerCase().indexOf(this.search) > -1 || car.model.toLowerCase().indexOf(this.search) > -1 || car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
            return filtered
        }
    },
    filters: {
        date(val) {
            return val.toLocaleString()
        }
    }
})