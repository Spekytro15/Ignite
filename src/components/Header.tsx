import { Logo } from "./Logo";


export function Header(){
    return(
       <>
       <header className="w-full py-2 flex items-center justify-center bg-neutral-800 border-b border-neutral-700">
        <Logo/>
        </header>
        </> 
    )
}