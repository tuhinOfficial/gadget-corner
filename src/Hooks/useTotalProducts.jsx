import { useQuery } from "@tanstack/react-query";


const useTotalProducts = () =>{
    const {data: totalProducts=[] , refetch} = useQuery({
        queryKey:["products"],
        queryFn: async () =>{
            const res = await fetch(`http://localhost:3000/totalProducts`)
            return res.json();
        }
    })

    return [totalProducts , refetch]
}

export default useTotalProducts;