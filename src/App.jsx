import React, { useEffect, useState } from 'react'
import HomeView from './Pages/HomeView';
import { CloseIcon, GithubIcon, GmailIcon, LinkedInIcon, MenuIcon } from './Components/ICONS';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'tech', label: 'Tech Arsenal' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'profiles', label: 'C.Profiles' },
        { id: 'workspace', label: 'Workspace' }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#f4f4f0] text-black font-sans selection:bg-[#34A853] selection:text-white flex flex-col">

            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <nav className="sticky top-0 z-40 bg-[#f4f4f0 pb-1 pt-4 px-6 md:px-10">
                <div className="max-w-6xl mx-auto flex justify-between items-center bg-white border-4 border-black p-4 brutal-shadow-sm">
                    <div
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="font-black text-xl md:text-2xl tracking-tighter cursor-pointer hover:text-[#34A853] transition-colors font-ph"
                    >
                        <span className="text-[#34A853]">_\imShihab\</span>
                    </div>
                    {/* Desktop Nav */}
                    <div className="hidden lg:flex gap-4 xl:gap-6 font-bold uppercase text-xs xl:text-sm">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`hover:text-[#34A853] transition-colors cursor-pointer nav-link`}
                            >
                                /{item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-2 border-2 border-black hover:bg-[#34A853] hover:text-white transition-colors cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <CloseIcon fill="none" stroke="currentColor" /> : <MenuIcon fill="none" stroke="currentColor" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden max-w-6xl mx-auto bg-white border-x-4 border-b-4 border-black p-4 brutal-shadow-sm flex flex-col gap-4 font-bold uppercase text-sm -mt-1">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`hover:text-[#34A853] text-left pb-1 cursor-pointer nav-link`}
                            >
                                /{item.label}
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            <main className="grow max-w-6xl mx-auto px-6 py-12 md:py-20 relative z-10 w-full">
                <HomeView />

                {/* Placeholders for sections to enable scrolling */}
                <section id="projects" className="py-20 border-t-4 border-black mt-10">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Selected Projects</h2>
                </section>
                <section id="education" className="py-20 border-t-4 border-black">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Education</h2>
                </section>
                <section id="tech" className="py-20 border-t-4 border-black">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Tech Arsenal</h2>
                </section>
                <section id="achievements" className="py-20 border-t-4 border-black">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Achievements</h2>
                </section>
                <section id="profiles" className="py-20 border-t-4 border-black">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Coding Profiles</h2>
                </section>
                <section id="workspace" className="py-20 border-t-4 border-black">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Workspace Setup</h2>
                </section>
            </main>

            <footer className="bg-black text-white border-t-8 border-[#34A853] pt-16 pb-8 px-6 relative z-10 mt-auto font-ph">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">Let's Talk.</h2>
                        <p className="text-xl font-medium text-gray-400 mb-8 max-w-md">
                            Currently open for new opportunities. Feel free to reach out if you want to build something awesome together.
                        </p>
                        <a
                            href="mailto:a.sahariashihab@gmail.com"
                            className="inline-flex items-center gap-3 bg-[#34A853] text-black border-4 border-white px-6 py-3 font-black uppercase text-lg brutal-shadow hover:bg-white transition-colors"
                        >
                            <GmailIcon size={24} /> Send a Message
                        </a>
                    </div>

                    <div className="flex flex-col justify-end gap-4 items-start md:items-end">
                        <SocialLink icon={<GithubIcon size={24} />} text="Github" href="#" />
                        <SocialLink icon={<LinkedInIcon size={24} />} text="LinkedIn" href="#" />
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-16 pt-8 border-t-2 border-gray-800 text-center text-gray-500 font-bold uppercase text-sm">
                    © {new Date().getFullYear()} Arif Saharia Shihab. Built with React & Neo-Brutalism.
                </div>
            </footer>
        </div>
    )
}



function SocialLink({ icon, text, href }) {
    return (
        <a
            href={href}
            className="flex items-center gap-3 text-white hover:text-[#34A853] font-black uppercase text-xl md:text-2xl transition-colors group"
        >
            <span className="p-2 border-2 border-transparent group-hover:border-[#34A853] group-hover:bg-[#34A853]/10 transition-all rounded">
                {icon}
            </span>
            {text}
        </a>
    );
}

export default App
