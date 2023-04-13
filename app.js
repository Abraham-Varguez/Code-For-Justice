const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    })
});

let expanded = true;

const hiddenElements = document.querySelectorAll('.hidden , .hidden-left, .hidden-right, .hidden-center, .hidden-center-1 , .hidden-center-2 , .hidden-center-3 , .hidden-center-4, .hidden-grow');
hiddenElements.forEach((el) => observer.observe(el));

document.querySelector('.hamburger').addEventListener("click", myFunction);

function myFunction() {
    if (expanded){
        document.getElementById("ham-menu").style.display = "none";
        document.getElementById("iconOpen").style.display = "flex";
        document.getElementById("iconClosed").style.display = "none";
   
        expanded = false;
    }
    else{
        document.getElementById("ham-menu").style.display = "flex";
        document.getElementById("iconOpen").style.display = "none";
        document.getElementById("iconClosed").style.display = "flex";
        
        expanded = true;
    }
    
    
} 