import { House, BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router';

export default function HeaderPage() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-gray-900 bg-gray-50/30 backdrop-blur-md">
            <div className="mx-auto max-w-7xl  px-8">
                <nav className="flex h-20 items-center justify-between">

                    {/* HOME */}
                    <Link
                        to="/"
                        className="group inline-flex items-center gap-2 border-2 border-gray-900 bg-white px-5 py-2.5 font-mono text-sm font-bold text-gray-900 shadow-[4px_4px_0px_#111] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#111]"
                    >
                        <House
                            size={17}
                            strokeWidth={2.5}
                            className="transition-transform group-hover:-rotate-6"
                        />
                        Home
                    </Link>

                    {/* LOGO */}
                    <Link
                        to="/"
                        className="font-pixel text-2xl font-black tracking-tight text-gray-900"
                    >
                        Eksembl<span className="text-gray-400">.</span>
                    </Link>

                    {/* Projects */}
                    <Link
                        to="/Projects"
                        className="group inline-flex items-center gap-2 border-2 border-gray-900 bg-white px-5 py-2.5 font-mono text-sm font-bold text-gray-900 shadow-[4px_4px_0px_#111] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#111]"
                    >
                        Projects
                        <BriefcaseBusiness
                            size={17}
                            strokeWidth={2.5}
                            className="transition-transform group-hover:rotate-6"
                        />
                    </Link>

                </nav>
            </div>
        </header>
    );
}