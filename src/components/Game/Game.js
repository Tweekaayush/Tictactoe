import React, {useState, useCallback, useRef} from 'react'
import "./Game.css"
import ReactCanvasConfetti from "react-canvas-confetti";
import ResetBtn from '../Button/ResetBtn';

const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };

const Game = () => {

    const [gameArr, setGameArr] = useState(["","","","","","","","",""])
    const [win, setWin] = useState({
        box1:-1,
        box2:-1,
        box3:-1
    })
    const [flag, setFlag] = useState(true)
    const [finish, setFinish]  = useState(false)
    const [result, setResult] = useState("")
    const [count, setCount] = useState(9)


    function checkWon(ch){
        if(ch === "X"){
            setResult("Player 1 Wins!")
            setFinish(true)
            fire();
        }
        else {
            setResult("Player 2 Wins!")
            setFinish(true)
            fire();
        }
    }

    function handleClick(e){
        if(finish) return
        const ch = String(e.target.className);
        var l = ch.length;
        var idx = Number(ch.slice(l-1))-1;
        let newArr = [...gameArr]
        const curCount = count - 1

        if(gameArr[idx] !== "")
            return
        else{
            
            flag?newArr[idx] = "X":newArr[idx] = 'O';
            setGameArr(newArr)
            setFlag(!flag)
            setCount(count-1)
        }

        if(newArr[0] === newArr[1] && newArr[0] === newArr[2] && newArr[0] !== ""){
            checkWon(newArr[0])
            setWin({
                box1:0,
                box2:1,
                box3:2
            })
        }
        else if(newArr[0] === newArr[3] && newArr[0] === newArr[6] && newArr[0] !== "" ){
            checkWon(gameArr[0])
            setWin({
                box1:0,
                box2:3,
                box3:6
            })
        }
        else if(newArr[0] === newArr[4] && newArr[0] === newArr[8] && newArr[0] !== "" ){
            checkWon(newArr[0])
            setWin({
                box1:0,
                box2:4,
                box3:8
            })
        }
        else if(newArr[1] === newArr[4] && newArr[1] === newArr[7] && newArr[1] !== "" ){
            checkWon(newArr[1])
            setWin({
                box1:1,
                box2:4,
                box3:7
            })
        }
        else if(newArr[2] === newArr[5] && newArr[2] === newArr[8] && newArr[2] !== "" ){
            checkWon(newArr[2])
            setWin({
                box1:2,
                box2:5,
                box3:8
            })
        }
        else if(newArr[2] === newArr[4] && newArr[2] === newArr[6] && newArr[2] !== "" ){
            checkWon(newArr[2])
            setWin({
                box1:2,
                box2:4,
                box3:6
            })
        }
        else if(newArr[3] === newArr[4] && newArr[3] === newArr[5] && newArr[3] !== "" ){
            checkWon(newArr[3])
            setWin({
                box1:3,
                box2:4,
                box3:5
            })
        }
        else if(newArr[6] === newArr[7] && newArr[6] === newArr[8] && newArr[6] !== "" ){
            checkWon(newArr[0])
            setWin({
                box1:6,
                box2:7,
                box3:8
            })
        }
        else if(curCount === 0){
            setResult("It's a Draw!")
            setFinish(true)
        }

    }


    function handleReset(){
        setGameArr(["","","","","","","","",""])
        setFlag(true)
        setFinish(false)
        setResult("")
        setCount(9)
        setWin({
            box1:-1,
            box2:-1,
            box3:-1
        })
    }

    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance) => {
      refAnimationInstance.current = instance;
    }, []);
  
    const makeShot = useCallback((particleRatio, opts) => {
      refAnimationInstance.current &&
        refAnimationInstance.current({
          ...opts,
          origin: { y: 0.7 },
          particleCount: Math.floor(200 * particleRatio)
        });
    }, []);
  
    const fire = useCallback(() => {
      makeShot(0.25, {
        spread: 26,
        startVelocity: 55
      });
  
      makeShot(0.2, {
        spread: 60
      });
  
      makeShot(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
  
      makeShot(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
  
      makeShot(0.1, {
        spread: 120,
        startVelocity: 45
      });
    }, [makeShot]);

  return (
    <>
        <div className='game'>
            <div className='resultContainer'>
                <h1>{result}</h1>
            </div>
            <div className='gameContainer'>
                <div className={(finish && (win.box1 === 0 || win.box2 === 0 || win.box3 === 0))?"win box1":"box1"} onClick={handleClick}>
                    <p>{gameArr[0]}</p>
                </div>
                <div className={(finish && (win.box1 === 1 || win.box2 === 1 || win.box3 === 1))?"win box2":"box2"} onClick={handleClick}>
                    <p>{gameArr[1]}</p>
                </div>
                <div className={(finish && (win.box1 === 2 || win.box2 === 2 || win.box3 === 2))?"win box3":"box3"} onClick={handleClick}>
                    <p>{gameArr[2]}</p>
                </div>
                <div className={(finish && (win.box1 === 3 || win.box2 === 3 || win.box3 === 3))?"win box4":"box4"} onClick={handleClick}>
                    <p>{gameArr[3]}</p>
                </div>
                <div className={(finish && (win.box1 === 4 || win.box2 === 4 || win.box3 === 4))?"win box5":"box5"} onClick={handleClick}>
                    <p>{gameArr[4]}</p>
                </div>
                <div className={(finish && (win.box1 === 5 || win.box2 === 5 || win.box3 === 5))?"win box6":"box6"} onClick={handleClick}>
                    <p>{gameArr[5]}</p>
                </div>
                <div className={(finish && (win.box1 === 6 || win.box2 === 6 || win.box3 === 6))?"win box7":"box7"} onClick={handleClick}>
                    <p>{gameArr[6]}</p>
                </div>
                <div className={(finish && (win.box1 === 7 || win.box2 === 7 || win.box3 === 7))?"win box8":"box8"} onClick={handleClick}>
                    <p>{gameArr[7]}</p>
                </div>
                <div className={(finish && (win.box1 === 8 || win.box2 === 8 || win.box3 === 8))?"win box9":"box9"} onClick={handleClick}>
                    <p>{gameArr[8]}</p>
                </div>
            </div>
            <ResetBtn status={finish} handleReset={handleReset}/>
        </div>
        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  )
}

export default Game
