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

async function get() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
        console.log(data)

    const cardsContainer = document.querySelector('.cards');
    data.results.forEach(user => {
        const flipcardElement = document.createElement("div");
        flipcardElement.classList.add("flipcard");
        flipcardElement.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front"  style="background-image: url('${user.picture.large}')">
                    <p class="titlefront">${user.name.first} ${user.name.last}</p>
                </div>
                <div class="flip-card-back">
                    <div class="image" style="background-image: url('${user.picture.large}')"></div>
                    <p class="titleback">${user.name.first} ${user.name.last}</p>
                    <p class="description">${user.location.street.name}</p>
                    <p class="email">${user.email}</p>
                    <p class="phone">${user.phone}</p>
                </div>
            </div>
        `;
        cardsContainer.appendChild(flipcardElement);
    });
}

function boucle(){
    for (i = 0 ;i<50;i++){
         get();
    }
}

boucle()
