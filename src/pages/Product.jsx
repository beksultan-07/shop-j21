import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import { useParams } from "react-router-dom";
import { Card } from "antd";


function Product() {
    const { id } = useParams();
    const [dana, setData] = useState([]);
    console.log(id);
    useEffect(() => {
            let DataFromLocalStorage =
                JSON.parse(localStorage.getItem("products")) || [];
            DataFromLocalStorage = DataFromLocalStorage.find((el) => el.id == id);
            setData(DataFromLocalStorage);
            console.log(dana);
        }, []);
        console.log(dana);
    return (
        <>
            <Header />
            <Card
                cover={
                    <img
                        style={{ height: 200, objectFit: "cover" }}
                        alt="example"
                        src={dana.url}
                    />
                }
            >
                <Card.Meta title={dana.name} description={dana.price} />
            </Card>
        </>
    );
}

export default Product;
