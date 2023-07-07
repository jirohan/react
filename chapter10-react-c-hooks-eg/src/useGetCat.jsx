import {useQuery} from "@tanstack/react-query"
import Axios from "axios";

export const useGetCat = () => {
    const { data, isLoading: isCatLoading, isError, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    const refetchData = () => {
        alert("DATA REFETCHED");
        refetch();
    };

    if(isError){
        return <h1>Sorry, there was not error</h1>
    }

    return {data, refetchData, isCatLoading};

};