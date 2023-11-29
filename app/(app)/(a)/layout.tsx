import { ReactNode } from "react";

export default function ALayout({children}: {children: ReactNode}) {
    return (
        <div>
            a-layout
            <div>
                {children}
            </div>
        </div>
    )
}