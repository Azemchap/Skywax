'use client'
// @ts-ignore

import Footer from './Footer'
import Nav from './Nav'
// import { useDispatch } from 'react-redux'
// import { useEffect } from 'react'
// import { hideLoading } from '../redux/slices/cartSlice'
// import Toaster from 'react-hot-toast'

export default function App({ children }) {
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(hideLoading())
    // }, [dispatch])


    return (
        <div>
            <Nav />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
