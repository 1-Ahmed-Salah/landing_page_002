
// Change main color from local storage :)
const mainColor = localStorage.getItem('main-color');
const colors = document.querySelectorAll('.setting-box .color-box ul li');

// check if there a color in the local storage, if there will get the value thuis color :)
// and add & remove class active on colors at setting box :) 
if( mainColor !== null ) {
    document.documentElement.style.setProperty('--main-color', mainColor);
    colors.forEach(ele => {
        ele.classList.remove('active');
        if( ele.dataset.color == mainColor ) ele.classList.add('active');

    })
}

// add class active on the menu to open
const iconMenu  = document.querySelector('.icon-menu') ,
      closeIcon = document.querySelector('.close-menu'),
      links     = document.querySelector('.links')     ;
iconMenu.addEventListener('click', _ => {
    links.classList.add('active')
})

// remove class active on the menu to hide
closeIcon.addEventListener('click', _ => {
    links.classList.remove('active')
})

// add class active on the button go up

const goUp = document.querySelector('.go-up');

window.addEventListener('scroll', _ => {
    if(scrollY >= 800) {
        goUp.classList.add('active');
    } else {
        goUp.classList.remove('active');
    }
})

goUp.addEventListener('click', _ => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})


// Function for add and remove a class :)
const showAndHide = ( actionElement, targetElement ) => {
    const firstElement  = document.querySelector(actionElement),
          secondElement = document.querySelector(targetElement);
    if(firstElement && secondElement) {
        firstElement.addEventListener('click', _ => {
            secondElement.classList.toggle('active');
        });
    }
}

// Show and hide setting box
showAndHide('.setting-box .icon', '.setting-box');

// add class animat on icon
document.querySelector('.setting-box .icon').addEventListener('click', _ => {
    document.querySelector('.icon-setting').classList.toggle('bx-tada');
})

// Change images on home section
const images = ['home-img.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];

setInterval( _ => {
    let randomNumber = Math.floor(Math.random() * images.length);
    document.querySelector('.home').style.cssText = `
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(assets/images/${images[randomNumber]});
        background-size: cover;
        background-attachment: fixed;
    `;
}, 10000 );

// Change the main color :)
colors.forEach( ele => {
    ele.addEventListener('click', event => {
        document.documentElement.style.setProperty('--main-color', event.target.dataset.color)
        event.target.parentElement.querySelectorAll('.setting-box .color-box ul li').forEach(ele => {
            ele.classList.remove('active');
        })
        event.target.classList.add('active');
        localStorage.setItem('main-color', event.target.dataset.color);
    })
})

// Add type writer effect on p, this p at the section home :)
const textTypeWriter = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo nam animi, illum voluptatum quae corrupti.';
let countWriter      = 0;
window.onload = function() {
    const typeWriter = setInterval( _ => {
        document.querySelector('.type-writer').innerHTML += textTypeWriter[countWriter];
        countWriter++;
        if( countWriter >= textTypeWriter.length ) clearInterval(typeWriter);
    }, 100)
}


// action and animate on skills section :)
const skillsSection     = document.querySelector('.skills'),
      skillsBox         = document.querySelectorAll('.skills .content-skills .box-skill .skill-progress span'),
      skillsOffsetTop   = skillsSection.offsetTop;

window.addEventListener('scroll', _ => {
    if( window.scrollY > skillsOffsetTop - 500) {
        skillsBox.forEach((el) => {
            el.style.width = el.dataset.progress;
        })
    } else {
        skillsBox.forEach((el) => {
            el.style.width = 0;
        })
    }
})

// Create popup with the image

const ourGalary = document.querySelectorAll('.galary img');

ourGalary.forEach(img => {
    img.addEventListener('click', event => {
        // create overlay element
        const overlay = document.createElement('div');
        overlay.className = 'popup-overlay';
        document.body.appendChild(overlay)

        // create the popup
        const popupBox = document.createElement('div');
        popupBox.className = 'popup-box';

        // create the image for popup
        const popupImg = document.createElement('img');
        popupImg.src = img.src;
        // add the image to the popup box
        popupBox.appendChild(popupImg);

        // add the popup for overlay

        overlay.appendChild(popupBox);

        // crrate title for the img
        if(img.alt !== null) {
            const imgHeading  = document.createElement('h3'),
                  textHeading = document.createTextNode(img.alt);
            // add text for the heading
            imgHeading.appendChild(textHeading);

            popupBox.prepend(imgHeading);
        }

        // create close botton
        const closeBtn     = document.createElement('span'),
              closeBtnText = document.createTextNode('X');

        closeBtn.className = 'close-btn';
        closeBtn.appendChild(closeBtnText);
        
        // add close btn to popup box
        popupBox.appendChild(closeBtn);
    })
})

// close popup
document.addEventListener('click', (event)=> {
    if(event.target.className === 'close-btn') {
        document.querySelector('.popup-overlay').remove();
    }
})


