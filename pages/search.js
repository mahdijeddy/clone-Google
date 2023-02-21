import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import Response from "@/Response";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function search({ results }) {
    console.log(results);
    const router = useRouter();
    return (
        <>
            <Head>
                <title>{router.query.term} - search</title>
            </Head>

            <SearchHeader />
            {/* searchResults */}
            <SearchResults results={results} />
        </>
    );
}

export async function getServerSideProps(context) {
    const mockData = true;
    const data = mockData
        ? Response
        : await fetch(
              `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
                  process.env.CONTEXT_KEY
              }&q=${context.query.term}${context.query.searchTYpe && "&searchType=image"}`
          ).then((res) => res.json());
    return {
        props: {
            results: data,
        },
    };
}

export default search;
