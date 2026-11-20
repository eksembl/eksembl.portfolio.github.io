import MedusaPng from '../../assets/eksembl-medusa-v2_nova-poshta.png';

export default function Projects() {
    return (<section
            className="min-h-screen bg-emerald-800"
            style={{
                backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
            }}
        >
            <div className="flex flex-col justify-center items-center pt-[120px] pb-24 px-4 md:px-32">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="rotate-3 font-pixel font-black text-4xl bg-red-600 text-white py-3 px-6 shadow-[8px_8px_0px_#111] md:text-7xl">
                        My projects
                    </h1>
                </div>
                <br/>
                <br/>
                <br/>

                <div
                    className="flex flex-col justify-between items-center bg-white rounded-xl border-4 border-black shadow-[8px_8px_0px_#111] max-w-xl w-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_#111]">
                    <a
                        href="https://github.com/eksembl/medusa-v2_nova-poshta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-full w-full flex-col items-center justify-center text-center"
                    >
                        <img
                            src={MedusaPng}
                            alt="Medusa Nova Poshta"
                            className="w-full border-b-2 border-black object-cover"
                        />
                        <span className="font-pixel px-4 py-3 text-black text-base md:text-lg">
                            Medusa v2 Nova Poshta Fulfillment Provider
                        </span>
                        <span className="font-bold text-black pb-2 text-center group-hover:underline">
                            Go to GitHub
                        </span>
                    </a>

                </div>
            </div>
        </section>);
}