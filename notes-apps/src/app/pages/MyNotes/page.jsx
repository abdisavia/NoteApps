import CategoriesButton from "@/components/CategoriesBtn"
import SearchBtn from "@/components/button/searchBtn"
import SearchInput from "@/components/input/searchInput"
import NoteCard from "@/components/noteCard"
export default function MyNotes() {
    const listCategories = ["To do list", "Business", "Collage", "Shopping"]
    const listNotes = [{
        title:"Testing",
        content:"testing1234567891011121314151617181920"
    },{
        title : "Testing2",
        content:"Testing2 123123412410924219084190284901024"
    }];

    return(
        <div className="mx-auto my-16 px-8 gap-2 h-full w-full ">
            <h1 className="text-center text-cyan-dark text-3xl font-bold">MyNotes</h1>
            <div className="flex justify-center items-center gap-2 py-5">
                <SearchInput />
                <SearchBtn width="250" height="150"/>
            </div>
            <h2 className="text-left text-xl font-regular text-cyan-dark">Categories</h2>
            <div className="mt-3 ps-3 w-full h-[50px] overflow-y-auto">
                <ul className="flex w-[600px] my-2 gap-2">
                    {listCategories.map((category)=> {
                        return(
                            <li className="">
                                <CategoriesButton title={category} url="/"/>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="mt-5">
                <div className="grid grid-cols-2 gap-2">
                    {listNotes.map((datNote) => {
                        return <NoteCard title={datNote.title} content={datNote.content}/>
                    })}
                </div>
            </div>
        </div>
    )
}