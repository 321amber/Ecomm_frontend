

export const Pagination = ({totalPost, postPerPage, setCurrentPage}) => {
    let pages:Array = [];

    for(let i=1; i<=Math.ceil(totalPost/postPerPage); i++){
        pages.push(i);
    }
  return (
    <div className="pagination-container">
        {
            pages.map((page,index)=>{
                return <button key={index} onClick={()=>setCurrentPage(page)}>{page}</button>
            })
        }
      
    </div>
  )
}

