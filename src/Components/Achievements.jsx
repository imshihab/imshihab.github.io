import React from 'react'
import { CodeBlockIcon, TrophyIcon } from './ICONS'

function Achievements() {
    return (
        <div className="bg-[#34A853] text-white border-4 border-black p-6 md:p-10 brutal-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden group hover:bg-[#2b8a44] transition-colors">
            <div className="absolute -right-10 -top-10 text-white/10 transform rotate-12 transition-transform duration-500 group-hover:rotate-45 pointer-events-none">
                <TrophyIcon size={200} />
            </div>

            <div className="relative z-10">
                <div className="inline-block bg-white text-black font-black px-4 py-2 text-sm uppercase tracking-wider border-2 border-black brutal-shadow-sm mb-4 transform -rotate-1">
                    🏆 2nd Runner Up
                </div>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-2">
                    Intra-IUB Programming Contest
                </h3>
                <p className="text-xl font-medium text-green-100 flex items-center gap-2">
                    <CodeBlockIcon size={20} /> Junior Category (IIPC)
                </p>
            </div>

            <div className="relative z-10 hidden md:flex items-center justify-center bg-white border-4 border-black w-28 h-28 brutal-shadow shrink-0 transform group-hover:scale-110 transition-transform">
                <span className="text-4xl font-black text-[#34A853]">3rd</span>
            </div>
        </div>
    )
}

export default Achievements
