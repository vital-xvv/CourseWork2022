import React, {useState, useEffect} from 'react';

const Indicator = ({id, correct}) => {

    const [classColor, setClassColor] = useState('')

    useEffect(() => {
        if(correct[id] === 1){
            setClassColor("correct")
        }
        else if(correct[id] === 2){
            setClassColor("wrong")
        }
    }, [correct[id]])


    return (
        <div className={classColor} key={Math.floor(Math.random() * 10000)}>

        </div>
            
        
    );
};

export default Indicator;