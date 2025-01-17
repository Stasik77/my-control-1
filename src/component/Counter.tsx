import React from 'react';
import Button from './Button';


const Counter = () => {


    let [num, setNum] = React.useState(0);


    const isNumberNon = num <= 0
    const isNumberMax = num >= 500






    const onClickHandler = () => {
        setNum(++num );
    }

    const onClickResetHandler = () => {
        setNum(0);
    }

    const onClickx2Handler = () => {
        setNum(num=num*2);
    }

    return (
        <div className="App-header">
            <div className={'App'}>
                <div className="counter_title">
                    <h1 className={num === 5 ? 'num_isDon' : 'num'}>{num}</h1>
                </div>
                <div className="block_bnt">
                    <Button
                        title={'inc'} callBack={onClickHandler}
                        isDisabled={isNumberMax}
                    ></Button>
                    <Button
                        title={'reset'}
                        callBack={onClickResetHandler}
                        isDisabled={isNumberNon}
                    ></Button>    <Button
                        title={'x2'}
                        callBack={onClickx2Handler}
                        isDisabled={isNumberNon}
                    ></Button>

                </div>
            </div>
        </div>
    );
};

export default Counter;