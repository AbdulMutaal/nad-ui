import React, { useState, useEffect } from 'react';
import Header from './header/header';
import Styles from './text-editor.module.css';

export default function TextEditor() {
    const [ inputText, setInputText ] = useState('');
    const [ boldClicked, setBoldClicked ] = useState(false);

    //Handle Bold Click
    useEffect(() => {
        if(boldClicked) {
            setInputText(prevValue => prevValue+'<strong>');
        }
        else {
            setInputText(prevValue => prevValue+'</strong>');
        }
    }, [boldClicked])

    const onInputChange = (e) => {
        
        setInputText(prev => {
            if(prev.length === 0) {
                return '<p>'+e.target.value;
            }
            else {
                return prev+e.target.value
            }
        })
    }

    return(
        <form>
            <div className={Styles.TextEditor}>
                <div dangerouslySetInnerHTML={{__html: '<b>First</b> &middot; Second'}} />
                <div style={{width: "500px", height: "200px"}}>
                    <Header 
                        boldClicked={boldClicked} 
                        setBoldClicked={() => setBoldClicked(prev => !prev)} 
                    />
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{backgroundColor: "white", border: "none", color: "black", width:"auto"}} dangerouslySetInnerHTML={{__html: inputText}} />
                        <input
                            type="text" 
                            className={Styles.TextArea} 
                            onChange={onInputChange} 
                            value=""/>
                    </div>
                </div>                     
            </div>         
        </form>
    )
}