var chess = []
let createArray = (input) =>{
    if (input === "black1"){
        let array = ["Black Rook", "Black Knight", "Black Bishop", "Black King", "Black Queen","Black Bishop","Black Knight", "Black Rook"]
        chess.push(array)
    }
    if (input === "black2"){
        let array = []
        for (let i = 0; i < 8; i++){
            array.push("Black Peon")
        }
        chess.push(array)
    }
    if (input === ""){

        for(let i = 0; i < 4; i++){
            let array = []
            for(let j = 0; j < 8; j++){
            array.push("")
            }
            chess.push(array)
        }
    }
    if (input === "white1"){
        let array = ["White Rook", "White Knight", "White Bishop", "White King", "White Queen","White Bishop","White Knight", "White Rook"]
        chess.push(array)
    }
    if (input === "white2"){
        let array = []
        for (let i = 0; i < 8; i++){
            array.push("White Peon")
        }
        chess.push(array)
    }
}
createArray("black1")
createArray("black2")
createArray("")
createArray("white2")
createArray("white1")


console.log(chess[7][0])
