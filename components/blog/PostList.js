import React from 'react';

const PostItem = ()=>{
    return(
        <div>
            <h2><a>타이틀</a></h2>
            <div>2019-10-21</div>
            <p>content</p>
            <div>
                <a>#태그</a>
                <a>#태그</a>
                <a>#태그</a>
            </div>
        </div>
    )
}

export const PostList = ()=>{
    return(
        <div>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
    )
}