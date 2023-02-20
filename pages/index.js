import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Google</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* {header} */}
            <Header />

            {/* Body */}
            <form className="flex flex-col items-center mt-40">
                <Image
                    width="300"
                    objectFit="cover"
                    height="100"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                />
                <div className="flex w-full mx-auto max-w-[90%] rounded-full  border-gray-200 border items-center px-5 py-3 mt-5 lg:max-w-2xl focus-within:shadow-lg sm:max-w-xl hover:shadow-lg ">
                    <SearchIcon className="h-5 text-gray-500 mr-3" />
                    <input className="flex-grow focus:outline-none" type="text" />
                    <MicrophoneIcon className="h-5" />
                </div>
                <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
                    <button className="btn">Google Search</button>
                    <button className="btn">Im Feeling Lucky</button>
                </div>
            </form>

            {/* footer */}
            <Footer />
        </>
    );
}
