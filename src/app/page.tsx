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
        "conf": {
            "text": {
                "txt": {
                    "cssClass": "fz-20 lh-26 d-b tc",
                        "highlight": "false",
                        "qa-cssClass": "ad-title",
                        "titleClass": "d-ib td-hu va-top mxw-100p",
                        "beforeAttr": "subTxt"
                },
                "adLabel": {
                    "cssClass": "fl-r fw-b fz-10 lh-14 bdr-4 bd-1-1A0DAB pt-1 pb-1 pl-2 pr-2 h-12 w-auto d-ib mt-5 ml-8"
                },
                "cite": {
                    "cssClass": "ad-domain fz-14 lh-20 s-url fc-obsidian d-ib pb-4",
                        "style": "line-height: 20px;",
                        "highlight": "false",
                        "isBeforeTitle": true,
                        "isCrumb": true
                },
                "triTxt": {
                    "tag": "em",
                        "cssClass": "ad-label",
                        "style": "color:#7d7d7f;"
                },
                "subTxt": {
                    "cssClass": "os fl-r mt-5 ml-5 pl-3 pr-3 fc-9th fz-11 d-ib ac-1st lh-17 h-16 bdr-2 bgc-dolphin",
                        "style": "cursor: pointer !important",
                        "beforeAttr": "adLabel",
                        "qa-cssClass": "ad-officialsite"
                }
            },
            "wrapByAnchor": "true",
                "cssClass": "mb-3",
                "wrapAnchor": {
                "cssClass": "va-bot"
            }
        },
        "logParams": [
            {
                "text": {
                    "url": {
                        "slk": "title",
                        "targurl": "#",
                        "adType": "TextAd",
                        "dispurl": "www.wayfair.com/homefurnishings"
                    },
                    "citeUrl": {
                        "slk": "dispurl",
                        "targurl": "#",
                        "dispurl": "www.wayfair.com/homefurnishings",
                        "adType": "TextAd"
                    }
                }
            }
        ]
    },
    "instrumentation": {
        "logParams": [
            {
                "text": {
                    "url": {
                        "slk": "title",
                        "targurl": "#",
                        "adType": "TextAd",
                        "dispurl": "www.wayfair.com/homefurnishings"
                    },
                    "citeUrl": {
                        "slk": "dispurl",
                        "targurl": "#",
                        "dispurl": "www.wayfair.com/homefurnishings",
                        "adType": "TextAd"
                    }
                }
            }
        ]
    }
};
const Page = () => (
    <div>
        <ul>
            {[...Array(80).keys()].map((value, index) => (
                <Title key={index} componentData={data} />
            ))}
        </ul>
    </div>
);

export default Page;