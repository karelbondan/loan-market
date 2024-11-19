import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center text-center space-y-10 w-full h-screen bg-primary">
            <div className="space-y-3">
                <h1 className="text-4xl font-bold">Hey there!</h1>
                <h2 className="text-xl">
                    Sorry, there was a problem displaying that page.
                </h2>
            </div>
            <button
                className="rounded-lg font-bold border-2 border-black/30 px-4 py-2 hover:border-transparent hover:bg-black/10 transition-all"
                onClick={e => { e.preventDefault(); navigate(-1) }}
            >
                Return to previous page
            </button>
            <p className="opacity-50">
                Details:{" "}
                {/* @ts-expect-error */}
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
