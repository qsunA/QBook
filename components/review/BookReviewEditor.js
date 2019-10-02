import React, { useState, useEffect, useCallback } from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

const BookReviewEditor = ()=>{

    const [editorState, setEditorChange] = useState(EditorState.createEmpty());
    const handleKeyCommand = useCallback((command) => {
        const newState = RichUtils.handleKeyCommand(editorState,command);
        if(newState){
            setEditorChange(newState);
            return 'handled';
        }else{
            return 'not-handled';
        }
    },[]);

    return (
        <div>
            <Editor
                editorState={editorState}
                handleKeyCommand={handleKeyCommand}
                onChange={setEditorChange}
            />
            <style jsx>{`
                div{
                    border : 1px solid #ccc;
                    cursor : text;
                    min-Height : 300px;
                    width : 100%;
                    margin-top : 10px;
                    cusor : text;
                }
            `}</style>
        </div>
    );
}

export default BookReviewEditor;