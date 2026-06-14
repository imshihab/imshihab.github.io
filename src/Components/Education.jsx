import React from "react";

function EduCard({ year, degree, institution, active, delay }) {
    return (
        <div
            className={`border-4 border-black p-5 ${active ? "bg-black text-white" : "bg-white"} brutal-shadow relative group overflow-hidden animate-fade-up delay-${delay}`}
        >
            {active && (
                <div className="absolute -right-6 -top-6 w-20 h-20 bg-[#34A853]/30 rounded-full blur-2xl"></div>
            )}
            <div className="text-sm font-bold tracking-wider mb-1 opacity-80">
                {year}
            </div>
            <h3 className="text-xl font-black mb-1">{degree}</h3>
            <p
                className={`font-medium ${active ? "text-gray-300" : "text-gray-600"}`}
            >
                {institution}
            </p>
        </div>
    );
}

function Education() {
    return (
        <div className="space-y-4">
            <EduCard
                year="Jan 2026 - Present"
                degree="Undergraduate (Computer Science)"
                institution="Independent University, Bangladesh (IUB)"
                active={true}
                delay={300}
            />
            <EduCard
                year="2023 - 2024"
                degree="HSC (Science)"
                institution="Ispahani Public School & College (ICPSC)"
                delay={400}
            />
            <EduCard
                year="2011 - 2022"
                degree="SSC (Science)"
                institution="Cantonment Board Boys' High School"
                delay={500}
            />
        </div>
    );
}

export default Education;
