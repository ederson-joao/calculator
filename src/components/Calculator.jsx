import React, { useState } from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e){
        const input = e.target.value;
        if(num === 0){
            setNum(input);
        }else {
            setNum(num + input)
        }
    }

    function clear(){
        setNum(0);
    }

    function changeSign(){
        if (num > 0) {
            setNum(-num);
        }else {
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e){
        const operatorInput=e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate(){
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

    const buttons = [
        {
            className: 'topLine',
            onClick: clear,
            label: 'AC',
            value: ''
        },
        {
            className: 'topLine',
            onClick: changeSign,
            label: '+/-',
            value: ''
        },
        {
            className: 'topLine',
            onClick: operatorHandler,
            label: '%',
            value: '%'

        },
        {
            className: 'rightColumn',
            onClick: operatorHandler,
            label: '÷',
            value: '÷'

        },
        {
            className: 'coreElements',
            onClick: inputNum,
            label: 7,
            value: 7
        },
        {
            className: 'coreElements',
            onClick: inputNum,
            label: 8,
            value: 8
        },
        {
            className: 'coreElements',
            onClick: inputNum,
            label: 9,
            value: 9
        },
        {
            className: 'rightColumn',
            onClick: operatorHandler,
            label: '×',
            value: '×'
        },
        {
            className: 'coreElements',
            onClick: inputNum,
            label: 4,
            value: 4
        },
        {
            className: 'coreElements',
            onClick: inputNum,
            label: 5,
            value: 5
        },
        {
            className: 'coreElements',
            onClick: inputNum,
            label: 6,
            value: 6
        },
        {
            className: 'rightColumn',
            onClick: operatorHandler,
            label: '-',
            value: '-'
        },
        {
            className: 'coreElements',
            onClick: inputNum,
            label: 1,
            value: 1
        },
        {
            className: 'coreElements',
            onClick: inputNum,
            label: 2,
            value: 2
        },
        {
            className: 'coreElements',
            onClick: inputNum,
            label: 3,
            value: 3
        },
        {
            className: 'rightColumn',
            onClick: operatorHandler,
            label: '+',
            value: '+'
        },
        {
            className: 'zeroButton',
            onClick: inputNum,
            label: 0,
            value: 0
        },
        {
            className: 'coreElements',
            onClick: inputNum,
            label: ',',
            value: '.'
        },
        {
            className: 'rightColumn',
            onClick: calculate,
            label: '=',
            value: ''
        }
        
    ]

  return (
    <div>
        <Box m={5}/>
        <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={6}/>
                    <h1 className='result'>{num}</h1>
                    {buttons.map((button, index) => (
                        <button key={index} className={button.className} onClick={button.onClick} value={button.value}>{button.label}</button>
                    ))}
                </div>
        </Container>
    </div>
  )
}
