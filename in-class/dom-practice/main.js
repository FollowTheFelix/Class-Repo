const titleEl = document.getElementById("title");
const pEl = document.querySelector("p.cool");
const aEl = document.querySelector("a");
const liEls = document.querySelectorAll("ul#comments>li");

console.log(liEls);

pEl.innerHTML = "Comments for <strong>Today</strong>";

titleEl.style.textAlign = "center";

titleEl.setAttribute("id", "bob");
console.log(titleEl.getAttribute("id"));
console.log(titleEl.hasAttribute("class"));

aEl.setAttribute("href", "https://www.google.com");

pEl.classList.replace("cool", "warm");

liEls.forEach(function (li) {
  li.style.color = "green";
  li.style.fontSize = "30px";
});
