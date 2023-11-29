import { UserDetail } from "@/app/(app)/user-detail";
import { getUser } from "@/app/(app)/users-data";
import { notFound } from "next/navigation";

export default function InterceptedRoute({params}: {params: {id: string;}}) {
    const user = getUser(parseInt(params.id,10));
    if(!user) notFound();

    return (
        <div className="absolute top-[50%] left-[50%] border py-3 px-2">
            Modal
            <div>
                <UserDetail user={user}/>
            </div>
        </div>
    );
}