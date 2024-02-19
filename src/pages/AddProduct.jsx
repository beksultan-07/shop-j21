import React, { useState } from "react";
import Header from "../components/header/header";
import { Button, Flex, Input } from "antd";

function AddProduct() {
    const [data, setData] = useState({
        name: "",
        price: "",
        url: "",
    });

    const clickHandler = () => {
        const product = {
            id: new Date().getTime(),
            date: new Date().getTime(),
            ...data,
        };

        const products = JSON.parse(localStorage.getItem("products")) || [];

        products.push(product);

        localStorage.setItem("products", JSON.stringify(products));
    };

    return (
        <>
            <Header />

            <div className="container">
                <Flex vertical align="center" style={{ maxWidth: 300 }}>
                    <Input
                        placeholder="image url"
                        onChange={(e) =>
                            setData({ ...data, url: e.target.value })
                        }
                    />
                    <Input
                        placeholder="name"
                        onChange={(e) =>
                            setData({ ...data, name: e.target.value })
                        }
                    />
                    <Input
                        placeholder="price"
                        onChange={(e) =>
                            setData({ ...data, price: e.target.value })
                        }
                    />
                    <Button onClick={clickHandler}>add</Button>
                </Flex>
            </div>
        </>
    );
}

export default AddProduct;
