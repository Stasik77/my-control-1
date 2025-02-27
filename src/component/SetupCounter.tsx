import React from 'react';
import Button from './Button';






const SetupCounter = () => {


    // let [maxValue, setMaxValue] = React.useState(0);
    // const  newMaxVAlue = [newMaxVAlue,...maxValue]
    // setMaxValue(newMaxVAlue)
    //
    // let [startValue, setStartValue] = React.useState(0);


    // const isNumberMin = startValue >= 0 && maxValue === startValue


    const onClickSetupHandler = () => {

    }
    return (
        <div className="setup-header">
            <div className="set">
                <div className="setup-counter_title">
                    <div>
                        <span>Max Value: </span>
                        <input
                            type="number"
                            // onChange={event => setMaxValue(event.currentTarget.value)}


                        />
                    </div>
                    <div>
                        <span>start Value: </span>
                        <input type="number"
                               // value={setMaxValue}
                        />
                    </div>


                </div>
                <div className="block_bnt">
                    <Button
                        title={'set'} callBack={onClickSetupHandler}
                        // isDisabled={isNumberMin}
                    />
                </div>
            </div>
        </div>
    );
};

export default SetupCounter;