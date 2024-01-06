let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            playerText.innerHTML = `${currentPlayer} has won!`
            let winning_blocks = playerHasWon()

            winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
            return
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

restartBtn.addEventListener('click', restart)

function restart() {
    spaces.fill(null)

    boxes.forEach( box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    playerText.innerHTML = 'Tic Tac Toe'

    currentPlayer = X_TEXT
}

startGame()




// playerText: يتم استخدامه للوصول إلى عنصر HTML بواسطة معرف العنصر 'playerText'.
// restartBtn: يتم استخدامه للوصول إلى عنصر HTML بواسطة معرف العنصر 'restartBtn'.
// boxes: يتم استخدامه لتخزين مجموعة من صناديق اللعبة، حيث يتم الحصول عليها بواسطة الكلاس 'box'.
// الحصول على قيمة الكتل الفائزة:

// winnerIndicator: يتم استخدامه للحصول على قيمة الخاصية المخصصة '--winning-blocks' من العنصر body في CSS.
// تعيين الثوابت:

// O_TEXT: يتم تعيين قيمة "O" للثابت الذي يمثل اللاعب O.
// X_TEXT: يتم تعيين قيمة "X" للثابت الذي يمثل اللاعب X.
// تعيين المتغيرات الأخرى:

// currentPlayer: يتم تعيينه بقيمة اللاعب الحالي، والتي تبدأ بقيمة X_TEXT.
// spaces: يتم تعيينه بمصفوفة مكونة من 9 عناصر تحتوي على القيم الحالية للمربعات.
// الدالة startGame():

// تقوم بإضافة حدث النقر (click event) إلى كل مربع في اللعبة باستخدام forEach() وaddEventListener().
// الدالة boxClicked(e):

// تقوم بتحديد المربع الذي تم النقر عليه باستخدام e.target.id.
// إذا كان المربع فارغًا (لا توجد قيمة في spaces[id])، يتم تعيين قيمة اللاعب الحالي في المربع وتحديث النص الظاهر فيه.
// إذا فاز اللاعب الحالي باستخدام playerHasWon()، يتم عرض رسالة الفوز وتلوين المربعات الفائزة باستخدام winnerIndicator.
// يتم تبديل اللاعب الحالي بين X_TEXT و O_TEXT.
// المصفوفة winningCombos:

// تحتوي على جميع القواعد الممكنة للفوز في لعبة Tic Tac Toe.
// الدالة playerHasWon():

// تقوم بفحص جميع القواعد الممكنة للفوز والتحقق مما إذا كان هناك لاعب فاز.
// إذا وجد لاعب فاز، يتم إرجاع مصفوفة تحتوي على مؤشرات المربعات الفائزة.
// إذا لم يفز أي لاعب، يتم إرجاع قيمة false.
// الدالة restart():

// تقوم بإعادة تعيالمتغيرات والعناصر والأحداث في الحالة الأولى يتم تحديدها في البداية. بعدها تتم إضافة حدث النقر (click event) إلى كل صندوق في اللعبة باستخدام الدالة startGame().
// عند النقر على صندوق، يتم استدعاء الدالة boxClicked(e) وتمريرها الحدث (event) كمعامل. تقوم الدالة بتحديد الصندوق الذي تم النقر عليه باستخدام e.target.id. إذا كان الصندوق غير محجوز (لا يحتوي على قيمة في spaces[id])، يتم تعيين قيمة اللاعب الحالي في مصفوفة spaces وتحديث نص الصندوق بقيمة اللاعب الحالي.

// ثم يتم استدعاء الدالة playerHasWon() للتحقق مما إذا كان اللاعب الحالي فاز. إذا كانت هناك فائز، يتم عرض رسالة الفوز في عنصر playerText وتلوين صناديق الفوز بلون محدد باستخدام winnerIndicator. إذا لم يكن هناك فائز، يتم تبديل اللاعب الحالي بين X_TEXT و O_TEXT.

// هناك مصفوفة winningCombos تحتوي على جميع النماذج الممكنة للفوز في اللعبة. تستخدم الدالة playerHasWon() هذه المصفوفة للتحقق من الفوز.

// يوجد أيضًا دالة restart() التي تقوم بإعادة تهيئة اللعبة عند النقر على زر الإعادة. تقوم الدالة بمسح المصفوفة spaces وإعادة تهيئة صناديق اللعبة وإعادة ضبط نص playerText وتعيين اللاعب الحالي للقيمة الافتراضية X_TEXT.

// أخيرًا، يتم استدعاء الدالة startGame() في النهاية لبدء اللعبة.