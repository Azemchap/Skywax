
import React from 'react'
import ListGroup from '../../components/ListGroup'
import { data } from '../../data/data'
import Breadcrumb from '../../components/Breadcrumb'


export default function AfricanFabrics() {
    let { items } = data

    const pages = [
        { id: '1', current: true },
    ]

    return (
        <>
            <div className="max-w-screen-2xl mx-auto px-4 pt-28">
                <Breadcrumb pages={pages} item={{
                    id: '',
                    category: '',
                    categoryLink: '',
                    name: 'African Fabrics'
                }} />
                <ListGroup items={items} heading={"Newest African Fabrics"} />
            </div>
        </>
    )
}