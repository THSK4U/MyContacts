function ajouter(event){
    event.preventDefault();

    let nom = document.getElementById("Nom").value;
    let prenom = document.getElementById("Prenom").value;

    localStorage.setItem('nom', nom);
    localStorage.setItem('prenom', prenom);
   
}

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

async function image(){
    const inputimg = document.getElementById('imgfile');
    const img = document.querySelector('.input-image');
    
    inputimg.addEventListener("change", inputimg => {
            const imageURL = URL.createObjectURL(inputimg.target.files[0]);
            img.style.backgroundImage = `url('${imageURL}')`;
            localStorage.setItem('image', imageURL);

    });
    }
    image()

async function get() {
    const response = await fetch("user.json");
    const data = await response.json();

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
        <h2 class="accordion-header">
          <div id="image" style="background-image: url('${user.picture.large}')" class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
           <p class="nom"> ${user.name.first} ${user.name.last}</p>
          </div>
        </h2>
        <div  id="flush-collapseOne" class="collapse">
            <p class="description">${user.location.street.name}</p>
            <p class="email">${user.email}</p>
            <p class="phone">${user.phone}</p>
        </div>
      </div>
    `;
    cardsContainer.appendChild(flipcardElement);
    accordion.appendChild(accordionElement);
    ajout()
    });
}

function boucle(){
    for (i = 0 ;i<5;i++){
         get();
    }
}

boucle()

function ajout(){
    const image = document.getElementById('image');
    document.querySelector(".nom").innerHTML=localStorage.getItem("nom") + " "+ localStorage.getItem("prenom");
    image.style.backgroundImage=`url('${localStorage.getItem("image")}')`;
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function() {
    searchContacts(searchInput.value);
});


function searchContacts(query) {
    const contacts = document.querySelectorAll('.flipcard, .accordion');

    contacts.forEach(contact => {
        const name = contact.querySelector('.titlefront, .titleback, .nom').textContent.toLocaleLowerCase();
        const phone = contact.querySelector('.phone').textContent;
        const email = contact.querySelector('.email').textContent.toLocaleLowerCase();
        
        if (name.includes(query) || phone.includes(query) || email.includes(query)) {
            contact.style.display = 'block';
        } else {
            contact.style.display = 'none';
        }
    });
}


