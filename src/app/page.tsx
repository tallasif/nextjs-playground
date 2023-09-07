import Image from 'next/image'

import Title from '@/components/title'

let data = {
    "name": "title",
    "data": [
        {
            "text": {
                "txt": "Fast Shipping and Easy Returns - Quality Furniture At Wayfair®",
                "url": "#",
                "subTxt": "Official Site",
                "cite": "www.wayfair.com",
                "citeUrl-bk": "5045",
                "citeUrl-bns": "API",
                "citeUrl": "#",
                "crumb": "www.wayfair.com",
                "postCrumb": " › HomeFurnishings"
            }
        }
    ],
    "meta": {
        "conf": {}
    }
};
const Page = () => (
    <div>
        <ul>
            {[...Array(80).keys()].map((value, index) => (
                <Title key={index} componentData={data}/>
            ))}
        </ul>
    </div>
);

export default Page;