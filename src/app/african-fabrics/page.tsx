
import Breadcrumb from '../../components/Breadcrumb'
import ListGroup from '../../components/ListGroup'
import { data } from '../../data/data'


export default function AfricanFabricsPage() {

    const { items } = data


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
                <ListGroup items={items} heading={'African Fabrics'} />
            </div>
        </>
    )
}