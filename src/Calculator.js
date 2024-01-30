import {useState,useEffect} from "react";
import "./Calculator.css"
function Calculator(){
    // const [result, setResult] = useState(0);
    // const [number1, setNumber1] = useState("");
    // const [number2, setNumber2] = useState("");
    // const handleNumber1Change = (evt) => {
    //     setNumber1(evt.target.value);
    // }
    // const handleNumber2Change = (evt) => {
    //     setNumber2(evt.target.value);
    // }
    // const  sum = () => {
    //   setResult(parseInt(number1) + parseInt(number2));
    // }
    // const  sub = () => {
    //   setResult(parseInt(number1) - parseInt(number2));
    // }
    // const  mul = () => {
    //   setResult(parseInt(number1) * parseInt(number2));
    // }
    // const  div = () => {
    //     setResult(parseInt(number1) / parseInt(number2));
    // }
    // useEffect(() => {
    //     setNumber1('');
    //     setNumber2('');
    // }, [result]);
    // return (
    //     <div>
    //         <h1>Simple Calculator</h1>
    //         <div>
    //             <label>
    //                 Number 1:
    //                 <input type="number" value={number1} onChange={handleNumber1Change} />
    //             </label>
    //         </div>
    //         <div>
    //             <label>
    //                 Number 2:
    //                 <input type="number" value={number2} onChange={handleNumber2Change} />
    //             </label>
    //         </div>
    //         <div>
    //             <button onClick={sum}>Add</button>
    //             <button onClick={sub}>Subtract</button>
    //             <button onClick={mul}>Subtract</button>
    //             <button onClick={div}>Subtract</button>
    //         </div>
    //         <div>
    //             <h2>Result: {result}</h2>
    //         </div>
    //     </div>
    // )
    const [display, setDisplay] = useState( 0); // Hiển thị trên màn hình của máy tính
    const [currentValue, setCurrentValue] = useState(''); // Giá trị hiện tại khi nhập số
    const [operator, setOperator] = useState(''); // Phép toán hiện tại
    const [previousValue, setPreviousValue] = useState(''); // Giá trị trước đó

    const handleButtonClick = (value) => {
        if (value === 'C') {
            // Nút Clear
            clearDisplay();
        } else if (value === '=') {
            // Nút Equal
            calculateResult();
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Nút Phép toán
            handleOperator(value);
        } else {
            // Nút Số
            handleNumber(value);
        }
    };

    const clearDisplay = () => {
        setDisplay( 0);
        setCurrentValue('');
        setOperator('');
        setPreviousValue('');
    };

    const handleOperator = (op) => {
        if (currentValue && previousValue && operator) {
            calculateResult();
        }
        setOperator(op);
        setPreviousValue(currentValue);
        setCurrentValue('');
    };

    const handleNumber = (num) => {
        setCurrentValue((prevValue) => prevValue + num);
        setDisplay((prevDisplay) => prevDisplay + num);
    };

    const calculateResult = () => {
        const num1 = parseFloat(previousValue);
        const num2 = parseFloat(currentValue);

        if (!isNaN(num1) && !isNaN(num2)) {
            let result;
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    break;
            }
            setDisplay(result.toString());
            setCurrentValue(result.toString());
            setOperator('');
            setPreviousValue('');
        }
    };

    return (
        <div className="calculator">
            {/*<div className="display">{currentValue}</div>*/}
            <input
                type="text"
                className="display"
                value={currentValue || ''} // Nếu không có giá trị, giữ nguyên giá trị là chuỗi trống
                readOnly
            />
            <div className="buttons">
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('/')}>/</button>

                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('*')}>*</button>

                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('-')}>-</button>

                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button onClick={() => handleButtonClick('=')}>=</button>
                <button onClick={() => handleButtonClick('+')}>+</button>

                <button onClick={() => handleButtonClick('C')}>C</button>
            </div>
        </div>
    );
}
export default Calculator;