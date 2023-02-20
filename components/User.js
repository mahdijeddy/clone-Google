import { useSession, signIn, signOut } from "next-auth/react";

function User() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                <img
                    onClick={signOut}
                    src={session.user.image}
                    className="h-10 w-10 cursor-pointer rounded-full hover:bg-gray-200"
                />
            </>
        );
    }
    return (
        <>
            <button
                className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:shadow-md hover:brightness-105"
                onClick={signIn}
            >
                Sign in
            </button>
        </>
    );
}

export default User;
