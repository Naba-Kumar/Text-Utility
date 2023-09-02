import React from 'react'
import { useState } from 'react'

export default function Textutils(props) {


    const [text, updatetext] = useState('');


 
    let count=0
    const wordcount = () => {
        let arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length !== 0) {

                count++;

            }
        }
    }


    let btntype= (props.mode.color === 'dark') ? 'secondary' : 'info'




    const handleuppr = () => {
        console.log("btn clked");
        let newtext = text.toUpperCase();
        updatetext(newtext)

    }

    const handllower = () => {
        console.log("btn clked");
        let newtext = text.toLowerCase();
        updatetext(newtext)

    }

    const handlespace = () => {
        let arr = text.split(" ");
        let newone = "";
        if (arr.length > 1) {

            for (let i = 0, j = 0; i < arr.length; i++) {
                if (arr[i].length !== 0) {

                    let a = arr[i];
                    newone += (j === 0 ? a : " " + a);
                    j++;
                }



            }
        }
        updatetext(newone);

    }


    const handleCptl = () => {
        let arr = text.split(" ");
        let newone = "";
        if (arr.length > 0) {

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].length !== 0) {


                    let a = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
                    newone += (i === 0 ? a : " " + a);
                } else {

                    newone += " ";
                }
            }
        }
        updatetext(newone);
    }

    const handlereset = () => {
        updatetext("")

    }

    const handleCpy = () => {
        let copy= document.getElementById("exampleFormControlTextarea1")
        copy.select()
        copy.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copy.value)

    }

    const handlechange = (event) => {
        updatetext(event.target.value);
    }

    return (
        <div >

            <h1 style={{ color: (props.mode.color === 'dark') ? 'white' : 'black' }}>Text Organizer</h1>
            <div className="mb-3" >

                <textarea  className="form-control mx-100" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handlechange} style={{ color: (props.mode.color === 'dark') ? 'white' : 'black', backgroundColor: (props.mode.color === 'dark') ? 'rgb(25 43 49)' : '#ebebeb'  }}> </textarea>

                <button className={`btn btn-${btntype} m-3`} type="submit" onClick={handleuppr}>UpperCase</button>
                <button className={`btn btn-${btntype} m-3`} type="submit" onClick={handllower}>LowerCase</button>

                <button type="button" my="3" className={`btn btn-${btntype} m-3`} onClick={handleCptl} >Capitalize</button>

                <button type="button" my="3" className={`btn btn-${btntype} m-3`} onClick={handlespace}>Romove Space</button>
                <button type="button" my="3" className={`btn btn-${btntype} m-3`} onClick={handleCpy} >Copy</button>
                <button type="button" my="3" className={`btn btn-${btntype} m-3`} onClick={handlereset} >Reset</button>
                <h2 style={{ color: (props.mode.color === 'dark') ? 'white' : 'black' }}>Information</h2>
                <p style={{ color: (props.mode.color === 'dark') ? 'white' : 'black' }} onChange={wordcount()}>Word Count : {count} </p>
                <p style={{ color: (props.mode.color === 'dark') ? 'white' : 'black' }} >Character Count : {text.length}</p>
                <p style={{ color: (props.mode.color === 'dark') ? 'white' : 'black' }} >Approx Time To Read : {(count*.5/60).toFixed(2)} Minutes</p>

                <h2 style={{ color: (props.mode.color === 'dark') ? 'white' : 'black' }}>Preview</h2>

                 <p style={{ color: (props.mode.color === 'dark') ? 'white' : 'black' }}>{text}</p>
            </div>

        </div>
    )
}

