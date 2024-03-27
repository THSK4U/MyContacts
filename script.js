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
    

