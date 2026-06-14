import { MapPin } from "lucide-react";
import React from "react";

function HomeView() {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center gap-10 mb-24">
            <div className="flex-1 space-y-6">
                <div className="inline-block bg-[#34A853] text-white px-4 py-1 border-2 border-black font-bold uppercase tracking-widest text-sm brutal-shadow-sm mb-2 transform -rotate-2">
                    Portfolio v1.0
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tight">
                    Arif <br /> Saharia <br />{" "}
                    <span className="text-[#34A853] underline decoration-black decoration-8 underline-offset-8">
                        Shihab
                    </span>
                </h1>

                <div className="relative inline-block mt-4 transform rotate-1">
                    <div className="absolute inset-0 bg-[#FFB800] border-4 border-black translate-x-3 translate-y-3" />
                    <div className="relative bg-white border-4 border-black brutal-shadow-sm">
                        <div className="bg-[#34A853] text-white border-b-4 border-black px-4 py-2 font-black uppercase tracking-widest text-xs flex items-center gap-2">
                            <span className="inline-flex items-center justify-center bg-white text-black border-2 border-black w-6 h-6 text-sm brutal-shadow-sm">
                                ⚡
                            </span>
                            Dev Equation
                        </div>
                        <div className="px-5 py-4 flex flex-wrap items-center gap-2 md:gap-3 font-ph text-xl md:text-2xl font-black">
                            <span className="inline-flex items-center gap-2 bg-[#f4f4f0] border-2 border-black px-3 py-1 brutal-shadow-sm">
                                💻 energy
                            </span>
                            <span className="text-3xl md:text-4xl leading-none">
                                =
                            </span>
                            <span className="inline-flex items-center bg-[#34A853] text-white border-2 border-black px-3 py-1 brutal-shadow-sm">
                                more code<sup className="text-sm ml-0.5">2</sup>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 text-lg font-medium mt-6">
                    <div className="flex items-center gap-2 bg-white border-2 border-black px-4 py-2 brutal-shadow-sm">
                        <MapPin size={20} className="text-[#34A853]" /> Cumilla,
                        Bangladesh
                    </div>
                </div>
            </div>

            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative shrink-0 mt-8 md:mt-0">
                <div className="absolute inset-0 bg-[#34A853] border-4 border-black translate-x-4 translate-y-4"></div>
                <div className="absolute inset-0 bg-white border-4 border-black overflow-hidden group">
                    <img
                        src="/Shihab.JPG"
                        alt="Arif Saharia Shihab"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                </div>
            </div>
        </header>
    );
}

export default HomeView;
