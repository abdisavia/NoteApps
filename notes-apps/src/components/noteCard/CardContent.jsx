export default function CardContent({title,content, url}){
    const gotoNote = () => {
        window.location.href = url
    }

    return(
        <div className="flex-col p-3 absolute top-0" onClick={gotoNote}> 
            <h1 className="w-[90px] font-bold text-xl mb-3 text-cyan-dark line-clamp-1 overflow-x-auto max-w-[90px]">{title}</h1>
            <p className="w-full text-sm max-w-[126px] overflow-hidden max-h-[135px] h-[135px] font-light break-words">{content}</p>
        </div>
    )
}