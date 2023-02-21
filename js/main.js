let StarsNumber = [{},{},{},{},{},]


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
        id:0
    },
    {
        name:"Responsive",
        deacription:"All Fiber templates are fully responsive to ensure the experience is seemless across all devices.",
        img:"./pic/allSizes.svg",
        id:0
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
