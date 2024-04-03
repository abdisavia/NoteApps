import Link from "next/link";


export default function CategoriesButton({title,url}){
    return(
        <Link href={url} className="px-3 py-2 rounded-full bg-cyan-semidark text-white font-light text-center text-md">{title}</Link>
    );
}