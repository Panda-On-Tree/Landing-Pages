
var sec1 = document.getElementById('section1');    
var sec2 = document.getElementById('section2'); 
var sec3 = document.getElementById('section3');    
function Home(){
//sec2.style.order=1;
//contact.style.order= "-1";
sec2.style.display = "none";
sec3.style.display = "none";
sec1.style.display = "flex";
}
function About(){
   
//sec2.style.order= "-1";
sec1.style.display = "none";
sec3.style.display = "none";
sec2.style.display = "flex";

}   
function Contact() {

sec1.style.display = "none";
sec2.style.display = "none";
sec3.style.display = "flex";
}