const openbutton = document.querySelector(".open");
const popupuverlay = document.querySelector(".popupoverlay");
const popupubox = document.querySelector(".popupbox");

openbutton.addEventListener("click", () => {
  popupuverlay.style.display = "block";
  popupubox.style.display = "block";
});

const cancelbtn = document.getElementById("cancel");

cancelbtn.addEventListener("click", (e) => {
  e.preventDefault();
  popupuverlay.style.display = "none";
  popupubox.style.display = "none";
});

const addbtn = document.getElementById("add");
const bookname = document.getElementById("bookname");
const authorname = document.getElementById("authorname");
const descrption = document.getElementById("desrcpition");
const box = document.querySelector(".box");

addbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    bookname.value == "" ||
    authorname.value == "" ||
    descrption.value == ""
  ) {
    alert("please enter the input field");
  } else {
    let div = document.createElement("div");
    div.setAttribute("class", "boxcontent");
    box.append(div);
    div.innerHTML = `<h2>${bookname.value}</h2>
                <h3>${authorname.value}</h3>
                <p>${descrption.value}</p>
                <button  onclick='deltebtn(event)'>DELTE</button>`;

    bookname.value = "";
    authorname.value = "";
    descrption.value = "";

    popupuverlay.style.display = "none";
    popupubox.style.display = "none";
  }
});

function deltebtn(e) {
  e.target.parentElement.remove();
}
