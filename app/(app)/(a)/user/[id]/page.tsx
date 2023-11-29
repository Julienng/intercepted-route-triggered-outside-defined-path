import { UserDetail } from "@/app/(app)/user-detail";
import { getUser } from "@/app/(app)/users-data";
import { notFound } from "next/navigation";

export default function UserDetailPage({params}: {params: {id: string}}) {
    const user = getUser(parseInt(params.id, 10));
    if(!user) notFound();

    return <UserDetail user={user}/>;
}