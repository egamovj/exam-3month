var coll = document.getElementsByClassName('faqs__button')
var i

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
        this.classList.toggle('active')
        var content = this.nextElementSibling
        if (content.style.display === 'block') {
            content.style.display = 'none'
        } else {
            content.style.display = 'block'
        }
    })
}

document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__burger').classList.toggle('active')
    document.querySelector('.sitenav').classList.toggle('active')
})