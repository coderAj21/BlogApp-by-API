import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

// Step 1 create Context;
export const AppContext=createContext();

// step 2 provider
export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,SetPage]=useState(1);
    const [totalPage,setTotalPage]=useState(null);



    async function fetchBlogPost(page=1){
        setLoading(true); 
        let url=`${baseUrl}?page=${page}`;
        try{
            const result=await fetch(url);
            const data=await result.json();
            console.log(data);
            SetPage(data.page);
            setPosts(data.posts);
            setTotalPage(data.totalPages);

        }
        catch(error){
            console.log("Error in fetching data ...");
            SetPage(1);
            setPosts([]);
            setTotalPage(null);
        }
        setLoading(false);
    }

    function handlePageChanger(page){        
        SetPage(page);
        fetchBlogPost(page);
    }



// data Filling
    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        SetPage,
        totalPage,
        setTotalPage,
        fetchBlogPost,
        handlePageChanger
    };


//Step 3 Consumer or Sending the Data to components
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}