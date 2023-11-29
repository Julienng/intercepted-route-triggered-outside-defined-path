import { ReactNode } from "react";

export default function AppLayout({children}: {children: ReactNode}) {
    return (
        <div>
            app-layout
            <div>
                {children}
            </div>
        </div>
    )
}