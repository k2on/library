"use client"

import React, { useEffect } from "react";

interface Size {
    x: number,
    y: number,
}

function getSize(floor: number): Size {
    switch (floor) {
        case 1:
            return { x: 1444, y: 1446 };
        case 2:
            return { x: 1444, y: 1446 };
        case 3:
            return { x: 1444, y: 1446 };
        case 4:
            return { x: 1552, y: 1446 };
        case 5:
            return { x: 1446, y: 1446 };
        case 6:
            return { x: 1446, y: 1276 };
        default:
            throw Error("Invalid floor");
    }
}



export default function Input({ url }: { url: string }) {
    const ref = React.createRef<HTMLImageElement>();

    useEffect(() => {
        if (!ref.current) return;
        ref.current.onclick = (e: any) => {
            if (!ref.current) return;
            const parts = window.location.pathname.split("/")[1].split("X");
            const floor = parts[0];


            const imgX = ref.current.width;
            const imgY = ref.current.height;
            const offX = ref.current.offsetLeft;
            const offY = ref.current.offsetTop

            const size = getSize(parseInt(floor));

            const rX = size.x / imgX;
            const rY = size.y / imgY;

            const eX = e.layerX - offX;
            const eY = e.layerY - offY;


            // console.log(size, imgX, imgY, eX, eY, e);
            // console.log(offX);
            // console.log(ref.current.offsetLeft);

            const x = eX * rX - 50;
            const y = eY * rY - 50;

            window.location.href = `${floor}X${x}X${y}`;
        }
    }, [ref])

    return <img ref={ref} style={{ width: "auto" }} src={url} />

}
