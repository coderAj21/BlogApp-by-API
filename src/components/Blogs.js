import { useContext } from "react";
import {AppContext} from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";


export default function Blogs(){
    const {posts,loading}=useContext(AppContext);
    return(
        <div className="w-11/12 max-w-[550px] m-auto h-full py-5 flex flex-col justify-center items-center gap-y-7 mt-[35px] mb-[40px]">
            {
                loading?
                (<div className="h-screen flex justify-center items-center"><Spinner/></div>)
                :(posts.length===0?
                    (<div>
                        <p>No post found</p>
                    </div>):
                    (
                        posts.map((post)=>{
                        return <Card post={post} id={post.id}/>
                    })
                    )
                )
            }

        </div>
    );
}