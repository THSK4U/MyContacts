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
    const response = await fetch("user.json");
    const data = await response.json();
        console.log(data)

    const cardsContainer = document.querySelector('.cards');
    const accordion = document.querySelector('.accordionlist');

    data.results.forEach(user => {
        const flipcardElement = document.createElement("div");
        const accordionElement = document.createElement("div");
        flipcardElement.classList.add("flipcard");
        accordionElement.classList.add("accordion");

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

        accordionElement.innerHTML = `
        <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <div style="background-image: url('${user.picture.large}')" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
           <p> ${user.name.first} ${user.name.last}</p>
          </div>
        </h2>
        <div  id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <p class="description">${user.location.street.name}</p>
            <p class="email">${user.email}</p>
            <p class="phone">${user.phone}</p>
        </div>
      </div>
    `;
    cardsContainer.appendChild(flipcardElement);
    accordion.appendChild(accordionElement);
    });
}

function boucle(){
    for (i = 0 ;i<1;i++){
         get();
    }
}

boucle()
