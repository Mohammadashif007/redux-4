import {
    useAddAccountsMutation,
    useDeleteAccountsMutation,
    useGetAccountsQuery,
    useUpdateAccountsMutation,
} from "../../redux/api/adminSlice";

const Admin = () => {
    const { data, error, isLoading, pending } = useGetAccountsQuery();
    const [addAccount] = useAddAccountsMutation();
    const [deleteAccount] = useDeleteAccountsMutation();
    const [updateAccount] = useUpdateAccountsMutation();
    return (
        <div className="border-2 border-gray-100 flex flex-col gap-2 items-center p-10">
            <p>Admin Component</p>
            {data &&
                data.map((account, idx) => (
                    <p key={idx}>
                        {account.id}: {account.amount}{" "}
                        <button
                            onClick={() => deleteAccount(account.id)}
                            className="bg-orange-500 p-2 rounded-sm"
                        >
                            Delete Account
                        </button>
                        <button
                            onClick={() => updateAccount({id:account.id, amount: 999})}
                            className="bg-orange-500 p-2 rounded-sm"
                        >
                            Update Account
                        </button>
                    </p>
                ))}
            <button
                onClick={() => addAccount(201, data.length + 1)}
                className="bg-orange-500 p-2 rounded-sm"
            >
                Add Account
            </button>
            <button
                onClick={() => deleteAccount("adb7")}
                className="bg-orange-500 p-2 rounded-sm"
            >
                Delete Account
            </button>
            {/* <button
                onClick={() => updateAccount(account.id, 9898)}
                className="bg-orange-500 p-2 rounded-sm"
            >
                update Account
            </button> */}
        </div>
    );
};

export default Admin;
