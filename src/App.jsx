import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Folder, ArrowUp } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import SonarGrid from './SonarGrid';

import './App.css';
import avatarImg from './assets/avatar.jpg';

// Icons served directly from the simpleicons.org CDN — no npm package required.
// https://cdn.simpleicons.org/[slug]/[hex color, no #]
const STACK_ROW1 = [
  { name: 'HTML5', slug: 'html5', color: 'E34F26' },
  { name: 'CSS3', slug: 'css', color: '1572B6' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'React.js', slug: 'react', color: '61DAFB' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', color: '38BDF8' },
];

const STACK_ROW2 = [
  { name: 'Git', slug: 'git', color: 'F05032' },
  { name: 'GitHub', slug: 'github', color: 'FFFFFF' },
  { name: 'Node.js', slug: 'nodedotjs', color: '5FA04E' },
  { name: 'Express.js', slug: 'express', color: 'FFFFFF' },
  { name: 'Python', slug: 'python', color: '3776AB' },
];

const repeatedIcons = (icons, repeat = 4) => Array.from({ length: repeat }).flatMap(() => icons);

function IconBadge({ name, slug, color }) {
  return (
    <div className="h-20 w-20 flex-shrink-0 rounded-full bg-neutral-900 border border-neutral-800 shadow-md flex items-center justify-center" title={name}>
      <img src={`https://cdn.simpleicons.org/${slug}/${color}`} alt={name} className="h-9 w-9" loading="lazy" />
    </div>
  );
}

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo(0, 0);
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

      <SonarGrid
        color="#e5e5e5"
        baseOpacity={0.16}
        spacing={30}
        speed={220}
        pingEvery={3.2}
        className="min-h-dvh bg-neutral-950 flex flex-col justify-center items-center py-12 pt-28 pl-60 pr-60"
      >
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
              <svg className="size-10 fill-neutral-100 hover:fill-neutral-400 transition-colors" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            <a className="size-10 flex items-center justify-center" href="https://discord.gg/ka4fBvYKtW" target="_blank" rel="noreferrer" aria-label="Discord">
              <svg className="size-10 fill-neutral-100 hover:fill-neutral-400 transition-colors" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Discord server</title>
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.082.082 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>

            <a className="size-10 flex items-center justify-center" href="https://t.me/Mgll1337" target="_blank" rel="noreferrer" aria-label="Telegram">
              <svg className="size-10 fill-neutral-100 hover:fill-neutral-400 transition-colors" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Telegram</title>
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-10 max-w-xl">
          {['React', 'Tailwind', 'Node.js', 'Express', 'Git'].map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-neutral-300 border border-neutral-700 rounded-full px-3 py-1 bg-neutral-900/60 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center pt-10">
          <a
            className="inline-flex items-center justify-center gap-2 font-semibold text-neutral-100 border-2 border-neutral-100 rounded-lg py-2 px-4 hover:text-neutral-400 hover:border-neutral-400 cursor-pointer leading-none transition-colors"
            href="#stack"
          >
            <span>My stack</span>
            <ChevronDown size={25} strokeWidth={2} />
          </a>
        </div>
      </SonarGrid>

      <section
        id="stack"
        className="min-h-dvh bg-neutral-950 text-neutral-100 p-8 flex flex-col justify-center items-center overflow-hidden"
      >
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent"
        >
          My Tech Stack
        </motion.h2>

        <div className="mt-16 w-full max-w-5xl overflow-hidden relative pb-2">
          <div className="flex gap-8 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(STACK_ROW1, 4).map((item, i) => (
              <IconBadge key={`row1-${i}`} {...item} />
            ))}
          </div>

          <div className="flex gap-8 whitespace-nowrap mt-8 animate-scroll-right">
            {repeatedIcons(STACK_ROW2, 4).map((item, i) => (
              <IconBadge key={`row2-${i}`} {...item} />
            ))}
          </div>

          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none" />
        </div>

        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
          }
        `}</style>
      </section>

      <section id="info" className="min-h-dvh bg-neutral-950 text-neutral-100 flex flex-col">
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