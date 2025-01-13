
let slideImage = document.querySelector(".slide-image")

let dotsContainer = document.querySelector(".dots")
let img1 = "Assets/hero_1.jpg.webp";
let img2 = "Assets/img_1_long.jpg.webp";
let img3 = "Assets/traveller.jpg";
let img4 = "Assets/mountain-climbing.jpg";
let img5 = "Assets/slider-5.jpg.webp";
let img6 = "Assets/slider-6.jpg.webp";
let dotsGet = document.querySelectorAll(".dot")
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let hamburgerIcon = document.querySelector(".hamburger-icon")
let mainContent = document.getElementsByTagName("main")[0]
let navOptions = document.querySelector(".upper-portion-nav-options")
let closeIcon = document.querySelector(".close-icon");

hamburgerIcon.addEventListener("click", e => {
    mainContent.style.display = "none";
    navOptions.style.display = "block";
})

closeIcon.addEventListener("click", () => {
    mainContent.style.display = "block";
    navOptions.style.display = "none";

})




let imageslength = 6;
let srcS = [img1, img2, img3, img4, img5, img6]

function dotsCreate(param) {
    for (let i = 0; i < param; i++) {
        let divCreate = document.createElement("div")
        divCreate.classList.add("dot");
        dotsContainer.appendChild(divCreate)
    }
    dotsGet = document.querySelectorAll(".dot")
}


dotsCreate(imageslength)

let arrDots = Array.from(dotsGet)


function randomChange(v = 0) {
    let val = v;
    setInterval(() => {
        leftArrow.addEventListener("click", elem => {
            if (val > 0) {
                arrDots[val].classList.remove("select")
                val--;
                slideImage.src = srcS[val];
                arrDots[val].classList.add("select")

            }
            else {
                arrDots[val].classList.remove("select")
                val = 5;
                slideImage.src = srcS[val];
                arrDots[val].classList.add("select")
            }

        })
        rightArrow.addEventListener("click", elem => {
            if (val >= 5) {
                arrDots[val].classList.remove("select")
                val = 0;
                slideImage.src = srcS[val];
                arrDots[val].classList.add("select")
            }
            else {
                arrDots[val].classList.remove("select")
                val++;
                slideImage.src = srcS[val];
                arrDots[val].classList.add("select")
            }

        })
        arrDots.forEach((el, i) => {
            el.addEventListener("click", (e) => {
                arrDots[val].classList.remove("select")
                val = i;
                slideImage.src = srcS[val];
                arrDots[val].classList.add("select")
            })
        })
        if (val < 5) {
            arrDots[val].classList.remove("select")
            val++;
            slideImage.src = srcS[val];
            arrDots[val].classList.add("select")
        }
        else {
            arrDots[val].classList.remove("select")
            val = 0
            slideImage.src = srcS[val];
            arrDots[val].classList.add("select")
        }
    }, 3000)

}
randomChange()





