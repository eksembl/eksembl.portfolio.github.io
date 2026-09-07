import { useEffect, useRef, useState } from 'react';
import {
  ChevronDown,
  Folder,
  Code2,
  Braces,
  Component,
  Palette,
  GitBranch,
  Server,
  Terminal,
  ArrowUp,
} from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

import './App.css';
import avatarImg from './assets/avatar.jpg';

const STACK = [
  { name: 'HTML5 & CSS3', icon: Code2, dir: '-translate-x-28 -translate-y-6' },
  { name: 'JavaScript (ES6+)', icon: Braces, dir: 'translate-x-28 -translate-y-6' },
  { name: 'React.js', icon: Component, dir: '-translate-y-28' },
  { name: 'Tailwind CSS', icon: Palette, dir: 'translate-y-28' },
  { name: 'Git & GitHub', icon: GitBranch, dir: '-translate-x-28 translate-y-6' },
  { name: 'Express.js / Node.js', icon: Server, dir: 'translate-x-28 translate-y-6' },
  { name: 'Python', icon: Terminal, dir: '-translate-y-16 translate-x-16' },
];

function App() {
  const [stackVisible, setStackVisible] = useState(false);
  const stackRef = useRef(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const el = stackRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStackVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="top" className="font-sans scroll-smooth">
      <header className="fixed top-0 inset-x-0 z-50 flex justify-between items-center gap-2 px-8 py-4 bg-neutral-950/80 backdrop-blur">
        <a
          href="https://github.com/eksembl"
          target="_blank"
          rel="noreferrer"
          className="group border-4 text-neutral-100 border-neutral-100 py-2 px-4 rounded-lg font-semibold hover:text-neutral-400 hover:border-neutral-400 flex justify-center items-center gap-2 transition-colors"
        >
          GitHub
          <svg
            className="size-5 fill-neutral-100 group-hover:fill-neutral-400 transition-colors"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>

        <a
          href="#stack"
          className="border-4 text-neutral-950 bg-neutral-100 border-neutral-100 py-2 px-4 rounded-lg font-semibold hover:bg-neutral-400 hover:border-neutral-400 flex items-center gap-2 transition-colors"
        >
          Show Case <Folder size={20} />
        </a>
      </header>

      <section className="min-h-dvh bg-neutral-950 flex flex-col justify-center items-center py-12 pt-28 pl-60 pr-60">
        <div className="w-80 h-80 mx-auto flex justify-center items-center mb-3 rounded-2xl">
          <img
            className="rounded-3xl w-64 h-64 object-cover border-neutral-100 border-4"
            src={avatarImg}
            alt="Eksembl avatar"
          />
        </div>

        <div className="text-center flex flex-col items-center gap-2 py-8">
          <h1 className="text-2xl font-semibold text-neutral-100">Eksembl</h1>
          <p className="text-gray-400">Full-Stack Developer</p>
        </div>

        <div className="text-neutral-100 pb-3">
          <GitHubCalendar username="eksembl" colorScheme="dark" />
        </div>

        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-2xl text-neutral-100">My social media</p>

          <div className="flex items-center justify-center gap-5">
            <a className="size-10 flex items-center justify-center" href="https://github.com/eksembl" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg
                className="size-10 fill-neutral-100 hover:fill-neutral-400 transition-colors"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            <a className="size-10 flex items-center justify-center" href="https://discord.gg/ka4fBvYKtW" target="_blank" rel="noreferrer" aria-label="Discord">
              <svg
                className="size-10 fill-neutral-100 hover:fill-neutral-400 transition-colors"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Discord server</title>
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.082.082 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>

            <a className="size-10 flex items-center justify-center" href="https://t.me/Mgll1337" target="_blank" rel="noreferrer" aria-label="Telegram">
              <svg
                className="size-10 fill-neutral-100 hover:fill-neutral-400 transition-colors"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Telegram</title>
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center pt-16">
          <a
            className="inline-flex items-center justify-center gap-2 font-semibold text-neutral-100 border-2 border-neutral-100 rounded-lg py-2 px-4 hover:text-neutral-400 hover:border-neutral-400 cursor-pointer leading-none transition-colors"
            href="#stack"
          >
            <span>My stack</span>
            <ChevronDown size={25} strokeWidth={2} />
          </a>
        </div>
      </section>

      <section
        id="stack"
        ref={stackRef}
        className="min-h-dvh bg-neutral-950 text-neutral-100 p-8 flex flex-col justify-center items-center overflow-hidden"
      >
        <h2
          className={`text-4xl md:text-6xl font-bold text-center bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent transition-all duration-1000 ease-out ${
            stackVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          My Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-10 md:gap-14 mt-16 max-w-4xl">
          {STACK.map(({ name, icon: Icon, dir }, i) => (
            <div
              key={name}
              style={{ transitionDelay: stackVisible ? `${i * 110}ms` : '0ms' }}
              className={`flex flex-col items-center gap-3 w-28 transition-all duration-700 ease-out ${
                stackVisible ? 'translate-x-0 translate-y-0 opacity-100' : `${dir} opacity-0`
              }`}
            >
              <div className="size-20 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-neutral-400 hover:-translate-y-1 transition-all">
                <Icon size={34} className="text-neutral-100" />
              </div>
              <span className="text-sm text-neutral-400 text-center">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="info"
        className="min-h-dvh bg-neutral-950 text-neutral-100 flex flex-col"
      >
        <div className="flex-1 flex flex-col justify-center items-center gap-8 px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Let&apos;s build something together</h2>
          <p className="text-neutral-400 max-w-md">
            Open to freelance projects, collaborations and full-time opportunities.
          </p>
          <a
            href="https://t.me/Mgll1337"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-neutral-100 rounded-lg py-2 px-6 font-semibold hover:bg-neutral-100 hover:text-neutral-950 transition-colors"
          >
            Get in touch
          </a>
        </div>

        <footer className="border-t border-neutral-800 py-8 px-8 flex flex-col items-center gap-5">
          <div className="flex items-center gap-6">
            <a className="size-8 flex items-center justify-center" href="https://github.com/eksembl" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg className="size-8 fill-neutral-400 hover:fill-neutral-100 transition-colors" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a className="size-8 flex items-center justify-center" href="https://discord.gg/ka4fBvYKtW" target="_blank" rel="noreferrer" aria-label="Discord">
              <svg className="size-8 fill-neutral-400 hover:fill-neutral-100 transition-colors" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Discord server</title>
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.082.082 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>
            <a className="size-8 flex items-center justify-center" href="https://t.me/Mgll1337" target="_blank" rel="noreferrer" aria-label="Telegram">
              <svg className="size-8 fill-neutral-400 hover:fill-neutral-100 transition-colors" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Telegram</title>
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Eksembl. All rights reserved.</p>
            <a href="#top" className="flex items-center gap-1 hover:text-neutral-100 transition-colors">
              Back to top <ArrowUp size={14} />
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;