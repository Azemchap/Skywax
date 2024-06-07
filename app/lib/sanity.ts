import imageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const client = createClient({
    apiVersion: '2024-06-06',
    dataset: 'production',
    projectId: 'aq7x49z6',
    useCdn: false,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}

