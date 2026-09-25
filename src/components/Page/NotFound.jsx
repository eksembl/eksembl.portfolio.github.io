import { Link } from 'react-router';

export default function NotFound() {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen">
            <div className="container text-center">
                <span className="font-pixel text-[240px]">404</span>
                <span className="block font-main text-4xl mt-2">Page Not Found</span>
                <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-2xl border px-6 py-3 font-semibold text-sm no-underline transition-colors">
                    Go Home
                </Link>
            </div>
        </section>
    );
}