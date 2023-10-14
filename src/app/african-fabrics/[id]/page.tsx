"use client";


import React from "react";
import { data } from "../../../data/data";
import Breadcrumb from "../../../components/Breadcrumb";
import ListItem from "../../../components/ListItem";

export default function itemDetailPage({ params: { id } }) {
    const item = data.items.find((x) => x.id === id);
    if (!item) {
        return <div>Product Not Found</div>;
    }


    const pages = [
        { id: '1', current: false },
        { id: '2', current: true },
    ]

    return (
        <div className="max-w-screen-2xl mx-auto px-4 pt-28">
            <Breadcrumb pages={pages} item={item} />

            {/* item */}
            <ListItem item={item} />
        </div>
    );
}
