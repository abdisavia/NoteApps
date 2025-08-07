import Image from "next/image"
export default function SearchBtn({width, height}) {
    return (
        <button className={`rounded-r-full bg-cyan-dark px-3 py-2`}>
            <Image src="/img/searchIcon.svg" width={20} height={20}/>
        </button>
    )
}