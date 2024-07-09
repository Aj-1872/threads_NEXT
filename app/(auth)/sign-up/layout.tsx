

import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Roboto } from "next/font/google";


interface propType {
    children : React.ReactNode;
}

export const metadata = {
    title: "threads",
    discription : "creating threads using NEXT 13"
}

const inter = Inter({ subsets: ["latin"], weight :"100" });



export default function ReactLayout ({children} : propType){

    return (
        <ClerkProvider>

           <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
            
           </html>

        </ClerkProvider>
    )

}

