let turn = 'X';
let checkturn = () => {
    return turn === 'X' ? '0' : 'X';
}

let cells = document.getElementsByClassName('cell');
Array.from(cells).forEach(element => {
    element.addEventListener('click', () => {
        if (element.innerText === '') {
            element.innerText = turn;
            turn = checkturn();
            checkForwin();
        }
    })
})

//Check for Win
let checkForwin = () => {
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(element => {
        if ((cells[element[0]].innerText === cells[element[1]].innerText) && (cells[element[1]].innerText === cells[element[2]].innerText) && (cells[element[0]].innerText !== '')) {
            setTimeout(() => {
                respons('Congratulation!🎉', cells[element[1]].innerText, 'images/thumbs_up.gif');
                reset();
            }, 300);
            turn = 'X';
        } else {
            if ((cells[0].innerText !== '') && (cells[1].innerText !== '') && (cells[2].innerText !== '') && (cells[3].innerText !== '') && (cells[4].innerText !== '') && (cells[5].innerText !== '') && (cells[6].innerText !== '') && (cells[7].innerText !== '') && (cells[8].innerText !== '')) {
                setTimeout(() => {
                    respons('Game Draw!', 'No one', 'images/sad.gif');
                    reset()
                }, 200);
                turn = 'X';
            }
        }
    })
}

//win alert function
function respons(result, XorO, img) {
    Swal.fire({
        title: result,
        text: `${XorO} has won the game`,
        imageUrl: img,
        imageWidth: 300,
        imageHeight: 200,
    })
}

//Reset the Game
function reset() {
    Array.from(cells).forEach(element => {
        element.innerText = '';
    })
}