import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import React, { useCallback, useEffect, useState } from 'react';
import { io } from 'socket.io-client';


const TOOLBAR_OPTIONS = [
    [{header : [1,2,3,4,5,6, false]}],
    [{font : []}],
    [{list : "ordered"}, {list : "bullet"}],
    ["bold", "italic", "underline"],
    [{color : []}, {background: []}],
    [{script: "sub"}, {script: "super"}],
    [{align: []}],
    ["image", "blockquote", "code-block"],
    ["clean"]
]

const TextEditor = () => {

    const [socket, setSocket] = useState();
    const [quill, setQuill] = useState()

    useEffect(() => {
        const s = io("http://localhost:4000")
        setSocket(s)

        return () => {
            s.disconnect()
        }
    }, [])
    const wrapperRef =  useCallback((wrapper) => {
        if(wrapper == null) return
        wrapper.innerHTML = ''
        const editor = document.createElement("div")
        wrapper.append(editor)
        
        const q = new Quill(editor, {
            theme : "snow",
            modules : {toolbar : TOOLBAR_OPTIONS}
        })
        setQuill(q)
    }, [])

    return (
        <div className="container" ref={wrapperRef}>
        </div>
    );
};

export default TextEditor;