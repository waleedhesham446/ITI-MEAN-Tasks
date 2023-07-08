let inputFields = document.querySelectorAll('input');
let btn = document.querySelector('button');
let booksList = document.querySelector('ul');
let checkboxes;

inputFields.forEach((input) => {
    input.setAttribute('size',input.getAttribute('placeholder').length);
});

btn.onclick = () => {
    if(!inputFields[0].value || !inputFields[1].value || !inputFields[2].value){
        alert("You have to fill all three inputs");
    }
    else{
        checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach((checkbox) => {
            if(checkbox.checked === true){
                checkbox.setAttribute('checked', 'checked');
            }
            if(checkbox.checked === false){
                checkbox.removeAttribute('checked');
            }
        })
        booksList.innerHTML += `<li>
                                    <input type="checkbox" class="checkbox">
                                    <label>DONE</label>
                                    <h3>${inputFields[0].value}</h3>
                                    <h5>
                                        <span>Author:</span> 
                                        <a href="#" title="Go to the author">${inputFields[1].value}</a>
                                    </h5>
                                    <figure>
                                        <a href="#" title="Read the book">
                                            <img src="${inputFields[2].value}" alt="Book Cover">
                                        </a>
                                    </figure>
                                    
                                </li>`
        checkboxes = document.querySelectorAll('.checkbox');
        inputFields.forEach((inputField) => {
            inputField.value = "";
        });
    }
}