import * as icons from '../../assets/icon/skils';

export const languages = [
    {name: 'Bash', icon: icons.bash},
    {name: 'CSS', icon: icons.css},
    {name: 'HTML5', icon: icons.html5},
    {name: 'JavaScript', icon: icons.javascript},
    {name: 'JSON', icon: icons.json},
    {name: 'Python', icon: icons.python},
    {name: 'Sass', icon: icons.sass},
    {name: 'TypeScript', icon: icons.typescript},
];

export const libraries = [
    {name: 'Bun', icon: icons.bun},
    {name: 'Electron', icon: icons.electron},
    {name: 'Node.js', icon: icons.nodejs},
    {name: 'React', icon: icons.react},
    {name: 'React Router', icon: icons.reactrouter},
    {name: 'Tailwind CSS', icon: icons.tailwindcss},
];

export function SkillCard({skill}) {
    return (
        <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-white bg-white px-4 py-6 transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_#111]">
            <img
                src={skill.icon}
                alt={skill.name}
                className="h-14 w-14 object-contain"
            />
            <div className="w-full border-t-2 border-gray-100 pt-3 text-center">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-900">
                    {skill.name}
                </span>
            </div>
        </div>
    );
}

export function SkillSection({title, items}) {
    return (
        <div>
            <div className="text-center">
                <h3 className="inline-block bg-black px-6 py-3 font-pixel text-2xl font-black text-white shadow-[6px_6px_0px_#fff] md:text-3xl">
                    {title}
                </h3>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {items.map((skill) => (
                    <SkillCard key={skill.name} skill={skill}/>
                ))}
            </div>
        </div>
    );
}