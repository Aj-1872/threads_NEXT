import { UserButton } from "@clerk/nextjs";


export default function Home(){
  return(
    <div>
      <UserButton afterSignOutUrl="/"/>
      <h1>hello</h1>
    </div>
  )
}