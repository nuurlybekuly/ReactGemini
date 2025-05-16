import { useCheck } from "./UseCheck";


export default function Grades(){
    
    const{setValue, alph, point,checkGrade} = useCheck() 

    return(
        <>
            <div>
                <label htmlFor="">Write Grade</label>
                <input onChange={(e) => setValue(e.target.value)} id="grade" type="number" placeholder="Write grade here"/>
            </div>
            <button onClick={checkGrade}>Check this Grade</button>

            <ul>
                <li>Alphabetic: {alph}</li>
                <li>In Points: {point}</li>
            </ul>
        </>
    );
}