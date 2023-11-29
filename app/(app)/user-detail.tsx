
export function UserDetail({user}: {user: {id: number; displayName:string;}}) {
    return (
        <div>
            {user.displayName}
        </div>
    );
}