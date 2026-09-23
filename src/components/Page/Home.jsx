import {useEffect, useState} from 'react';

import {SkillSection, languages, libraries} from './icon.jsx';
import avatar from '../../assets/avatar.jpg';
import telegramIcon from '../../assets/icon/Telegram.png';
import discordIcon from '../../assets/icon/Discord.png';
import facebookIcon from '../../assets/icon/Facebook.png';
import githubIcon from '../../assets/icon/github_light.svg';

function Home() {
    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-gray-50 font-sans">

            {/* HERO */}
            <section
                className="relative min-h-screen bg-gray-50"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0.04) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(0, 0, 0, 0.04) 1px,
                            transparent 1px
                        )
                    `,
                    backgroundSize: '40px 40px',
                }}
            >
                <div className="mx-auto flex min-h-screen max-w-7xl flex-col border-x border-gray-200 px-8">

                    {/* TOP LABEL */}
                    <div className="flex justify-end pt-8">
                        <span className="font-mono text-xs tracking-widest text-gray-400">
                            PORTFOLIO / 2026
                        </span>
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-1 flex-col justify-center pb-24">

                        {/* AVATAR */}
                        <div className="mb-6">
                            <img
                                src={avatar}
                                alt="Eksembl"
                                className="h-30 w-30 rounded-full border-2 border-gray-900 object-cover shadow-[5px_5px_0px_#111]"
                            />
                        </div>

                        {/* NAME */}
                        <h1 className="font-pixel text-6xl font-black tracking-tight text-gray-900 md:text-8xl">
                            Eksembl<span className="text-gray-400">.</span>
                        </h1>

                        {/* ROLE */}
                        <p className="mt-3 font-mono text-sm font-bold uppercase tracking-[0.25em] text-gray-500 md:text-base">
                            Front-end Developer
                        </p>

                        {/* SOCIAL TITLE */}
                        <p className="mt-12 text-sm font-semibold text-gray-500">
                            Find me online
                        </p>

                        {/* SOCIALS */}
                        <div className="mt-4 flex gap-3">

                            <a
                                href="#"
                                aria-label="Telegram"
                                className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-900 bg-white transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#111]"
                            >
                                <img
                                    src={telegramIcon}
                                    alt="Telegram"
                                    className="h-7 w-7 object-contain"
                                />
                            </a>

                            <a
                                href="#"
                                aria-label="Discord"
                                className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-900 bg-white transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#111]"
                            >
                                <img
                                    src={discordIcon}
                                    alt="Discord"
                                    className="h-7 w-7 object-contain"
                                />
                            </a>

                            <a
                                href="#"
                                aria-label="Facebook"
                                className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-900 bg-white transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#111]"
                            >
                                <img
                                    src={facebookIcon}
                                    alt="Facebook"
                                    className="h-7 w-7 object-contain"
                                />
                            </a>
                            <a
                                href="#"
                                aria-label="githubIcon"
                                className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-gray-900 bg-white transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_#111]"
                            >
                                <img
                                    src={githubIcon}
                                    alt="githubIcon"
                                    className="h-7 w-7 object-contain"
                                />
                            </a>

                        </div>

                        {/* ABOUT BUTTON */}
                        <div className="mt-10">
                            <a
                                href="#about"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
                                }}
                                className="inline-block bg-blue-700 px-8 py-3 font-pixel text-lg font-black text-white shadow-[6px_6px_0px_#111] transition-all hover:-translate-y-1 hover:bg-black hover:shadow-[8px_8px_0px_#111]"
                            >
                                Go to About
                            </a>

                        </div>

                    </div>

                    {/* SCROLL INDICATOR */}
                    <div className="flex items-center justify-between border-t border-gray-200 py-5">
                        <span className="font-mono text-[14px] uppercase tracking-widest text-gray-400">
                            Scroll to explore
                        </span>

                        <span className="h-2 w-2 rounded-full bg-gray-900" />
                    </div>

                </div>
            </section>

            {/* ABOUT */}
            <section
                id="about"
                className="min-h-screen bg-blue-700"
            >
                <div className="mx-auto min-h-screen max-w-7xl border-x border-white/20 px-8 py-24">

                    <div className="flex justify-center">
                        <h2 className="-rotate-2 bg-red-600 px-6 py-3 font-pixel text-5xl font-black text-white shadow-[8px_8px_0px_#111] md:text-7xl">
                            About me
                        </h2>
                    </div>

<div className="mx-auto mt-24 max-w-3xl">
                        <p className="text-xl font-medium leading-relaxed text-white md:text-2xl">
                            I build modern web applications with a focus on clean interfaces,
                            performance and practical solutions.
                        </p>
                    </div>

                    <div className="mx-auto mt-24 max-w-5xl space-y-20">
                        <SkillSection title="Languages" items={languages}/>
                        <SkillSection title="Libraries & Tools" items={libraries}/>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Home;