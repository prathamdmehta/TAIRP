let btns = document.querySelectorAll(".bottom_header_content button");
let status_area = document.querySelector(".status_area");
let calls_area = document.querySelector(".call_area");
let contact_list = document.querySelector(".contact_list");
let community_area = document.querySelector(".community_area");
let chatBtns = document.querySelector(".chatBtns");
let status_btns = document.querySelector(".status_btns");
let callBtns = document.querySelector(".callBtns");
let profile_Section_chat = document.querySelector(".profile_Section_chat");
let chat_contact_area = document.querySelector(".chat_contact_area");
let userContactList = document.querySelectorAll('.userContactList li');
let contact_chat_area = document.querySelector('.contact_chat_area');
let profile_contact = document.querySelector(".profile_contact");
let profile_contact_img = document.querySelector(".profile_contact img");
let contact_name = document.querySelector(".contact_name h5");
btns.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    if (element.id === "status") {
      status_area.style.left = "0";
      contact_list.style.left = "-100%";
      calls_area.style.left = "100%";
      community_area.style.left = "-100%";
      element.classList.add("active");
      chatBtns.style.display = "none";
      status_btns.style.display = "block";
      callBtns.style.display = "none";
    } else if (element.id === "chats") {
      status_area.style.left = "100%";
      contact_list.style.left = "0%";
      calls_area.style.left = "100%";
      community_area.style.left = "-100%";
      element.classList.add("active");
      chatBtns.style.display = "block";
      status_btns.style.display = "none";
      callBtns.style.display = "none";
    } else if (element.id === "calls") {
      calls_area.style.left = "0";
      status_area.style.left = "-100%";
      contact_list.style.left = "-100%";
      community_area.style.left = "-100%";
      element.classList.add("active");
      chatBtns.style.display = "none";
      status_btns.style.display = "none";
      callBtns.style.display = "block";
    } else {
      calls_area.style.left = "100%";
      status_area.style.left = "100%";
      contact_list.style.left = "100%";
      community_area.style.left = "0";
      element.classList.add("active");
      chatBtns.style.display = "none";
      status_btns.style.display = "none";
      callBtns.style.display = "none";
    }
  });
});

userContactList.forEach((element, index) =>{
  element.setAttribute('id', `contact_btn${index}`);
  element.addEventListener('click', () =>{
    if(element.id === `contact_btn${index}`){
      contact_chat_area.style.display ="block";
    }
    profile_contact_img.src = element.firstElementChild.childNodes[1].src;
    contact_name.innerHTML = element.children[1].firstElementChild.innerHTML;
  })
});
profile_contact.addEventListener('click', () =>{
  contact_chat_area.style.display ="none";
})