const Product = require("./models");
save()

function save() {
    let info1 = {
        name: 'Java',
        price: 990,
        expire: new Date(2023, 7, 17),
        tags: ['Java Spring Boot', 'J2EE']
    }
    new Product(info1).save(err => {
        if (!err) {
            console.log('information1 saved')
            create()
        }
    })
}

function create() {
    let info2 = {
        name: 'C#',
        price: 99,
        expire: new Date(2023, 4, 14),
        tags: ['C#.NET', '.NET Core3.1']
    }
    Product.create(info2, err => {
        if (!err) {
            console.log('information2 saved')
            insertMany()
        }
    })
}

function insertMany() {
    let infos = [
        {name: 'Go', price: 9999, expire: new Date(2023, 1, 11), tags: ['Go','Golang']},
        {name: 'React', price: 777, expire: new Date(2023, 2, 22), tags: ['React','Web App']},
        {name: 'React Native', price: 555, expire: new Date(2023, 3, 13), tags: ['React Native','IOS/Android']}
    ]
    Product.insertMany(infos, err => {
        if (!err) {console.log('information saved')}
    })
}