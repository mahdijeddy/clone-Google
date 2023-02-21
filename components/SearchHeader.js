import { useRouter } from "next/router";
import Image from "next/image";
import search from "@/pages/search";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";

function SearchHeader() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term.trim()) return;
        router.push(`/search?term=${term.trim()}&searchType=`);
    };
    return (
        <>
            <header className="sticky top-0 bg-white">
                <div className="flex w-full p-6 items-center ">
                    <Image
                        alt="icon"
                        className="cursor-pointer"
                        width="120"
                        objectFit="contain"
                        height="40"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                        onClick={() => router.push("/")}
                    />
                    <from className="flex border border-gray-200 rounded-full items-center  shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl">
                        <input
                            type="text"
                            className="w-full focus:outline-none "
                            defaultValue={router.query.term}
                            ref={searchInputRef}
                        />
                        <XIcon
                            onClick={() => (searchInputRef.current.value = "")}
                            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
                        />
                        <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3 " />
                        <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
                        <button type="submit" hidden onClick={search}></button>
                    </from>
                    <User className="ml-auto whitespace-nowrap" />
                </div>
                <SearchHeaderOptions />
            </header>
        </>
    );
}

export default SearchHeader;
