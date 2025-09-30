import { User } from "@/utils/api-manager"

function UserListBox(props: {users_to_list : User[]}) {
    const users: User[] = props.users_to_list
    console.log("Checks array type")
    console.log(Array.isArray(users))

    return (
    <>
        {users.map(user => <p>{user.username}</p>)}
    </>)
}
export default UserListBox

