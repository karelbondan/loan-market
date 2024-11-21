import { useNavigate } from "react-router-dom";

function PlaceholderPage(props: { page_name: string }) {
    const { page_name } = props;
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center space-y-10 p-10 w-full h-screen text-center bg-primary">
            <div className="space-y-5">
                <h1 className="text-4xl font-bold">{page_name}</h1>
                <h2 className="text-xl">
                    Hi! This is a placeholder page for <strong>{page_name}</strong> since this webapp is not yet fully developed.
                </h2>
            </div>
            <button
                className="rounded-lg font-bold border-2 border-black/30 px-4 py-2 hover:border-transparent hover:bg-black/10 transition-all"
                onClick={e => { e.preventDefault(); navigate(-1) }}
            >
                Return to previous page
            </button>
        </div>
    )
}

export default PlaceholderPage;