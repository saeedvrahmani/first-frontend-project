var menu = document.querySelector(".menu");
var type_lang = document.querySelector(".type_lang");
var right_warrper = document.querySelector(".right_warrper");
menu.addEventListener("click", function () {
  right_warrper.classList.toggle("active");
});
var left_warrper = document.querySelector(".left_warrper");
menu.addEventListener("click", function () {
  left_warrper.classList.toggle("active");
});
var li_element = document.querySelector(".left_warrper ul");
li_element.addEventListener("hover", function () {
  li_element.classList("active");
});
var navbar = document.querySelector("#navbar");
menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var chatrom = document.querySelector(".chatrom");
scrollToTopBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
  chatrom.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
const pay_money = document.querySelector(".pay_money");
pay_money.addEventListener("click", ()=> {
 pay_money.classList.toggle("active");
 pay_money.classList.remove('active')
});

const btn1 = document.querySelector(".btn1");
const selected = document.querySelector(".selected");
const selectedImg = document.querySelector(".selectedImg");
const selectcredit = document.querySelector(".select-credit");
const options = document.querySelector(".options");
selectcredit.addEventListener("click", () => {
  options.classList.toggle("show");
});
options.addEventListener("click", (e) => {
  const img = e.target.querySelector(".btn1 img");
  const text = e.target.querySelector(".option-text");
  selectedImg.src = img.src;
  selected.innerHTML=text.innerHTML;
});
const selectbtn =document.querySelector('.select-btn')
selectcredit.addEventListener('click',()=>{
selectbtn.classList.toggle('active');
});

const reg_form = document.querySelector("#form-signup");
const login_form = document.querySelector("#form-login");

const reg_tab = document.querySelector('#sign-up');
const login_tab = document.querySelector('#login');

reg_tab.addEventListener('click',e=>{
    login_form.style.display = 'none';
    reg_form.style.display = 'block';
    reg_tab.classList.add('active');
    login_tab.classList.remove('active')
})
login_tab.addEventListener('click',e=>{
    reg_form.style.display = 'none';
    login_form.style.display = 'block';
    reg_tab.classList.remove('active');
    login_tab.classList.add('active')
});

$(".forget-password").click(function(){
  $(".resetpassword").show();
});
$(".canselreset").click(function(){
  $(".resetpassword").hide(500);
});
$(".xmark i").click(function(){
  $(".modal").hide(500);
});
$("#vip").click(function(){
  $(".modal").show(500);
});
$("#vip2").click(function(){
  $(".modal").show(500);
});