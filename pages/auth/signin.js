import Header from "@/components/Header";
import { getProviders, signIn } from "next-auth/react";

function signin({ providers }) {
    return (
        <>
            <Header />
            <div className="mt-40">
                {Object.values(providers).map((p) => (
                    <div key={p.name} className="flex flex-col items-center">
                        <img
                            className="w-52 object-cover "
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                        />
                        <p className="text-sm italic my-10 text-center">
                            this is created for learning purposes and inspired from Mr.sahand
                            ghavidel udemy tutorial
                        </p>
                        <button
                            className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
                            onClick={() => signIn(p.id, { callbackUrl: "/" })}
                        >
                            sign in with {p.name}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}

export default signin;
