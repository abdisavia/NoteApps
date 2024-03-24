import Image from "next/image"
export default function SearchInput({width, height}) {
    return (
        <input type="text" className={`rounded-l-full border-2 text-cyan-dark border-cyan-dark w-[250px] h-[36px] ps-5`} placeholder="Search your note"/>
    )
}