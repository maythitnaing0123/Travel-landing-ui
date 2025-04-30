import {ReactNode } from 'react'

interface PageProps {
    children: ReactNode
}

export default function Page(props : PageProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}
