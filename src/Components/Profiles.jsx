import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import LeetCodeSvg from './SVGs/LeetCode.svg';
import CodeForceSvg from './SVGs/CodeForce.svg';
import HackerRankSvg from './SVGs/HackerRank.svg';
import HackerEarthSvg from './SVGs/HackerEarth.svg';
import CodeChefSvg from './SVGs/CodeChef.svg';
import AtCoderSvg from './SVGs/AtCoder.svg';
import LightOjSvg from './SVGs/LightOj.svg';

const icons = {
    LeetCode: () => (
        <img src={LeetCodeSvg} className='w-6! h-6!' alt="LeetCode" />
    ),
    Codeforces: () => (
        <img src={CodeForceSvg} className='w-6! h-6!' alt="Codeforces" />
    ),
    HackerRank: () => (
        <img src={HackerRankSvg} className='w-6! h-6!' alt="HackerRank" />
    ),
    HackerEarth: () => (
        <img src={HackerEarthSvg} className='w-6! h-6!' alt="HackerEarth" />
    ),
    AtCoder: () => (
        <img src={AtCoderSvg} className='w-6! h-6!' alt="AtCoder" />
    ),
    CodeChef: () => (
        <img src={CodeChefSvg} className='w-6! h-6!' alt="CodeChef" />
    ),
    LightOJ: () => (
        <img src={LightOjSvg} className='w-6! h-6!' alt="LightOJ" />
    ),
    UVa: () => (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
    )
};

const ProfileCard = ({ platform, handle, url, color, textColor, statLabel, statValue, extraStats, Icon, animationDelay }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block border-4 border-black p-6 brutal-shadow hover:-translate-y-2 transition-transform duration-300 relative group animate-fade-up`}
            style={{ backgroundColor: color, color: textColor, animationDelay: `${animationDelay}ms`, animationFillMode: 'both' }}
        >
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                    <div className={`p-2 border-2 ${textColor === '#ffffff' ? 'border-white' : 'border-black'} brutal-shadow-sm bg-black/10`}>
                        {Icon && <Icon />}
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tighter">{platform}</h3>
                </div>
                <ExternalLink size={24} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className={`font-mono text-sm border-2 ${textColor === '#ffffff' ? 'border-white' : 'border-black'} px-2 py-1 inline-block mb-6 font-bold bg-black/5`}>
                @{handle}
            </div>

            <div className={`border-t-2 ${textColor === '#ffffff' ? 'border-white/30' : 'border-black/20'} pt-4`}>
                <div>
                    <div className="text-xs font-bold uppercase opacity-80 mb-1">{statLabel || 'Status'}</div>
                    <div className="text-xl font-black">{statValue || 'Active'}</div>
                </div>

                {extraStats && extraStats.length > 0 && (
                    <div className={`border-t border-dashed ${textColor === '#ffffff' ? 'border-white/30' : 'border-black/20'} pt-3 mt-3 flex gap-6`}>
                        {extraStats.map((stat, idx) => (
                            <div key={idx}>
                                <div className="text-[10px] font-bold uppercase opacity-80 mb-1">{stat.label}</div>
                                <div className="text-sm font-black">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </a>
    );
};

const Profiles = () => {
    const [cfData, setCfData] = useState(null);
    const [loadingCf, setLoadingCf] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch('https://codeforces.com/api/user.info?handles=shihabiub').then(res => res.json()),
            fetch('https://codeforces.com/api/user.status?handle=shihabiub').then(res => res.json())
        ])
            .then(([infoData, statusData]) => {
                let details = {};
                if (infoData.status === 'OK' && infoData.result.length > 0) {
                    details = { ...infoData.result[0] };
                }
                if (statusData.status === 'OK') {
                    const solved = new Set();
                    statusData.result.forEach(sub => {
                        if (sub.verdict === 'OK' && sub.problem) {
                            solved.add(`${sub.problem.contestId}-${sub.problem.index}`);
                        }
                    });
                    details.solvedCount = solved.size;
                }
                setCfData(details);
                setLoadingCf(false);
            })
            .catch(err => {
                console.error('Failed to fetch Codeforces data', err);
                setLoadingCf(false);
            });
    }, []);

    const profiles = [
        {
            platform: 'Codeforces',
            handle: 'shihabiub',
            url: 'https://codeforces.com/profile/shihabiub',
            color: '#3B5998',
            textColor: '#ffffff',
            Icon: icons.Codeforces,
            statLabel: 'Current Rating',
            statValue: loadingCf ? 'Loading...' : (cfData ? `${cfData.rating || 'Unrated'} (${cfData.rank || 'N/A'})` : 'N/A'),
            extraStats: cfData ? [
                { label: 'Max Rating', value: cfData.maxRating || 'N/A' },
                { label: 'Solved', value: cfData.solvedCount || 0 }
            ] : []
        },
        {
            platform: 'LeetCode',
            handle: 'saharia_shihab',
            url: 'https://leetcode.com/saharia_shihab',
            color: '#FFA116',
            textColor: '#000000',
            Icon: icons.LeetCode,
            statLabel: 'Track',
            statValue: 'Problem Solving'
        },
        {
            platform: 'CodeChef',
            handle: 'saharia_shihab',
            url: 'https://www.codechef.com/users/saharia_shihab',
            color: '#5B4638',
            textColor: '#ffffff',
            Icon: icons.CodeChef,
            statLabel: 'Track',
            statValue: 'Problem Solving'
        },
        {
            platform: 'AtCoder',
            handle: 'saharia_shihab',
            url: 'https://atcoder.jp/users/saharia_shihab',
            color: '#222222',
            textColor: '#ffffff',
            Icon: icons.AtCoder,
            statLabel: 'Track',
            statValue: 'Algorithms'
        },
        {
            platform: 'LightOJ',
            handle: 'saharia_shihab',
            url: 'https://lightoj.com/user/saharia_shihab',
            color: '#2C3E50',
            textColor: '#ffffff',
            Icon: icons.LightOJ,
            statLabel: 'Track',
            statValue: 'Algorithms'
        },
        {
            platform: 'HackerRank',
            handle: 'saharia_shihab',
            url: 'https://www.hackerrank.com/saharia_shihab',
            color: '#2EC866',
            textColor: '#000000',
            Icon: icons.HackerRank,
            statLabel: 'Track',
            statValue: 'Problem Solving'
        },
        {
            platform: 'HackerEarth',
            handle: 'saharia_shihab',
            url: 'https://www.hackerearth.com/@saharia_shihab',
            color: '#323754',
            textColor: '#ffffff',
            Icon: icons.HackerEarth,
            statLabel: 'Track',
            statValue: 'Algorithms'
        },
        {
            platform: 'UVa',
            handle: 'saharia_shihab',
            url: 'https://uhunt.onlinejudge.org/id/1744963',
            color: '#E65100',
            textColor: '#ffffff',
            Icon: icons.UVa,
            statLabel: 'Track',
            statValue: 'Problem Solving'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {profiles.map((profile, index) => (
                <ProfileCard
                    key={index}
                    {...profile}
                    animationDelay={index * 150}
                />
            ))}
        </div>
    );
};

export default Profiles;
