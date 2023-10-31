/*
Используя https://dummyjson.com/docs/
а) получить данные о всех пользователях https://dummyjson.com/users
б) используя fetch
в) вывести данные пользователя в карточке <div class=user-card> </div>
г) надо вывести в карточке следующие данные: 
"firstName"
"lastName"
"age": 50,
 "email": "atuny0@sohu.com",
 "phone": "+63 791 675 8914",
 "image": "https://robohash.org/hicveldicta.png?size=50x50&set=set1"

реализацию похожего задания мы делали на второй половине данных 

подсказка: с сервера вам приходит объект, у него есть ключ users, который содержит в значении массив объектов 
вам надо проитерироваться по всему массиву и вывести данные каждого пользователя(т.е. объекта)
*/


const root = document.querySelector("#root");

// Функция для отображения карточек пользователей

const showUserCard = (users) => {
    users.forEach((user) => {
        const userCard = document.createElement("div")
        userCard.classList.add("user-card")

        const firstName = document.createElement("h2")
        firstName.innerText = `first name: ${user.firstName}`

        const lastName = document.createElement("p")
        lastName.innerText= `last name: ${user.lastName}`

        const age = document.createElement("p")
        age.innerText = `age: ${user.age}`

        const email = document.createElement("p")
        email.innerText = `email: ${user.email}`

        const phone = document.createElement("p")
        phone.innerText = `phone: ${user.phone}`

        const image = document.createElement("img")
        image.scr = "https://robohash.org/hicveldicta.png?size=50x50&set=set1"

        userCard.append(firstName, lastName, age, email, phone, image)
        root.append(userCard)
    
    })
}

const fetchUsers = (callback) => {
    fetch("https://dummyjson.com/users")
       .then((res) => res.json())
       .then((data) => callback(data.users))

}

fetchUsers((users) => showUserCard(users))


