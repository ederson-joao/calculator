import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e){
        var input = e.target.value;
        if(num === 0){
            setNum(input);
        }else {
            setNum(num + input)
        }
    }

    function clear(e){
        setNum(0);
    }

    function changeSign() {
        if (num > 0) {
            setNum(-num);
        }else {
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e){
        var operatorInput=e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        switch (operator) {
            case "÷": 
                setNum (oldNum / num);
                break;
            case "×": 
                setNum (oldNum * num);
	            break;
            case "-": 
                setNum (oldNum - num);
                break;
            case "+": 
                setNum (parseFloat(oldNum) + parseFloat(num));
                break;
            case "%": 
                setNum ((oldNum / 100) * num);
                break;
            default: setNum (0);
                }
    }

  return (
    <div>
        <Box m={5}/>
        <Container maxWidth="xs">
            <div className="wrapper">
            <Box m={12}/>
                <h1 className='result'>{num}</h1>
                <button className='topLine' onClick={clear}>AC</button>
                <button className='topLine' onClick={changeSign}>+/-</button>
                <button className='topLine' onClick={operatorHandler} value={'%'}>%</button>
                <button className='rightColumn' onClick={operatorHandler} value={'÷'}>÷</button>
                <button className='coreElements' onClick={inputNum} value={7}>7</button>
                <button className='coreElements' onClick={inputNum} value={8}>8</button>
                <button className='coreElements' onClick={inputNum} value={9}>9</button>
                <button className='rightColumn' onClick={operatorHandler} value={'×'}>×</button>
                <button className='coreElements' onClick={inputNum} value={4}>4</button>
                <button className='coreElements' onClick={inputNum} value={5}>5</button>
                <button className='coreElements' onClick={inputNum} value={6}>6</button>
                <button className='rightColumn' onClick={operatorHandler} value={'-'}>-</button>
                <button className='coreElements' onClick={inputNum} value={1}>1</button>
                <button className='coreElements' onClick={inputNum} value={2}>2</button>
                <button className='coreElements' onClick={inputNum} value={3}>3</button>
                <button className='rightColumn' onClick={operatorHandler} value={'+'}>+</button>
                <button className='coreElements' id='zeroButton' onClick={inputNum} value={0}>0</button>
                <button className='coreElements' onClick={inputNum} value={"."}>,</button>
                <button className='rightColumn' onClick={calculate}>=</button>
            </div>
        </Container>
    </div>
  )
}
