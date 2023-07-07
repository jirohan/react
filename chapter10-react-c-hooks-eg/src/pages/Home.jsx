import { useGetCat } from "../useGetCat";

export const Home = () => {
    const {data, isCatLoading, refetchData } = useGetCat()

    if (isCatLoading) return <h1>Loading...</h1>
    return (
        <h1>
            THIS IS THE HOME PAGE<p> {data?.fact} </p>
            <button onClick={refetchData}>Update Data</button>
        </h1>
    );
};