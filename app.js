const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden , .hidden-left, .hidden-right, .hidden-center, .hidden-center-1 , .hidden-center-2 , .hidden-center-3 , .hidden-center-4, .hidden-grow');
hiddenElements.forEach((el) => observer.observe(el));