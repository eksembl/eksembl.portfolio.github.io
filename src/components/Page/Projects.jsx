import MedusaPng from '../../assets/eksembl-medusa-v2_nova-poshta.png';

export default function Projects() {
    return (
        <section
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

                <div className=" flex flex-col justify-between items-center bg-white  rounded-xl border-4 border-black shadow-[8px_8px_0px_#111] max-w-xl w-full">
                    <a
                        href="https://github.com/eksembl/medusa-v2_nova-poshta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center font-bold text-lg text-black text-center group"
                    >
                        <img
                            src={MedusaPng}
                            alt="Medusa Nova Poshta"
                            className="w-full h-auto rounded-lg mb-4 object-cover"
                        />
                        <span className={"font-pixel pb-2"}>Medusa v2 Nova Poshta Fulfillment Provider</span>
                        <span className=" pb-2 group-hover:underline">Go to GitHub</span>
                    </a>

                </div>
            </div>
        </section>
    );
}