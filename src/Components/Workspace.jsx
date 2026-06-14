import React, { useState } from "react";
import settings from "../settings";

function RenderJSON({ data, isLast = true, indentLevel = 1 }) {
    const indentStr = "    ".repeat(indentLevel);
    const prevIndentStr = "    ".repeat(indentLevel - 1);

    if (typeof data !== "object" || data === null) {
        let colorClass = "text-[#9399b2]";
        let formattedData = String(data);

        if (typeof data === "string") {
            colorClass = "text-[#a6e3a1]";
            formattedData = JSON.stringify(data);
        } else if (typeof data === "boolean" || data === null) {
            colorClass = "text-[#cba6f7]";
        } else if (typeof data === "number") {
            colorClass = "text-[#fab387]";
        }

        return (
            <span>
                <span className={colorClass}>{formattedData}</span>
                {!isLast && <span className="text-[#9399b2]">,</span>}
            </span>
        );
    }

    const isArray = Array.isArray(data);
    const openBracket = isArray ? "[" : "{";
    const closeBracket = isArray ? "]" : "}";
    const entries = Object.entries(data);

    if (entries.length === 0) {
        return (
            <span>
                <span className="text-[#89dceb]">
                    {openBracket}
                    {closeBracket}
                </span>
                {!isLast && <span className="text-[#9399b2]">,</span>}
            </span>
        );
    }

    return (
        <span>
            <span className="text-[#89dceb]">{openBracket}</span>
            {"\n"}
            {entries.map(([key, value], index) => {
                const isLastItem = index === entries.length - 1;
                return (
                    <span key={key}>
                        {indentStr}
                        {!isArray && (
                            <>
                                <span className="text-[#89b4fa]">
                                    {JSON.stringify(key)}
                                </span>
                                <span className="text-[#9399b2]">: </span>
                            </>
                        )}
                        <RenderJSON
                            data={value}
                            isLast={isLastItem}
                            indentLevel={indentLevel + 1}
                        />
                        {"\n"}
                    </span>
                );
            })}
            {prevIndentStr}
            <span className="text-[#89dceb]">{closeBracket}</span>
            {!isLast && <span className="text-[#9399b2]">,</span>}
        </span>
    );
}

function Workspace() {
    const jsonStringLength = JSON.stringify(settings, null, 4).split(
        "\n",
    ).length;
    const lineNumbersText = Array.from(
        { length: jsonStringLength },
        (_, i) => i + 1,
    ).join("\n");

    const extensions = [
        {
            name: "Catppuccin for VSCode",
            role: "Theme",
            bgColor: "bg-[#f38ba8]",
            tagColor: "bg-white",
            textColor: "text-black",
            src: "https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc",
            img: "https://catppuccin.gallerycdn.vsassets.io/extensions/catppuccin/catppuccin-vsc/3.19.0/1777714479763/Microsoft.VisualStudio.Services.Icons.Default"
        },
        {
            name: "Material Icon Theme",
            role: "Icons",
            bgColor: "bg-[#f9e2af]",
            tagColor: "bg-black",
            textColor: "text-black",
            src: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",
            img: "https://pkief.gallerycdn.vsassets.io/extensions/pkief/material-icon-theme/5.35.0/1779431692292/Microsoft.VisualStudio.Services.Icons.Default"
        },
        {
            name: "Fluent Icons",
            role: "Icons",
            bgColor: "bg-[#89dceb]",
            tagColor: "bg-white",
            textColor: "text-black",
            src: "https://marketplace.visualstudio.com/items?itemName=miguelsolorio.fluent-icons",
            img: "https://miguelsolorio.gallerycdn.vsassets.io/extensions/miguelsolorio/fluent-icons/0.0.19/1729895481238/Microsoft.VisualStudio.Services.Icons.Default"
        },
        {
            name: "Prettier",
            role: "Formatter",
            bgColor: "bg-[#a6e3a1]",
            tagColor: "bg-black",
            textColor: "text-black",
            src: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
            img: "https://esbenp.gallerycdn.vsassets.io/extensions/esbenp/prettier-vscode/12.4.0/1773688466128/Microsoft.VisualStudio.Services.Icons.Default"
        },
        {
            name: "Code Runner",
            role: "Runner",
            bgColor: "bg-[#fab387]",
            tagColor: "bg-white",
            textColor: "text-black",
            src: "https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner",
            img: "https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/code-runner/0.12.2/1712309175692/Microsoft.VisualStudio.Services.Icons.Default"
        },
        {
            name: "Tailwind CSS IntelliSense",
            role: "IntelliSense",
            bgColor: "bg-[#89b4fa]",
            tagColor: "bg-white",
            textColor: "text-black",
            src: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
            img: "https://bradlc.gallerycdn.vsassets.io/extensions/bradlc/vscode-tailwindcss/0.15.2/1779811683504/Microsoft.VisualStudio.Services.Icons.Default"
        }
    ];

    return (
        <div className="border-4 border-black rounded-lg overflow-hidden brutal-shadow bg-[#1e1e2e] text-gray-300 font-mono text-sm md:text-base animate-fade-up delay-500 ">
            <div className="min-h-screen bg-[#000000] p-4 md:p-8 flex items-center flex-col gap-8 justify-center font-sans">
                <style
                    dangerouslySetInnerHTML={{
                        __html: `
                .vscode-scroll::-webkit-scrollbar { width: 14px; height: 14px; }
                .vscode-scroll::-webkit-scrollbar-track { background: transparent; }
                .vscode-scroll::-webkit-scrollbar-thumb {
                    background: #313244;
                    border: 4px solid #1e1e2e;
                    border-radius: 8px;
                }
                .vscode-scroll::-webkit-scrollbar-thumb:hover { background: #45475a; }
            `,
                    }}
                />

                <div className="w-full max-w-5xl rounded-lg shadow-2xl overflow-hidden border border-[#313244] bg-[#1e1e2e] flex flex-col h-[85vh]">
                    <div className="flex items-center px-4 h-10 bg-[#11111b] border-b border-[#181825] select-none shrink-0">
                        <div className="flex space-x-2 w-16">
                            <div className="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#f9e2af]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#a6e3a1]"></div>
                        </div>
                        <div className="flex-1 text-center text-[#bac2de] text-xs font-medium">
                            settings.json - Visual Studio Code
                        </div>
                        <div className="w-16"></div>
                    </div>

                    <div className="flex bg-[#11111b] shrink-0 overflow-x-auto vscode-scroll">
                        <div className="flex items-center bg-[#1e1e2e] px-4 py-2 text-[#cdd6f4] text-[13px] border-t border-t-[#cba6f7] cursor-pointer min-w-max">
                            <span className="text-[#89dceb] mr-2 font-mono font-bold">
                                {"{ }"}
                            </span>
                            <span className="italic">settings.json</span>
                            <span className="ml-3 text-[#6c7086] hover:text-[#cdd6f4] rounded-md p-0.5 hover:bg-[#313244] flex items-center justify-center">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                >
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Breadcrumbs */}
                    <div className="flex items-center px-4 h-5.5 bg-[#1e1e2e] text-[#bac2de] text-xs shrink-0 select-none opacity-90">
                        <span className="text-[#89b4fa] hover:underline cursor-pointer">
                            .vscode
                        </span>
                        <span className="mx-1.5 text-[#585b70] font-mono">
                            {">"}
                        </span>
                        <span className="text-[#89dceb] mr-1.5 font-mono font-bold">
                            {"{ }"}
                        </span>
                        <span className="hover:underline cursor-pointer">
                            settings.json
                        </span>
                    </div>

                    {/* Core Editor Viewport */}
                    <div className="flex-1 overflow-auto bg-[#1e1e2e] relative vscode-scroll flex">
                        {/* Line Numbers Column */}
                        <div
                            className="text-[#585b70] pr-4 select-none text-right min-w-14 py-4 bg-[#1e1e2e] sticky left-0 font-mono text-[14px] leading-normal whitespace-pre shrink-0"
                            style={{
                                fontFamily:
                                    "'MonoLisa Variable', 'Fira Code', 'JetBrains Mono', Consolas, monospace",
                            }}
                        >
                            {lineNumbersText}
                        </div>

                        <pre
                            className="pl-4 py-4 pr-8 m-0 bg-transparent font-mono text-[14px] leading-normal w-max min-w-full"
                            style={{
                                fontFamily:
                                    "'MonoLisa Variable', 'Fira Code', 'JetBrains Mono', Consolas, monospace",
                            }}
                        >
                            <RenderJSON data={settings} />
                        </pre>
                    </div>

                    {/* Status Bar */}
                    <div className="flex items-center justify-between px-3 h-5.5 bg-[#181825] text-[#bac2de] text-[11px] shrink-0 select-none border-t border-[#1e1e2e]">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center cursor-pointer hover:bg-[#313244] px-1 rounded transition-colors">
                                <svg
                                    className="w-3.5 h-3.5 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    ></path>
                                </svg>
                                main*
                            </div>
                            <div className="flex items-center cursor-pointer hover:bg-[#313244] px-1 rounded transition-colors">
                                <span className="text-[#f38ba8] flex items-center">
                                    <svg
                                        className="w-3 h-3 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                                            clipRule="evenodd"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M8 3.25a.75.75 0 01.75.75v3.69l2.28 2.28a.75.75 0 11-1.06 1.06l-2.81-2.81A.75.75 0 017 7.69V4a.75.75 0 011-.75z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    0
                                </span>
                                <span className="text-[#f9e2af] flex items-center ml-2">
                                    <svg
                                        className="w-3 h-3 ml-2 mr-1"
                                        fill="currentColor"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    0
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 sm:flex">
                            <span className="cursor-pointer hover:bg-[#313244] px-1 rounded transition-colors">
                                Ln {jsonStringLength}, Col 2
                            </span>
                            <span className="cursor-pointer hover:bg-[#313244] px-1 rounded transition-colors">
                                Spaces: 4
                            </span>
                            <span className="cursor-pointer hover:bg-[#313244] px-1 rounded transition-colors">
                                UTF-8
                            </span>
                            <span className="cursor-pointer hover:bg-[#313244] px-1 rounded transition-colors">
                                JSON
                            </span>
                            <span className="cursor-pointer hover:bg-[#313244] px-1 rounded transition-colors">
                                Prettier
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-5xl pb-4">
                    <h2
                        className="text-3xl md:text-5xl font-black mb-10 text-white uppercase tracking-wider"
                        style={{ textShadow: "4px 4px 0 #f38ba8" }}
                    >
                        Top Extensions
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {extensions.map((ext, idx) => (
                            <a
                                href={ext.src}
                                key={idx}
                                className={`${ext.bgColor} ${ext.textColor} p-6 border-4 border-white rounded-xl shadow-[8px_8px_0_0_#ffffff] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0_0_#ffffff] transition-all duration-200 flex flex-col justify-between min-h-48 cursor-pointer`}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <div className="flex flex-col mb-4">
                                    <img
                                        src={ext.img}
                                        alt={ext.name}
                                        className="w-14 h-14 mb-4 rounded-lg border-2 border-black bg-white object-contain p-1 shadow-[4px_4px_0_0_#000000]"
                                    />
                                    <h3 className="font-black text-2xl leading-tight">
                                        {ext.name}
                                    </h3>
                                </div>
                                <div className="self-start mt-auto">
                                    <span
                                        className={`${ext.tagColor} ${ext.tagColor === "bg-white" ? "text-black" : "text-white"} text-xs font-black px-2 py-1 border-2 border-black rounded uppercase tracking-widest shadow-[2px_2px_0_0_#000]`}
                                    >
                                        {ext.role}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Workspace;
