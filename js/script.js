// Header functional

const ticketGuide = document.getElementById('tick')
const guideMenu = document.getElementById('guide-menu')
const dropdownArrow = document.querySelector('.arrows-move')
let openMenu = false


ticketGuide.addEventListener('click', () => {
    if(openMenu == false) {
        guideMenu.style.display = "flex"
        openMenu = true
        dropdownArrow.classList.add('active')
        dropdownArrow.classList.remove('notactive')
    } else {
        guideMenu.style.display = "none"
        openMenu = false
        dropdownArrow.classList.remove('active')
        dropdownArrow.classList.add('notactive')
    }
})



const converterDropdown = document.querySelector('.converter')
const select = document.querySelector('.select')
const menu = document.querySelector('.lang-menu')
const options = document.querySelectorAll('.lang-menu li')
const selected = document.querySelector('.selected')
const selectArrows = document.querySelector('.select-arrows')
let menuOpen = false
    
select.addEventListener('click', () => {
    if(menuOpen == false) {
        select.classList.toggle('select-clicked')
        menu.classList.toggle('menu-open')
        selectArrows.classList.add('active')
        selectArrows.classList.remove('notactive')
        menuOpen = true
    } else {
        selectArrows.classList.remove('active')
        selectArrows.classList.add('notactive')
        menu.classList.remove('menu-open')
        menuOpen = false
    }
})

options.forEach(option=> {
    option.addEventListener('click', () => {
        selected.innerHTML = option.textContent
        select.classList.remove('select-clicked')
        menu.classList.remove('menu-open')
        selectArrows.classList.remove('active')
        selectArrows.classList.add('notactive')
    
        options.forEach(option => {
            option.classList.remove('nowon')
        })
    
        option.classList.add('nowon')
    })
})



const userImage = document.getElementById('user-img')

function userIconHover() {
    userImage.addEventListener('mouseover', () => {
        userImage.src = "/img/blue.png"
    })
    
    userImage.addEventListener('mouseout', () => {
        userImage.src = "/img/userdark.png"
    })
}

userIconHover()


const newMenu = document.getElementById('lines')
const menuAfterResize = document.getElementById('menu-after-resize')
const menuList = document.getElementById('menu-list')
let newMenuOpen = false

newMenu.addEventListener('click', () => {
    if(newMenuOpen == false) {
        newMenu.classList.add('open')
        newMenuOpen = true
        menuAfterResize.style.width = "100%"
        menuList.style.display = "block"
        ticketList.style.display = "none"
        valueList.style.display = "none"
    } else {
        newMenu.classList.remove('open')
        newMenuOpen = false
        menuAfterResize.style.width = "0"
        menuList.style.display = "none"
        ticketList.style.display = "none"
        valueList.style.display = "none"
    }
})

const arrList = document.querySelector('.arr-list')
const arrList2 = document.querySelector('.arr-list2')
const ticketList = document.getElementById('ticket-list')
const addValute = document.getElementById('add-valute')
const valueList = document.getElementById('valute-list')
const backGBP = document.getElementById('gbp-back')

arrList.addEventListener('click', () => {
    menuList.style.display = "none"
    ticketList.style.display = "block"
}) 

arrList2.addEventListener('click', () => {
    menuList.style.display = "block"
    ticketList.style.display = "none"
}) 
   
addValute.addEventListener('click', () => {
    valueList.style.display = "block"
    ticketList.style.display = "none"
    menuList.style.display = "none"
})

backGBP.addEventListener('click', () => {
    valueList.style.display = "none"
    ticketList.style.display = "none"
    menuList.style.display = "block"
})
   

// Main functional

// Choose Ticket Section

const oneWay = document.getElementById('one-way')
const roundtrip = document.getElementById('roundtrip')
const onewayForm = document.querySelector('.one-way-form')
const roundtripForm = document.querySelector('.roundtrip-form')
const ticketLabels = document.querySelectorAll('.from-to label')
const switcLabel = document.querySelector('.switch')
const border = document.querySelector('.border')
const from = document.querySelector('.from'),
     fromBtn = from.querySelector('#location-from'),
     fromList = from.querySelector('.from-list'),
     optionsOfDestinations = from.querySelectorAll('.from-list li');

const to = document.querySelector('.to'),
      toBtn = to.querySelector('#destonation-to'),
      toList = to.querySelector('.to-list'), 
      optiondestination2 = to.querySelectorAll('.to-list li');



roundtrip.addEventListener('click', () => {
    onewayForm.style.display = "none"
    roundtripForm.style.display = "flex"
})

oneWay.addEventListener('click', () => {
    onewayForm.style.display = "flex"
    roundtripForm.style.display = "none"
})

from.addEventListener('click', () => {
    fromList.classList.toggle("active")

    if(fromBtn.value.length == 0) {
        fromBtn.value += `Type and select the station`
        fromBtn.style.color = "#9EA4BC"
    }
})

to.addEventListener('click', () => {
    toList.classList.toggle("active")
    
    if(toBtn.value.length == 0) {
        toBtn.value += `Type and select the station`
        toBtn.style.color = "#9EA4BC"
    }
})

optionsOfDestinations.forEach(option => {
    option.addEventListener('click', () => {
        let selectedOption = option.innerHTML
        fromBtn.value = selectedOption
        fromBtn.classList.add('colored')
    })
})

optiondestination2.forEach(option => {
    option.addEventListener('click', () => {
        let selectedOption2 = option.innerHTML
        toBtn.value = selectedOption2
        toBtn.classList.add('colored')
    })
    
})


switcLabel.addEventListener('click', () => {
    let temp;
    temp = fromBtn.value;
    fromBtn.value = toBtn.value;
    toBtn.value = temp
    
    if(toBtn.value != "" || fromBtn.value != "") {
        ticketLabels.forEach((obj) => {
            if(obj.classList.contains("empty")) {
                obj.classList.remove("empty")
            }else {
                obj.classList.add("empty")
            }
        })
    }
})

border.addEventListener('click', () => {
    border.focus()
})

const ticketLabels2 = document.querySelectorAll('.second-from-to label')
const switcLabel2 = document.querySelector('.switch-2')
const from2 = document.querySelector('.from2'),
     fromBtn2 = from2.querySelector('#location-from2'),
     fromList2 = from2.querySelector('.form-list-2'),
     optionsOfDestinations2 = from2.querySelectorAll('.form-list-2 li');

const to2 = document.querySelector('.to2'),
      toBtn2 = to2.querySelector('#destination-to'),
      toList2 = to2.querySelector('.to-list-2'), 
      optiondestination3 = to2.querySelectorAll('.to-list-2 li');

      from2.addEventListener('click', () => {
        fromList2.classList.toggle("active2")
    
        if(fromBtn2.value.length == 0) {
            fromBtn2.value += `Type and select the station`
            fromBtn2.style.color = "#9EA4BC"
        }
    })
    
    to2.addEventListener('click', () => {
        toList2.classList.toggle("active2")
        
        if(toBtn2.value.length == 0) {
            toBtn2.value += `Type and select the station`
            toBtn2.style.color = "#9EA4BC"
        }
    })
    
    
    optionsOfDestinations2.forEach(option => {
        option.addEventListener('click', () => {
            let selectedOption = option.innerHTML
            fromBtn2.value = selectedOption
            fromBtn2.classList.add('colored')
        })
    })
    
    optiondestination3.forEach(option => {
        option.addEventListener('click', () => {
            let selectedOption2 = option.innerHTML
            toBtn2.value = selectedOption2
            toBtn2.classList.add('colored')
        })
        
    })
    
    
    switcLabel2.addEventListener('click', () => {
        let temp;
        temp = fromBtn2.value;
        fromBtn2.value = toBtn2.value;
        toBtn2.value = temp
        
        if(toBtn2.value != "" || fromBtn2.value != "") {
            ticketLabels2.forEach((obj) => {
                if(obj.classList.contains("empty")) {
                    obj.classList.remove("empty")
                }else {
                    obj.classList.add("empty")
                }
            })
        }
    })   
    
    
    // Popular Destination

const boxDiv = document.querySelectorAll('.box')
const dots = document.querySelector('.dots')

Array.from(boxDiv).forEach((box, id) => {
    dots.innerHTML += `
        <div class="dot"></div>
    `
})

const pages = document.getElementsByClassName('dot')

Array.from(pages).forEach((dot, idx) => {
    dot.addEventListener("click", () => {
 
        id = idx
        dot.style.backgroundColor = "blue"
   
    })
})


// Tourists Section

const touristsSlider = document.querySelector(".t-slider")
const sliderQuote = document.getElementById("quotation")
const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right")
const dotsT = document.querySelector(".t-dots")

const sliderTexts = [
    {
        name: "Helene Lloyd",
        country: "United Kingdom (UK)",
        comment: "The booking system is a bit over complicated with all sorts of abbreviations that you cannot understand, but it is not too challenging to book, would be nice to have a small fare reduction for children under 16 or 14 years."
    },
    {
        name: "KK",
        country: "India",
        comment: "Online booking was very easy and convenient. But faced difficulty when tried to use credit cards as few credit cards are not working."
    },
    {
        name: "Peter Stevens",
        country: "United Kingdom (UK)",
        comment: "Very clear and straightforward. Very convenient to be able to book in advance from overseas beacuse the trains are very busy now."
    },
    {
        name: "Jammie",
        country: "Nigeria",
        comment: "Nothing in particular. It was raelly easy, as always. The convenience makes booking a train looked forward to."
    },
    {
        name: "Светлана Бормотова",
        country: "Russian Federation",
        comment: "Я всегда использую сайт russianrailways.com для покупки моих билетовю Мне очень нравится этот сайтю Покупки происходят быстро и без проблем."
    },
    {
        name: "George G.",
        country: "Russian Federation",
        comment: "Booking experience was just perfect. I regret to say that I don't have personal opinion about trip, as my mother in low travelled."
    }, 
    {
        name: "Maria V",
        country: "Russian Federation",
        comment: "Fast and very efficient. It was very easy to navigate throuh the web-site to find needed information to book the ticket. 10 STAR ration!!!!!!!"
    },
    {
        name: "Jason - Adelaide Australia",
        country: "Australia",
        comment: "I needed to change my return ticket. My online requiest was processed promptly, and efficiently, with no problems."
    }
]

let id = 0;

function slideShow(id, direction) {
    const item = sliderTexts[id]
    sliderQuote.innerHTML = `
    <p id="author-comment">${item.comment}</p>
    <div class="author-info">
        <p id="author-name">${item.name}</p>
        <p id="author-origin">${item.country}</p>
    </div>`

    if (direction === 'prev') {
        touristsSlider.classList.remove('slide-animate-next')
        touristsSlider.classList.add('slide-animate-prev')
    } else {
        touristsSlider.classList.remove('slide-animate-prev')
        touristsSlider.classList.add('slide-animate-next')
    }

    setTimeout(() => {
        touristsSlider.classList.remove('slide-animate-prev', 'slide-animate-next')
    },550)


    Array.from(slides).forEach((dot, idx) => {
        if (id == idx) {
            dot.classList.add('t-active')
        } else {
            dot.classList.remove('t-active')
        }
    })
}

arrowLeft.addEventListener('click', () => {
    if(id <= 0) {
        return
    } 
    id -= 1
    
    slideShow(id, 'prev')
})

arrowRight.addEventListener('click', () => {
    if (id >= sliderTexts.length - 1) {
        return
    } 
     id += 1

    slideShow(id, 'next')
})

Array.from(sliderTexts).forEach(slide => {
    dotsT.innerHTML += `
        <div class="t-dot "></div>
    `
})

const slides = document.getElementsByClassName('t-dot')

slides[0].classList.add('t-active');

Array.from(slides).forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        id = idx
        
        slideShow(id)
    })
})


// Faq functionality

const questionsContainer = document.querySelector('.quiestions-container')
const questionContent = document.querySelectorAll(".question-content")
const queAnswers = document.querySelectorAll(".answer") 


questionContent.forEach((question) => {
    const queBtn = question.querySelector(".que");
  
    queBtn.addEventListener('click', () => {
      const isActive = question.classList.contains('active');
      questionContent.forEach(subQue => {subQue.classList.remove('active')});

      if (!isActive) {
        question.classList.add('active');
      }
    })
  })