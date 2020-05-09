import React from 'react'

const CardPost = (props) => {

    return (
        <div className="post">
            <div className="img-thumb">
                <img src="https://placeimg.com/200/150/tech" alt=""/>
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                <button onClick={() => props.update(props.data)}>update</button>
                <button onClick={() => props.remove(props.data.id)}>remove</button>
            </div>
        </div>
    );
}

export default CardPost;