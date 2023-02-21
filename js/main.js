let StarsNumber = [{},{},{},{},{}]


document.getElementById('5stars').innerHTML = StarsNumber.map(item =>
    `
    <div class="iconStar">
        <img src="./pic/star.svg" width="100%" height="100%" alt="star5">
    </div>
    `
    ).join('')

let data3OptionFiber = [
    {
        name:"build in minutes",
        deacription:"with a selection of premade templates, you can build out a portfolio in less than 10 minutes.",
        img:"./pic/time.svg",
        id:0
    },
    {
        name:"Add Custom CSS",
        deacription:"Customiza your personal portfolio even more with the ability to add your own custom Css styles.",
        img:"./pic/code.svg",
        id:1
    },
    {
        name:"Responsive",
        deacription:"All Fiber templates are fully responsive to ensure the experience is seemless across all devices.",
        img:"./pic/allSizes.svg",
        id:2
    }
]


document.getElementById('3OptionsFiberDetail').innerHTML = data3OptionFiber.map(item =>
    `
    <div class="w30w100MobileDesktop d-flex flex-column">
        <div class="icon3optionsFiber">
            <img src=${item.img} width="100%" height="100%" alt="time">
        </div>
        <p class="InterBold manualFontsize mt-2">${item.name}</p>
        <p class="InterLight manualFontsizeMini mt-2 textJustify">${item.deacription}</p>
    </div>
    `
    ).join('')


    
let dataPortfolio3profile = [
    {
        name:"Sarah Andrews",
        price:"100k",
        deacription:"Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracated a lot of clients and made me more than $100k.",
        img:"./pic/User Avatar.svg",
        id:0
    },
    {
        name:"Mathew higgins",
        price:"20k",
        deacription:"I have been getting A LOT of leads ever since I used Fibers premade templates, now i just need to work on my case studies and able ready to go!",
        img:"./pic/User Avatar 2.svg",
        id:1
    },
    {
        name:"Janice Dave",
        price:"30k",
        deacription:"I only just started freelancing this year, i have already made more than i ever in my full-time jub. The templates are so amazing.",
        img:"./pic/User Avatar 32.svg",
        id:2
    }
]



document.getElementById('Portfolio3profile').innerHTML = dataPortfolio3profile.map(item =>
    `
    <div class="card w30w100MobileDesktop   mt-2">
            <div class="card-body">
              <div class="d-flex flex-row">
                <div class="cardicon">
                    <img src="./pic/User Avatar 2.svg" width="100%" height="100%" alt="">
                  </div>
                  <div class="ms-3 ">
                    <p class="c_Purple InterBold ">Sarah Andrews</p>
                    <p>$100k in revenue</p>
                  </div>
              </div>

              <p class="mt-2 mb-2">Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracated a lot of clients and made me more than $100k.</p>
              <div class="card btnSolid flex-center c_Purple InterBold">
                view Sarah Portfolio
              </div>

            </div>
          </div>
    `
    ).join('')