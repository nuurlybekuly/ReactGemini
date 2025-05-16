import { useState } from "react";

export function useCheck (props){
    const[value, setValue] = useState()
    const[alph, setAlph] = useState('')
    const[point, setPoint] = useState('')

    function checkGrade(){
        let val = parseInt(value)
        if(val>100){
            setAlph(alph => "Undefined")
            setPoint(point => "Undefined")
        }else if(val > 95){
            setAlph(alph => "A")
            setPoint(point => "4")
        }else if(val > 90){
            setAlph(alph => "A-")
            setPoint(point => "3.67")
        }else if(val > 85){
            setAlph(alph => "B+")
            setPoint(point => "3.33")
        }else if(val > 80){
            setAlph(alph => "B")
            setPoint(point => "3")
        }else if(val > 75){
            setAlph(alph => "B-")
            setPoint(point => "2.67")
        }else if(val > 70){
            setAlph(alph => "C+")
            setPoint(point => "2.33")
        }else if(val > 65){
            setAlph(alph => "C")
            setPoint(point => "2")
        }
    }

    return {setValue , alph, point, checkGrade};
}