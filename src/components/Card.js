import React from "react";

const Card=(props)=>{
    const post=props.post;
    const id=props.id;
    return (
        <div key={id}>
            <p className="font-bold text-sm">{post.title}</p>
            <p className="text-[12px]">
                By <span className="italic ">{post.author}
                </span> on <span className="underline font-bold">{post.category}</span>
            </p>
            <p className="text-[12px] mt-[3px]">
                Posted on <span>{post.date}</span>
            </p>
            <p className="text-[12px] mt-[10px] mb-[5px]">{post.content}</p>
            <div className="flex gap-x-2">
                {
                    post.tags.map((tag,index)=>{
                        return <span key={index}
                         className="text-blue-700 font-bold underline text-[10px]">{`#${tag}`}</span>
                    })
                }
            </div>

        </div>
    )
};

export default Card;