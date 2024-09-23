window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 300)

    const logo = document.getElementById('header')

let scrollInit = 301;
    let scrollTop = this.window.scrollY;

    if(scrollTop > scrollInit) {
    header.classList.add('fixed');
    } else {
    header.classList.remove('fixed');
    }
})

