$(document).ready(function () {

    $(window).scroll(function() {
    if (this.scrollY > 20)
    {
        $('.navbar').addClass("sticky");
    }
    else
    {
        $('.navbar').removeClass("sticky");
    }

    if (this.scrollY > 300)
    {
        $('.scroll-up').addClass("show");
    }
    else
    {
        $('.scroll-up').removeClass("show");
    }

    if(window.screen.width > 947)
    {
        $('.navbar .menu').addClass("animation-left");

    }
    if(this.scrollY < 200)
    {
        $('.about .title').removeClass("animation-left").addClass("test2");
    }
    if(this.scrollY > 400)
    {
        $('.about .title').removeClass("test2").addClass("animation-left");
    }

    if(this.scrollY < 500)
    {
        $('.about img').removeClass("animation-left").addClass("test2");
        $('.about .text').removeClass("animation-top").addClass("test2");
        $('.about p').removeClass("animation-right").addClass("test2");

    }
    if(this.scrollY > 900)
    {
        $('.about img').removeClass("test2").addClass("animation-left");
        $('.about .text').removeClass("test2").addClass("animation-top");
        $('.about p').removeClass("test2").addClass("animation-right");
    }
    if(this.scrollY < 1300)
    {
        $('.services .title').removeClass("animation-left").addClass("test2");
        $('.services #card1').removeClass("animation-left").addClass("test2");
        $('.services #card2').removeClass("animation-top").addClass("test2");
        $('.services #card3').removeClass("animation-right").addClass("test2");
    }
    if(this.scrollY > 1300)
    {
        $('.services .title').removeClass("test2").addClass("animation-left");
    }
    if(this.scrollY > 1800)
    {
        $('.services #card1').removeClass("test2").addClass("animation-left");
        $('.services #card3').removeClass("test2").addClass("animation-right");
        $('.services #card2').removeClass("test2").addClass("animation-top");
    }
    if(this.scrollY < 2000)
    {
        $('.contact .title').removeClass("animation-left").addClass("test2");
        $('.contact #column_left').removeClass("animation-left").addClass("test2");
        $('.contact #column_right').removeClass("animation-right").addClass("test2");
    }
    if(this.scrollY > 2200)
    {
        $('.contact .title').removeClass("test2").addClass("animation-left");
    }
    if(this.scrollY > 2500)
    {
        $('.contact #column_left').removeClass("test2").addClass("animation-left");
        $('.contact #column_right').removeClass("test2").addClass("animation-right");
    }
    if(this.scrollY < 20)
    {


        document.getElementById('home2').style.color = "white";
        document.getElementById('home2').onmouseover = function (){
            this.style.color = "black";
        }
        document.getElementById('home2').onmouseleave = function(){
            this.style.color = "white";
        }

        document.getElementById('about2').style.color = "white";
        document.getElementById('about2').onmouseover = function (){
            this.style.color = "black";
        }
        document.getElementById('about2').onmouseleave = function(){
            this.style.color = "white";
        }
        document.getElementById('skills2').style.color = "white";
        document.getElementById('skills2').onmouseover = function (){
            this.style.color = "black";
        }
        document.getElementById('skills2').onmouseleave = function(){
            this.style.color = "white";
        }
        document.getElementById('contact2').style.color = "white";
        document.getElementById('contact2').onmouseover = function (){
            this.style.color = "black";
        }
        document.getElementById('contact2').onmouseleave = function(){
            this.style.color = "white";
        }
    }
    if(this.scrollY > 20 && this.scrollY < 900)
    {
        document.getElementById('home2').style.color = "lightseagreen";
        document.getElementById('about2').style.color = "white";
        document.getElementById('contact2').style.color = "white";
        document.getElementById('skills2').style.color = "white";

        document.getElementById('home2').onmouseover = function (){
            this.style.color = "lightseagreen";
        }
        document.getElementById('home2').onmouseleave = function(){
            this.style.color = "lightseagreen";
        }

        document.getElementById('about2').onmouseover = function (){
            this.style.color = "lightseagreen";
        }
        document.getElementById('about2').onmouseleave = function(){
            this.style.color = "white";
        }
        document.getElementById('skills2').onmouseover = function (){
            this.style.color = "lightseagreen";
        }
        document.getElementById('skills2').onmouseleave = function(){
            this.style.color = "white";
        }
        document.getElementById('contact2').onmouseover = function (){
            this.style.color = "lightseagreen";
        }
        document.getElementById('contact2').onmouseleave = function(){
            this.style.color = "white";
        }

    }
    if(this.scrollY > 900 && this.scrollY < 1700)
    {
        document.getElementById('home2').onmouseover = function (){
            this.style.color = "lightseagreen";
        }
        document.getElementById('home2').onmouseleave = function(){
            this.style.color = "white";
        }
        document.getElementById('contact2').onmouseover = function (){
            this.style.color = "lightseagreen";
        }
        document.getElementById('contact2').onmouseleave = function(){
            this.style.color = "white";

        }
        document.getElementById('about2').onmouseover = function (){
            this.style.color = "lightseagreen";
        }
        document.getElementById('about2').onmouseleave = function(){
            this.style.color = "lightseagreen";
        }
        document.getElementById('home2').style.color = "white";
        document.getElementById('skills2').style.color = "white";
        document.getElementById('about2').style.color = "lightseagreen";
    }
    if(this.scrollY > 1700 && this.scrollY < 2200)
    {

        document.getElementById('about2').onmouseleave = function(){
            this.style.color = "white";
        }
        document.getElementById('skills2').onmouseover = function (){
            this.style.color = "lightseagreen";
        }
        document.getElementById('skills2').onmouseleave = function(){
            this.style.color = "lightseagreen";
        }
        document.getElementById('about2').style.color = "white";
        document.getElementById('skills2').style.color = "white";
        document.getElementById('contact2').style.color = "white";
        document.getElementById('skills2').style.color = "lightseagreen";
    }
    if(this.scrollY > 2200)
    {
        document.getElementById('contact2').onmouseover = function (){
            this.style.color = "lightseagreen";
        }
        document.getElementById('contact2').onmouseleave = function(){
            this.style.color = "lightseagreen";
        }
        document.getElementById('skills2').onmouseover = function (){
            this.style.color = "lightseagreen";
        }
        document.getElementById('skills2').onmouseleave = function(){
            this.style.color = "white";
        }
        document.getElementById('home2').onmouseover = function (){
            this.style.color = "lightseagreen";
        }
        document.getElementById('home2').onmouseleave = function(){
            this.style.color = "white";
        }
        document.getElementById('about2').onmouseover = function (){
            this.style.color = "lightseagreen";
        }
        document.getElementById('about2').onmouseleave = function(){
            this.style.color = "white";
        }
        document.getElementById('skills2').style.color = "white";
        document.getElementById('contact2').style.color = "lightseagreen";
    }
    })
});

$('.scroll-up').click(function(){
    $('html').animate({scrollTop: 0});
});

$('.menu-btn').click(function()
{
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

$('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior", "smooth");
});

$('.navbar a').click(function(){
    $('.menu-btn').click();
});

var items = [];
document.getElementById("myForm").addEventListener("submit",function(event){
   event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let dataInfo = {
        name: name,
        email: email,
        message: message,
    };
    items.push(dataInfo);
    localStorage.setItem("items",JSON.stringify(items));
    document.getElementById("myForm").reset();
    alert("Your message has been sent");

});
