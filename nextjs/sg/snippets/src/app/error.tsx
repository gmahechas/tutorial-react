'use client';

interface Props {
    error: Error;
    reset: () => void;
}
export default function ErrorPage({ error, reset }: Props) {
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
            <button onClick={reset}>Reset</button>
        </div>
    );
}