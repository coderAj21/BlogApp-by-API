import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination (){

    const{page,handlePageChanger,totalPage}=useContext(AppContext);
    return (
        <div className="w-full border-2 fixed bottom-0 bg-white flex justify-center">
            <div className="flex justify-between w-11/12 max-w-[550px] py-1">
                <div className="flex gap-x-2">
                    { page>1 &&
                        <button className="rounded-md border-2 px-2 py-1" onClick={()=>(
                            handlePageChanger(page-1)
                        )}>
                            Previous
                        </button>
                    }
                    { page<totalPage && 
                        <button className="rounded-md border-2 px-2 py-1 text-sm" onClick={()=>(
                            handlePageChanger(page+1)
                        )}>Next</button>
                    }
                </div>
                <p className="font-bold text-sm py-2">
                    Page {page} of {totalPage}
                </p>
            </div>
        </div>
    );
}