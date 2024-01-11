
import Breadcrumb from '../../components/Breadcrumb'
import AfricanFabricsGroup from '../../components/categories/AfricanFabrics'


export default function AfricanFabricsPage() {
    // let { items } = data

    // items = items.filter(item => item.category == 'african-fabrics')


    const pages = [
        { id: '1', current: true },
    ]

    return (
        <>
            {/* {console.log(items.length)} */}
            <div className="max-w-screen-2xl mx-auto px-4 pt-28">
                <Breadcrumb pages={pages} item={{
                    id: '',
                    category: '',
                    categoryLink: '',
                    name: 'African Fabrics'
                }} />
                {/* <ListGroup items={items} heading={"Newest African Fabrics"} /> */}
                <AfricanFabricsGroup  />
            </div>
        </>
    )
}