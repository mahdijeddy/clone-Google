import React from "react";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
    return (
        <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-sm mb-5 mt-3 ">
                About {results.searchInformation.formattedTotalResults} results(
                {results.searchInformation.formattedSearchTime} seconds)
            </p>
            {results.items?.map((m) => (
                <div key={m.link} className="max-w-xl mb-8 ">
                    <div className="group ">
                        <a className="text-sm truncate" href={m.link}>
                            {m.formattedUrl}
                        </a>
                        <a className="group-hover:underline decoration-blue-800 " href={m.link}>
                            <h2 className="truncate text-xl font-medium text-blue-800 ">
                                {m.title}
                            </h2>
                        </a>
                    </div>
                    <p className="text-gray-600 ">{Parser(m.htmlSnippet)}</p>
                </div>
            ))}
            <PaginationButtons />
        </div>
    );
}

export default SearchResults;
