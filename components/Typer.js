import React, { useEffect, useState } from 'react'

export const Typer = (props) => {
    const array = props.array
    const [word,setWord] = useState('')
    const [c,setC] = useState(0)
    const [w,setW] = useState(0)    
    const [curr,setCurr] = useState(array[0])
    const [r,setR] = useState(curr.length-1)
    var i = 0
     
    //const curr = props.array[0].toString()
    var base = ''
    var new_word = []
    var newWord = []
    const type =(word)=> {
        c=0;
        
        while(c<word.length){
                        
            c++
            setTimeout(()=>{newWord.push(word.charAt(c));setWord(newWord.join(','))},500)
        }
    }
    useEffect(()=>{
        //console.log(curr)
        //console.log(`Length: ${curr.length}`)
        //console.log(`c: ${c}`)
        if(curr && c<curr.length){
            setTimeout(()=>{
                setWord(()=>word+curr.charAt(c))
                setC(c+1)
            },80)
        } else if (c==curr.length){
            setTimeout(()=>{
                setR(c)
            },1500)
        } 
    },[c])
    useEffect(()=>{
        setWord('')
        setCurr(array[w])        
        setC(0)      
    },[w])
    useEffect(()=>{
        if(c==curr.length){
            if(r>0){
                setTimeout(()=>{
                    setWord(()=>word.slice(0,-1))
                    setR(r-1)
                },20)
            } else{
                setTimeout(()=>{
                    if(w<array.length-1){
                        setW(w+1)
                    }else{
                        setW(0)
                    }
                },400)
            }
        }
    },[r])
    
    return (<div className='flex flex-row'>
    <div className='flex flex-col align-middle'>{props.children} {word}</div>
    
{/*     
        {word}<br/>
        <br/>{`c: `+c}
        <br/>{`w: `+w}
        <br/>{`curr: `+curr}
        <br/>{`curr.length: `+curr.length}
        <br/>{`array[w]: `+array[w]} */}
        {/* <br/>{`c: `+c}
        <br/>{`w: `+w}
        <br/>{`r: `+r}
        <br/>{`curr: `+curr}
        <br/>{`curr.length: `+curr.length} */}
    </div>)
}