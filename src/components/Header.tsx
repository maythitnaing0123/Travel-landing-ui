import { ReactNode } from "react";

interface HeaderProps {
    children : ReactNode
}

export default function Header(props : HeaderProps){
    return <header className="px-5 md:px-20 pt-4 pb-2">{props.children}</header>
}