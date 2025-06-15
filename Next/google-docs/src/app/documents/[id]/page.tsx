import { Editor } from "./editor";


interface PageProps {
    params: Promise<{
        id: string;
    }>
}



export default async function DocumentIdPage({ params }: PageProps) {
    const { id } = await params;

    return (
        <div>
            <p>Document Preview Page</p>
            <p>Document Id: { id }</p>


            <Editor />
        </div>
    )
}  