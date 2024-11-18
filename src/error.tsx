import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="space-y-10">
            <div className="space-y-3">
                <h1 className="text-4xl font-bold">Hey there!</h1>
                <h2 className="text-xl">
                    Sorry, there was a problem displaying that page.
                </h2>
            </div>
            <button
                className="rounded-lg font-bold border-2 border-white/30 px-4 py-2 hover:border-transparent hover:bg-white/10 transition-all"
                onClick={e => { e.preventDefault(); navigate(-1) }}
            >
                Return to previous page
            </button>
            <p className="opacity-50">
                Additional details:{" "}
                {/* @ts-expect-error */}
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}
