import SearchBtn from "@/components/button/searchBtn"
import SearchInput from "@/components/input/searchInput"
export default function MyNotes() {
    return(
        <div className="flex justify-center items-center pt-2 gap-2">
            <SearchInput />
            <SearchBtn width="250" height="150"/>
        </div>
    )
}