
let mainColor = localStorage.getItem("option_color");

if (mainColor !== null) {
    
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("option_color"));
}


// Start Setting Box 

document.querySelector(".toggle-setting .icon").onclick = function() {

    this.classList.toggle("fa-spin")

document.querySelector(".setting-box").classList.toggle("open");
}


const colorList = document.querySelectorAll(".color-list li");

colorList.forEach(li => {

    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        document.querySelectorAll(".color-list li").forEach(element => {

            element.classList.remove("active")

            if (element.dataset.color === mainColor) {
                element.classList.add("active")
            }
        })

        localStorage.setItem("option_color", e.target.dataset.color)

        // e.target.parentElement.querySelectorAll(".active").forEach(element => {

        //     element.classList.remove("active")
        // })

        // e.target.classList.add("active");

        handleActive(e)
    });
});

const radoumBack = document.querySelectorAll(".reandom-background span");

radoumBack.forEach(span => {

    span.addEventListener("click", (e) => {

        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active")
        })

        e.target.classList.add("active");

        if (e.target.dataset.background === 'push') {

            backgroundOption = true;

            localStorage.setItem("background_option", true);

            randmoizeImg();
        } else {

            clearInterval(backgroundInterval);

            localStorage.setItem("background_option", false);
        }
    });
});


// End Setting Box 


let landdingPage = document.querySelector(".landing-page");

let imgsArray = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

let backgroundOption = true;

let backgroundInterval;

let backgroundRanoum = localStorage.getItem("background_option")

if (backgroundRanoum !== null) {

    if (backgroundRanoum === 'true') {

        backgroundOption = true;
        
    } else {

        backgroundOption = false;
    }

    document.querySelectorAll(".reandom-background span").forEach(element => {

        element.classList.remove("active")
    });

    if (backgroundRanoum === 'true') {

        document.querySelector(".reandom-background .push").classList.add("active");

    } else {
        document.querySelector(".reandom-background .delete").classList.add("active")
    }
} 

function randmoizeImg() {

    if (backgroundOption === true) {

        backgroundInterval = setInterval(() => {
    
            let numberRAndoum = Math.floor(Math.random() *imgsArray.length);
        
            landdingPage.style.backgroundImage = 'url("imgs/' + imgsArray[numberRAndoum]+ '")'
        
        }, 1000);
    }
}

randmoizeImg();


let ourSkills = document.querySelector(".skills");

window.onscroll = function() {

let skillOffset = ourSkills.offsetTop;

let skillOuter = ourSkills.offsetHeight;

let windoHeight = this.innerHeight;

let windoSrollTop = this.scrollY;

if (windoSrollTop > (skillOffset + skillOuter - windoHeight)) {

    let allSkill = document.querySelectorAll(".skills-box .skill-progres span");

    allSkill.forEach(skill => {

        skill.style.width =  skill.dataset.progrees;
    })
};

};

let allGullary = document.querySelectorAll(".gullary img");

allGullary.forEach(img => {

    img.addEventListener('click', (e) => {

        let overLay = document.createElement("div");

        overLay.className = ("pop-overlay");

        document.body.appendChild(overLay);

        let popupBox = document.createElement("div");

        popupBox.className = ("popup-box");

        if (img.alt !== null) {

            let heading = document.createElement("h3");
        
            let imgText = document.createTextNode(img.alt)
        
            heading.appendChild(imgText);
        
            popupBox.appendChild(heading);
        
        
        };

        let popupImg = document.createElement("img");

        popupImg.src = img.src;

        popupBox.appendChild(popupImg);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");

        let closeText = document.createTextNode("X");

        closeButton.appendChild(closeText);

        closeButton.className = 'close-button';

        popupBox.appendChild(closeButton);
    });
});


document.addEventListener('click' , (e) => {

    if (e.target.className == 'close-button') {

        e.target.parentNode.remove();

        document.querySelector(".pop-overlay").remove();
    };
});


// const allBullet = document.querySelectorAll(".nav-bullet .bullet");

// allBullet.forEach(bullet => {

//     bullet.addEventListener("click", (e) => {

        // document.querySelector(e.target.dataset.scetion).scrollIntoView({

        //     behavior: 'smooth'
        // });

//     });

// });

const allBullet = document.querySelectorAll(".nav-bullet .bullet");

const allLinks = document.querySelectorAll(".links a");

function scrollAll(elements) {

    elements.forEach(ele => {

        ele.addEventListener('click', (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.scetion).scrollIntoView({

                behavior: 'smooth'

            });

        });

    });
}

scrollAll(allBullet);
scrollAll(allLinks);

function handleActive(ev) {
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active")
    })

    ev.target.classList.add("active");
}