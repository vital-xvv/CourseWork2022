import React, {useState, useEffect} from 'react';

const Option = ({content, id, rightAnswer, setOptionsClasses, setScore, score, enable, setCompletedAnswers, completedAnswers, indexOfQuestion}) => {

    const [classes, setClasses] = useState(["option"]);
    
    useEffect(() => {
        setClasses(classes.filter(el => el !== "wrong" &&  el !== "correct"))
        setOptionsClasses(["options"])
    }, [enable])

    useEffect(() => {
        if(id === rightAnswer && completedAnswers[indexOfQuestion] !== 0)
        setClasses([...classes, "correct"])
        console.log("hey")
    }, [completedAnswers])
    
    const checkAnswer = () => {
        if(id === rightAnswer) {
            setClasses([...classes, "correct"])
            setScore(score + 1)
            let arr = [...completedAnswers]
            arr[indexOfQuestion] = 1;
            setCompletedAnswers([...arr])
        
        }
        if((id !== rightAnswer)){
            setClasses([...classes, "wrong"])
            let arr = [...completedAnswers]
            arr[indexOfQuestion] = 2;
            setCompletedAnswers([...arr])
        }
        setOptionsClasses(["options", "disabled"]);
    }


    return (
        <div 
            data-id={id}  
            onClick={() => checkAnswer()} 
            className={classes.join(" ")}
            key={Math.floor(Math.random()*10000)}
            >
                {content}
        </div>
    );
};

export default Option;