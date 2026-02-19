import Head from "next/head";
import Input from "./Input";
import Link from "next/link";
import Share from "./Share";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const parts = params.floor.split("X");
    const f = parts[0];
    const x = parts[1];
    const y = parts[2];
    const imageUrl = parts.length > 1 ? `/img/${f}:${x}:${y}` : `/img/${f}`;
    return {
        title: `Floor ${f} At The Lib`,
        description: 'Find me at the library',
        openGraph: {
            images: ["https://library.koon.us" + imageUrl]
        }
    };
}


interface Props {
    params: { floor: string }
}
export default function Floor({ params }: Props) {

    const { floor } = params;
    const parts = floor.split("X");
    const f = parts[0];

    const x = parts[1];
    const y = parts[2];
    const imageUrl = parts.length > 1 ? `/img/${f}:${x}:${y}` : `/img/${f}`;

    return (
        <>
            <Head>
                <title>Floor {floor}</title>
                <meta property="og:title" content="At the Lib" />
                <meta property="og:type" content="atthelib" />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:description" content="Come find me AtTheLib!" />
            </Head>
            <div style={{ maxWidth: "500px", margin: "auto", display: 'flex', flexDirection: "column", height: "100vh" }}>
                <div style={{ display: "flex", alignItems: "center", height: "80vh" }}>
                    <Input url={imageUrl} />
                </div>
                <div style={{ flexGrow: "1", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <div style={{ fontSize: "40px" }}>Floor {f}</div>
                    <div style={{ fontSize: "20px", color: "gray" }}>Tap somewhere on the map</div>
                    <div style={{ width: "100%", textAlign: "center", marginTop: "40px" }}>
                        <Share floor={floor} />
                    </div>
                    <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                        <Link href="/"><button style={{ fontSize: "20px", color: "gray" }}>⬅ BACK</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
}

