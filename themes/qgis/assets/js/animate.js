const qgis_observer = new IntersectionObserver((entries) => {
    console.log("Animation observer");
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-show');
            entry.target.classList.remove('animation-hide-left');
            entry.target.classList.remove('animation-hide-right');
        } else {
            if (entry.target.classList.contains('animate-from-left'))
            {
                entry.target.classList.add('animation-hide-left');
            };
            if (entry.target.classList.contains('animate-from-right'))
            {
                entry.target.classList.add('animation-hide-right');
            };            
            entry.target.classList.remove('animation-show');
            
        }
    })
});
const animationElements = document.querySelectorAll('.animation-element');
animationElements.forEach((element) => qgis_observer.observe(element));


// This is the function for sliding elements into view 
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       console.log(entry)
       if (entry.isIntersecting){
           entry.target.classList.add('show');
       } else {
           entry.target.classList.remove('show')
       }
   
    });
   });  
const hiddenElements = document.querySelectorAll('.slide-element');
hiddenElements.forEach((el) => observer.observe(el));