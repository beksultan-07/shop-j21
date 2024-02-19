import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import { Button, Card, Input } from "antd";
import { useNavigate } from "react-router-dom";

function Home() {
    const [data, setData] = useState([]);

    const nav = useNavigate();

    useEffect(() => {
        const dataFromLocalStorage =
            JSON.parse(localStorage.getItem("products")) || [];
        setData(dataFromLocalStorage);
    }, []);

    function searchProduct(e) {
        let productFilterAdd =
            JSON.parse(localStorage.getItem("products")) || [];
        productFilterAdd = productFilterAdd.filter((el) =>
            el.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setData(productFilterAdd);
    }

    function sortByDate() {
        setData([...data].sort((a, b) => b.date - a.date));
    }
    function sortByHight() {
        setData([...data].sort((a, b) => b.price - a.price));
    }
    function sortByLow() {
        setData([...data].sort((a, b) => a.price - b.price));
    }
    return (
        <>
            <Header />
            <div className="container">
                <Input onChange={searchProduct}></Input>
                <Button onClick={sortByDate}>New</Button>
                <Button onClick={sortByHight}>Hight price</Button>
                <Button onClick={sortByLow}>Low price</Button>
                <div className="cards">
                    {data.map((el) => (
                        <Card
                            onClick={() => nav("/product/" + el.id)}
                            key={el.id}
                            hoverable
                            cover={
                                <img
                                    style={{ height: 200, objectFit: "cover" }}
                                    alt="example"
                                    src={el.url}
                                />
                            }
                        >
                            <Card.Meta title={el.name} description={el.price} />
                            <Button danger>delete</Button>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
