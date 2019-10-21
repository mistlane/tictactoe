var player1Selections = []
var player2Selections = []
var currentPlayer = 0;




const player = (name, number, marker) => {

    return { name, number, marker};
};

const firstplayer = player("Joni", "1", "X")
const secondplayer = player("Poni", "2", "O")




const Gameboard = (() => {
    gameboard = []
    container = document.querySelector("#container")

    const handler = function(position) {
        
        if(isSpotFree(position)) {

            if(currentPlayer==0) {
                changeMark(position, firstplayer.marker, firstplayer.number)
                player1Selections.push(position)
             

                if(draw() == true && winner(player1Selections) ==false ) {
                    drawDraw()
                }
                
                if(winner(player1Selections)) {
                    winnerDiv = document.createElement("div")
                    name1 = firstplayer.name
                    name1 = name1.toUpperCase()
                    winnerDiv.textContent = "WINNER WINNER CHICKEN DINNER " + name1 + " WINS"
                    winnerDiv.setAttribute("id", "winnerDiv")
            
            
                    document.body.appendChild(winnerDiv)
            
                    document.getElementById("container").style.pointerEvents = "none";

                    
                }

            }
            else {
                changeMark(position, secondplayer.marker, secondplayer.number)
                player2Selections.push(position)
                
                if(winner(player2Selections)) {
                    winnerDiv = document.createElement("div")
                    name2 = secondplayer.name
                    name2 = name2.toUpperCase()
                    winnerDiv.textContent = "WINNER WINNER CHICKEN DINNER " + name2 + " WINS"
                    winnerDiv.setAttribute("id", "winnerDiv")
            
            
                    document.body.appendChild(winnerDiv)
            
                    document.getElementById("container").style.pointerEvents = "none";
        
                }

                if(draw() && winner(player2Selections==false)) {
                    drawDraw()
                }
                 
            }


            if(currentPlayer == 0) {
                currentPlayer = 1
            }
            else {
                currentPlayer = 0
            }
        }
    }

    const isSpotFree = (position) => {
        if(gameboard[position] === "") {
            validation = true
        }

        else {
            validation = false
        }

        return validation
    }



    function changeMark(position, marker, player) {
        
        const box = document.getElementById("div"+position)
        
        box.textContent = marker
        gameboard[position] = marker
        draw()
        
    }

    const winner = (ar) => {
   
        if(   ch(ar, 0, 1, 2) || ch(ar, 3, 4, 5) || ch(ar, 6, 7, 8) || ch(ar, 0, 3, 6) || ch(ar, 1, 4, 7) || ch(ar, 2, 5, 8) || ch(ar, 0, 4, 8) || ch(ar, 2, 4, 6)) {

            winnerFound = true
        }

        else {
            winnerFound = false
        }

        return winnerFound
    }


    const drawDraw = () => {
        drawDiv = document.createElement("div")
        drawDiv.textContent = "IT'S A DRAW"
        drawDiv.setAttribute("id", "winnerDiv")


        document.body.appendChild(drawDiv)

        document.getElementById("container").style.pointerEvents = "none";

    }


    const checkDraw = (text) => {
        return text !== ""
    }

    const draw = () => {
        
        if(gameboard.every(checkDraw)) {
            drawIs = true
        }

        else {
            drawIs = false
        }

        return drawIs
    }
    


    const ch = (selection, a, b, c) => {
        if(selection.includes(parseInt(a))  && selection.includes(parseInt(b))  && selection.includes(parseInt(c))) {
            found = true
        }
        else {
            found = false
        }
        return found
    }
    

    for(i=0; i<9; i++) {
        gameboard.push("")
        const div = document.createElement("div")
        div.setAttribute("id", "div"+i)
        div.setAttribute("class", "box")
        div.textContent = gameboard[i]
        

        const position = i
        console.log(position)
       
        div.onclick = function() {handler(position)}

        container.appendChild(div)
    }
    

    const restart = () => {
    
        gameboard = []
        player1Selections = []
        player2Selections = []
      


        for(i=0; i<9; i++) {
            gameboard.push("")
           
            document.getElementById("div"+i).textContent = gameboard[i]

         
    
        }

        document.getElementById("winnerDiv").remove();
        currentplayer = 0
        document.getElementById("container").style.pointerEvents = "auto";
    }


    const NameDivs = () => {
        nameArray = []
        nameArray.push(firstplayer.name, secondplayer.name)

        markerArray = []
        markerArray.push(firstplayer.marker, secondplayer.marker)
        

        for(k=1; k<3; k++) {
            const namediv = document.createElement("div")
            namediv.setAttribute("id", "namediv"+k)
         
            const namedivname = document.createElement("p")
            namedivname.textContent = nameArray[k-1]

            const namedivmarker = document.createElement("p")
            namedivmarker.textContent = markerArray[k-1]


           
            namediv.appendChild(namedivname)
            namediv.appendChild(namedivmarker)
            document.body.appendChild(namediv)
        }
    }

    NameDivs()







   
    const buttondiv = document.createElement("div")
    buttondiv.setAttribute("class", "buttondiv")



    const removebutton = document.createElement("input")
    removebutton.setAttribute("type", "button")
    removebutton.setAttribute("class", "addbutton")
    
    removebutton.setAttribute("value", "Restart Game")

    removebutton.onclick = function() {restart()};



    buttondiv.appendChild(removebutton)
    document.body.appendChild(buttondiv)



    document.body.appendChild(container)

})();
  