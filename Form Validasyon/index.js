// checkValidity()
     // validity
     // validationMessage
// setCustomValidity()     
// reportValidity()
// elements

function formElementValidate(formElement) {
    if(!formElement.checkValidity()) {


        formElement.closest('li').classList.add('error')


        if (formElement.nextElementSibling?.className !== 'error-msg') {
            const error = document.createElement('small')
            error.className = 'error-msg'
            error.innerText = formElement.validationMessage
            formElement.insertAdjacentElement('afterend', error)
        } else {
            formElement.nextElementSibling.innerText = formElement.validationMessage
        }



    } else {
        formElement.closest('li').classList.remove('error')
        if (formElement.nextElementSibling?.className =='error-msg'){
            formElement.nextElementSibling.remove()
        }
    }
}

HTMLElement.prototype.validate = function() {
    [...this.elements].forEach(formElement => formElementValidate(formElement)) 
        
    }


const form1 = document.getElementById('form1');

[...form1.elements].forEach(formElement => {
    ['change', 'keyup'].forEach(method =>{
        formElement.addEventListener(method,() => {
            formElementValidate(formElement)
        })
    })
})

form1.addEventListener('submit', function(e){
    e.preventDefault();

    // tüm elemanları kontrol et
    this.validate()
 
    if (this.checkValidity()) {
        console.log('tüm form elemanları geçerli')
    }

});