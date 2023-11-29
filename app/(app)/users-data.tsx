const users = [
    {id: 1, displayName: 'User 1'},
    {id: 2, displayName: 'User 2'},
    {id: 3, displayName: 'User 3'},
    {id: 4, displayName: 'User 4'},
    {id: 5, displayName: 'User 5'},
    {id: 6, displayName: 'User 6'},
    {id: 7, displayName: 'User 7'}
]


export function getUser(id:number) {
    return users.find(it => it.id === id)
}

export function getUsers() {
    return users;
}