import React, {useEffect} from 'react';
import Button from './Button';


const Counter = () => {

    let [num, setNum] = React.useState(0);
    const isNumberNon = num <= 0
    const isNumberMax = num >= 5


    useEffect(() => {
        let valueString = localStorage.getItem('counterValue');
        if(valueString) {
            let newValue = JSON.parse(valueString);
            setNum(newValue);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("counterValue",JSON.stringify(num))
    },[num])

    const onClickHandler = () => {
        setNum(++num );
    }

    const onClickResetHandler = () => {
        setNum(0);
    }


    console.log('LocalStorage size:', JSON.stringify(localStorage).length);


    return (
        <div className="app-header">
            <div className='app'>
                <div className="counter_title">
                    <h1 className={num === 5 ? 'num_isDon' : 'num'}>{num}</h1>
                </div>
                <div className="block_bnt">
                    <Button
                        title={'inc'} callBack={onClickHandler}
                        isDisabled={isNumberMax}
                    />
                    <Button
                        title={'reset'}
                        callBack={onClickResetHandler}
                        isDisabled={isNumberNon}
                    />
                </div>
            </div>
        </div>
    );
};

export default Counter;