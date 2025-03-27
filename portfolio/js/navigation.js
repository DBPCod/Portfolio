let linkGT = document.getElementById("link-first");
let linkSkill = document.getElementById("link-skill");
let linkProjects = document.getElementById("link-projects");

const navLinks = document.querySelectorAll('[id^="link-"]');
console.log(navLinks);
function handleNavclick(ClickedLink)
{
    navLinks.forEach((link) => {
        link.style.opacity="0.4";
    });

    ClickedLink.style.opacity="1";
}

navLinks.forEach((clicked) => {
    clicked.addEventListener("click",()=>{
        console.log(clicked);
        handleNavclick(clicked);
    });
})