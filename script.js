const input = document.querySelector(".input-container");

function activateItem(item) {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            input.classList.remove('active');
        } else {
            item.classList.add('active');
            input.classList.add('active');
        }
    }


// fetch("https://randomuser.me/api/?page=3&results=10&seed=abc").then(function(response){
//     console.log(response[0].gender)
//     return response.json;
// })

async function get(){
    const response = await fetch("https://randomuser.me/api/?nat=fr")
    const data = await response.json()
    const user = data.results[0]
console.log(data)
    document.querySelector(".titlefront").innerHTML = user.name.first + ' ' + user.name.last;
    document.querySelector(".titleback").innerHTML = user.name.first + ' ' + user.name.last;
    document.querySelector(".email").innerHTML = user.email;
    document.querySelector(".phone").innerHTML = user.phone;
    document.querySelector('.flip-card-front').style.backgroundImage = `url('${user.picture.large}')`;
}

get()

