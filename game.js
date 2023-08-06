let clickSound = document.getElementById('beep')
let gameStartSound = document.getElementById('gameStart')

let choiseItem = document.getElementsByClassName('choiseItem')
let gameContainer = document.querySelector('.gameContainer')
let normalContainer = document.querySelector('.normalContainer')
let menuContainer = document.querySelector('.menuContainer')
let gameStartContainer = document.querySelector('.gameStartContainer')

let startCount = 4
let resultWindow = document.querySelector('.resultWindow')
let closeResultWindow = document.querySelector('.closeResultWindow')
let resultInfo = document.querySelector('.resultInfo')

let backButton = document.querySelector('.backButton')
let backToMenuContainer = document.querySelector('.backToMenuContainer')

let resultCount

backButton.style.display = "none"


choiseItem[0].addEventListener("click", () => {
    clickSound.play()
    gameContainer.style.zIndex = "1"
    gameContainer.style.opacity = "1"
    menuContainer.style.zIndex = "0"
    menuContainer.style.opacity = "0"
    setTimeout(() => {
        gameStartSound.play()
    }, 800)

    let startCountInterval = setInterval(() => {
        startCount--
        // console.log(startCount);
        if (startCount > 0) {
            gameStartContainer.innerHTML = startCount
        } else {
            // console.log("START");
            gameStartContainer.innerHTML = "START"
            let gameStartInterval = setInterval(() => {
                gameStartContainer.style.width = "0"
                gameStartContainer.style.height = "0"
                gameStartContainer.style.overflow = "hidden"
                if (gameStartContainer.style.overflow == "hidden") {
                    backButton.style.display = "flex"
                } else {
                    // console.log("ELCIN");
                }
            }, 600)
            clearInterval(startCountInterval)
            setTimeout(() => {
                clearInterval(gameStartInterval)
            }, 700)
        }
    }, 1100);
    setTimeout(() => {
        clearInterval(startCountInterval)
    }, 4500)
})

choiseItem[1].addEventListener("click", () => {
    clickSound.play()
})

let sign = "X";
let presentCase = false;
let arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
let gameItemsNode = document.querySelectorAll('.gameItem')
let gameItems = Array.prototype.slice.call(gameItemsNode)
let choiseClassValue = 0
let choiseValue = ""
let countCross = 0
let countNormal = 0
let crossValue = ""

// console.log("sign " + sign);
// console.log("presentCase " + presentCase);
// console.log("arr " + arr);
// console.log(gameItems);
// console.log("choiseClassValue " + choiseClassValue);
// console.log("choiseValue " + choiseValue);
// console.log("countCross " + countCross);
// console.log("countNormal " + countNormal);
// console.log("crossValue " + crossValue);

// console.log(resultCount);

let resultLine = document.querySelector('.resultLine')
let itemsCount = 0

document.addEventListener('click', (e) => {
    if (e.target.classList.value.slice(0, 8) === "gameItem" && e.target.innerHTML == "") {
        presentCase = !presentCase
        e.target.innerHTML = sign


        for (i = 0; i < gameItems.length; i++) {
            if (e.target.classList.value.slice(9, 10) == i) {
                choiseClassValue = i
                choiseValue = e.target.innerHTML
            }
        }
        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                if (arr[i][j] == choiseClassValue) {
                    arr[i][j] = choiseValue
                }
            }
        }
        for (i = 0; i < gameItems.length; i++) {
            console.log(gameItems[i]);
            if (gameItems[i].innerHTML != "") {
                itemsCount++
            }
        }

        // console.log("arr " + arr);
        // console.log("choiseClassValue " + choiseClassValue);
        // console.log("choiseValue " + choiseValue);

        // console.log(arr);

        resultCount = 0
        let resultValue = ""

        for (i = 0; i < arr.length; i++) {
            for (j = 0; j < arr[i].length; j++) {
                //! ARRAYDA 9-LUQ QURMAQ UCUN
                if (
                    (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2])
                    || (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0])
                ) {
                    countCross++
                    crossValue = arr[1][1]
                }

                //! ---------------------- CARPAZ 3-LU ALINSA
                if (
                    (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2])
                ) {
                    resultLine.style.width = "642px"
                    resultLine.style.transform = "rotate(45deg)"
                    resultLine.style.top = "220px"
                    resultLine.style.left = "-85px"
                    resultLine.style.right = "auto"
                    resultLine.style.display = 'block'

                    if (arr[1][1] == "X") {
                        resultLine.style.backgroundColor = "green"
                    } else {
                        resultLine.style.backgroundColor = "red"
                    }
                    resultCount++
                    resultValue = arr[1][1]
                }
                if (
                    (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0])
                ) {
                    resultLine.style.width = "642px"
                    resultLine.style.transform = "rotate(-45deg)"
                    resultLine.style.top = "220px"
                    resultLine.style.left = "auto"
                    resultLine.style.right = "-88px"
                    resultLine.style.display = 'block'

                    if (arr[1][1] == "X") {
                        resultLine.style.backgroundColor = "green"
                    } else {
                        resultLine.style.backgroundColor = "red"
                    }
                    resultCount++
                    resultValue = arr[1][1]
                }

                //! ------------------------ CARPAZ SON ------------------------
                if (
                    (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0])
                    || (arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1])
                    || (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2])
                ) {
                    countNormal++
                }

                //! -------------------- YUXARIDAN ASAGI 3-LU ALINSA
                if (
                    (arr[0][0] == arr[1][0] && arr[1][0] == arr[2][0])
                ) {
                    resultLine.style.width = "40px"
                    resultLine.style.height = "452px"
                    resultLine.style.top = "10px"
                    resultLine.style.left = "55px"
                    resultLine.style.right = "auto"
                    resultLine.style.display = 'block'

                    if (arr[1][0] == "X") {
                        resultLine.style.backgroundColor = "green"
                    } else {
                        resultLine.style.backgroundColor = "red"
                    }
                    resultCount++
                    resultValue = arr[1][0]
                }
                if (
                    (arr[0][1] == arr[1][1] && arr[1][1] == arr[2][1])
                ) {
                    resultLine.style.width = "40px"
                    resultLine.style.height = "452px"
                    resultLine.style.top = "10px"
                    resultLine.style.left = "215px"
                    resultLine.style.right = "auto"
                    resultLine.style.display = 'block'

                    if (arr[1][1] == "X") {
                        resultLine.style.backgroundColor = "green"
                    } else {
                        resultLine.style.backgroundColor = "red"
                    }
                    resultCount++
                    resultValue = arr[1][1]
                }
                if (
                    (arr[0][2] == arr[1][2] && arr[1][2] == arr[2][2])
                ) {
                    resultLine.style.width = "40px"
                    resultLine.style.height = "452px"
                    resultLine.style.top = "10px"
                    resultLine.style.left = "375px"
                    resultLine.style.right = "auto"
                    resultLine.style.display = 'block'

                    if (arr[1][2] == "X") {
                        resultLine.style.backgroundColor = "green"
                    } else {
                        resultLine.style.backgroundColor = "red"
                    }
                    resultCount++
                    resultValue = arr[1][2]
                }

                //! ----------------------- SOLDAN SAGA 3-LU ALINSA
                if (
                    (arr[0][0] == arr[0][1] && arr[0][1] == arr[0][2])
                ) {
                    resultLine.style.width = "452px"
                    resultLine.style.height = "40px"
                    resultLine.style.top = "55px"
                    resultLine.style.left = "10px"
                    resultLine.style.right = "auto"
                    resultLine.style.display = 'block'

                    if (arr[0][1] == "X") {
                        resultLine.style.backgroundColor = "green"
                    } else {
                        resultLine.style.backgroundColor = "red"
                    }
                    resultCount++
                    resultValue = arr[0][1]
                }
                if (
                    (arr[1][0] == arr[1][1] && arr[1][1] == arr[1][2])
                ) {
                    resultLine.style.width = "452px"
                    resultLine.style.height = "40px"
                    resultLine.style.top = "215px"
                    resultLine.style.left = "10px"
                    resultLine.style.right = "auto"
                    resultLine.style.display = 'block'

                    if (arr[1][1] == "X") {
                        resultLine.style.backgroundColor = "green"
                    } else {
                        resultLine.style.backgroundColor = "red"
                    }
                    resultCount++
                    resultValue = arr[1][1]
                }
                if (
                    (arr[2][0] == arr[2][1] && arr[2][1] == arr[2][2])
                ) {
                    resultLine.style.width = "452px"
                    resultLine.style.height = "40px"
                    resultLine.style.top = "375px"
                    resultLine.style.left = "10px"
                    resultLine.style.right = "auto"
                    resultLine.style.display = 'block'

                    if (arr[2][1] == "X") {
                        resultLine.style.backgroundColor = "green"
                    } else {
                        resultLine.style.backgroundColor = "red"
                    }
                    resultCount++
                    resultValue = arr[2][1]
                }

                if (
                    (arr[0][0] != arr[0][1] && arr[0][1] != arr[0][2] && arr[0][0] != arr[0][2])
                    &&
                    (arr[1][0] != arr[1][1] && arr[1][1] != arr[1][2])
                    &&
                    (arr[2][0] != arr[2][1] && arr[2][1] != arr[2][2])
                    &&
                    (arr[0][0] != arr[1][0] && arr[1][0] != arr[2][0])
                    &&
                    (arr[0][1] != arr[1][1] && arr[1][1] != arr[2][1])
                    &&
                    (arr[0][2] != arr[1][2] && arr[1][2] != arr[2][2])
                    && itemsCount == 45
                ) {
                    resultCount = 1
                    console.log("ALINDI");
                } else {
                    console.log("===================");
                    console.log("resultCount " + resultCount);
                    console.log("itemsCount " + itemsCount);
                    console.log("ALINMADI");

                    console.log("arr[0][0] " + arr[0][0]);
                    console.log("arr[0][1] " + arr[0][1]);
                    console.log("arr[0][2] " + arr[0][2]);

                    console.log("arr[1][0] " + arr[1][0]);
                    console.log("arr[1][1] " + arr[1][1]);
                    console.log("arr[1][2] " + arr[1][2]);

                    console.log("arr[2][0] " + arr[2][0]);
                    console.log("arr[2][1] " + arr[2][1]);
                    console.log("arr[2][2] " + arr[2][2]);

                    console.log(arr[0][0] != arr[0][1] && arr[0][1] != arr[0][2]);
                    console.log(arr[1][0] != arr[1][1] && arr[1][1] != arr[1][2]);
                    console.log(arr[2][0] != arr[2][1] && arr[2][1] != arr[2][2]);
                    console.log(arr[0][0] != arr[1][0] && arr[1][0] != arr[2][0]);
                    console.log(arr[0][1] != arr[1][1] && arr[1][1] != arr[2][1]);
                    console.log(arr[0][2] != arr[1][2] && arr[1][2] != arr[2][2]);
                }
                // console.log("resultCount : " + resultCount);
                //! -----------------------
                // console.log(countCross);
            }
        }
        if (resultCount == 9 && resultCount == 18) {
            for (i = 0; i < gameItems.length; i++) {
                gameItems[i].disabled = true
            }

            if (resultValue == "X") {
                setTimeout(() => {
                    resultWindow.style.display = "flex"
                    resultInfo.innerHTML = "QAZANDINIZ!"
                    resultInfo.style.color = "green"
                }, 200)
            } else if (resultValue == "O") {
                setTimeout(() => {
                    resultWindow.style.display = "flex"
                    resultInfo.innerHTML = "UDUZDUNUZ!"
                    resultInfo.style.color = "red"
                }, 200)
            }
        }

        if (resultCount == 1) {
            resultWindow.style.display = "flex"
            resultInfo.innerHTML = "HEÇ HEÇƏ!"
            resultInfo.style.color = "yellow"
        }
    }
    presentCase ? sign = "X" : sign = "O"
})

let yesButton = document.querySelector('.yesButton')
let noButton = document.querySelector('.noButton')

backButton.addEventListener('click', function () {
    backToMenuContainer.style.display = "flex"
})

noButton.addEventListener('click', function () {
    backToMenuContainer.style.display = "none"
})

yesButton.addEventListener('click', function () {
    backToMenuContainer.style.display = "none"

    menuContainer.style.zIndex = "1"
    menuContainer.style.opacity = "1"

    gameContainer.style.zIndex = "0"
    gameContainer.style.opacity = "0"

    gameStartContainer.style.width = "470px"
    gameStartContainer.style.height = "480px"
    gameStartContainer.style.overflow = "visible"
    gameStartContainer.style.zIndex = "33"

    startCount = 4
    gameStartContainer.innerHTML = ""
    backButton.style.display = "none"
})

closeResultWindow.addEventListener('click', function () {
    gameItems.map(item => (
        item.innerHTML = ""
    ))

    gameItems.map(item => (
        item.disabled = false
    ))

    resultLine.style.display = "none"
    resultLine.style.width = "30px"
    resultLine.style.height = "30px"
    resultLine.style.top = "0"
    resultLine.style.left = "0"
    resultLine.style.right = "0"
    resultLine.style.transform = "rotate(0)"

    // resultLine.style.width = "642px"
    // resultLine.style.top = "220px"
    // resultLine.style.left = "-85px"
    // resultLine.style.right = "auto"
    // resultLine.style.display = 'block'

    resultWindow.style.display = "none"
    resultValue = ""
    resultCount = 0
    countCross = 0
    crossValue = ""
    sign = "O"
    presentCase = false
    arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

    // console.log("sign " + sign);
    // console.log("presentCase " + presentCase);
    // console.log("arr " + arr);
    // console.log(gameItems);
    // console.log("choiseClassValue " + choiseClassValue);
    // console.log("choiseValue " + choiseValue);
    // console.log("countCross " + countCross);
    // console.log("countNormal " + countNormal);
    // console.log("crossValue " + crossValue);
    // console.log("resultCount : " + resultCount);
})