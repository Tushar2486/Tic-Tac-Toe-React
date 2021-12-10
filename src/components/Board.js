import React from 'react'
import { useState,useEffect } from 'react'
import './Board.css';


function Board() {
    const [text, setText] = useState("");
    const [board, setBoard] = useState(["","","","","","","","",""]);
    const [player,setPlayer] = useState("O");

    useEffect(() => {
        if(isWinning() === true) {
            setPlayer(prev => "");
            alert(`Game is over : ${player} Won!`);
            restart();
            return;
        }
        if(checkDraw() === true) {
            setPlayer(prev => "");
            alert("Game Draw");
            restart();
            return;
        }
        else {
        setPlayer(player === "X"?"O":"X");
        }
      }, [board]);

    function isWinning() { 
        if(player !=="" && player===board[0] && board[0] === board[1] && board[1]===board[2]) {
        return true;
        }
        if(player !=="" && player===board[3] && board[3] === board[4] && board[4]===board[5]) {
            return true;
        }
        if(player !=="" && player===board[6] && board[6] === board[7] && board[7]===board[8]) {
            return true;
        }
        if(player !=="" && player===board[0] && board[0] === board[3] && board[3]===board[6]) {
            return true;
        }
        if(player !=="" && player===board[1] && board[1] === board[4] && board[4]===board[7]) {
            return true;
        }
        if(player !=="" && player===board[2] && board[2] === board[5] && board[5]===board[8]) {
            return true;
        }
        if(player !=="" && player===board[0] && board[0] === board[4] && board[4]===board[8]) {
            return true;
        }
        if(player !=="" && player===board[2] && board[2] === board[4] && board[4]===board[6]) {
            return true;
        }
        return false;
    }

    function checkDraw() {
        let filled = true;
        board.forEach((curr) => {
            if(curr === "") {
              filled = false;
            }
            if(filled)
            {
                setText("Game Draw");
            }
            else {
                text === ""?setText("Play Game"):setText(player === "X"?"O turn":"X turn");
            }
        }

        )
    }

    function restart() {
        setBoard(["","","","","","","","",""]);
        setPlayer("O");
        setText("");
    }

    function blockClick(index) {
        if(player === "" || board[index] !== "") {
            return;
        }
        if(board[index] === "") {
            let boardCopy = [...board];
            boardCopy[index] = player;
            setBoard(boardCopy);
        }
    }
    
    return (
        <>
            <div className="container">
            <div className="board">
            <div className="box" id="0" style={{borderLeft:"none",borderTop:"none"}} onClick = {() => {
                blockClick(0)
            }}>{board[0]}</div>
            <div className="box" id="1" style={{borderTop:"none"}} onClick = {() => {
                blockClick(1)
            }}>{board[1]}</div>
            <div className="box" id="2" style={{borderRight:"none",borderTop:"none"}} onClick = {() => {
                blockClick(2)
            }}>{board[2]}</div>
            <div className="box" id="3" style={{borderLeft:"none"}} onClick = {() => {
                blockClick(3)
            }}>{board[3]}</div>
            <div className="box" id="4" onClick = {() => {
                blockClick(4)
            }}>{board[4]}</div>
            <div className="box" id="5" style={{borderRight:"none"}} onClick = {() => {
                blockClick(5)
            }}>{board[5]}</div>
            <div className="box" id="6" style={{borderLeft:"none",borderBottom:"none"}} onClick = {() => {
                blockClick(6)
            }}>{board[6]}</div>
            <div className="box" id="7" style={{borderBottom:"none"}} onClick = {() => {
                blockClick(7)
            }}>{board[7]}</div>
            <div className="box" id="8" style={{borderRight:"none",borderBottom:"none"}} onClick = {() => {
                blockClick(8)
            }}>{board[8]}</div>
            </div>
            <h1 id="text">{isWinning()?`${player} Won!`:`${text}`}</h1>
	        <button id="restart" onClick={restart}>Restart</button>
            </div>
        </>
        
    )
}

export default Board
