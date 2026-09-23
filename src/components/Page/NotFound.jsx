import { Link } from 'react-router';

export default function NotFound() {
    return (
        <section className="flex flex-col justify-center items-center min-h-screen">
            <div className="container text-center">
                <span className="font-pixel text-[240px]">404</span>
                <span className="block font-main text-4xl mt-2">Page Not Found</span>
                <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-2xl border px-6 py-3 font-semibold text-sm no-underline transition-colors"
                    style={{ borderColor: 'var(--electric)', color: 'var(--electric)' }}
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--electric)'; e.currentTarget.style.color = 'white' }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--electric)' }}>
                    Go Home
                </Link>
            </div>
        </section>
    );
}