import { useEffect, useState } from "react"

function UseCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/fawazahmed0/currency-api@1/latest/currencies/npm.json`).then((res) => res.json()).then((res) => setData(res[currency]))
        console.log(data);
        
    }, [currency])
    console.log(data);
    return [data]
}

export default UseCurrencyInfo