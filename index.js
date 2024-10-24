// import "./styles.css";

// Menu data structure
const  menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//PART I
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

//PART II
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//PART III

for (let i = 0; i < menuLinks.length; i++) {
  const menu = document.createElement("a");
  menu.setAttribute("href", menuLinks[i].href);
  menu.innerHTML = menuLinks[i].text;
  topMenuEl.appendChild(menu);
}
console.log(menuLinks);

//DOM LAB PART II

//Creating Sub-menu
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//Adding menu and submenu interactions
const topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();

  // console.log("e.target ---> ", e.target.href);

  if ( e.target.tagName.toLowerCase() === "a" && e.target.href.includes('about') ) {
    alert('found about');
    return;
  }
  else {
    topMenuLinks.forEach((link) => {
        if (link.classList.contains ("active")){
            link.classList.remove("active");
            // subMenuEl.style.top = "100%";
            
        } 
        
        else{
            // subMenuEl.style.height = "100%";
            
            // subMenuEl.style.height = "0";
        }
        
    });

    e.target.classList.toggle("active");
    
  }
 
});



topMenuEl.addEventListener("click", function (ev) {
  ev.preventDefault();

//   console.log("ev.target ---> ", ev.target.href);

  if ( ev.target.tagName.toLowerCase() === "a" && ev.target.href.includes('about') ) {
    alert('found about');
    return;
  }
  else {
    menuLinks.forEach((item) => {
      if (item.subLinks) {
        subMenuEl.style.top = "100%";
      } 
      else if (subMenuEl.style.top = "100%") {

        topMenuEl.addEventListener("click",function(el){
          subMenuEl.style.top = "0"
        })
      }
      else if(subMenuEl.style.top = "0"){
        subMenuEl.style.top = "100%";
      }
       
    });
    
    
  }
 
});

const allSubLinks = [];

menuLinks.forEach(link => {
  if (link.subLinks) {
    allSubLinks.push(...link.subLinks);
  }
});


function buildSubMenu(allSubLinks,subMenuEl){
  subMenuEl.innerHTML = '';
  allSubLinks.forEach(obj =>{
    const linkObj = document.createElement("a")
    linkObj.setAttribute('href', obj.href);
    linkObj.textContent = obj.text;
    subMenuEl.appendChild(linkObj)

  })
}

buildSubMenu(allSubLinks, subMenuEl);

subMenuEl.addEventListener("click", function(evt){
  evt.preventDefault()
  if ( !evt.target.tagName.toLowerCase() === "a" ) {
//     // alert('found about');
    return;
  }
  else{
    subMenuEl.forEach((i) => {
      if(i.subLinks){
        subMenuEl.style.top = "0"
      }
      if (i.classList.contains ("active")){
        i.classList.remove("active");
    }
  })
}
})

subMenuEl.addEventListener("click", function(event){
  if(mainEl.innerHTML = "<h1>DOM Manipulation</h1>"){
    mainEl.innerHTML="<a>DOM Manipulation</a>"
  }
  
  if(event.target.tagName.toLowerCase() === "a" && event.target.href.includes('about')){
    event.target.href.includes('about').innerHTML = "<h1>About</h1>"
  }
})


