import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2vw"
        height="2vw"
        viewBox="0 0 512 512"
        {...rest}
        className={` h-auto ${className}`}
    >
        <path fill="none" d="M0 0h512v512H0z" />
        <path
            fill="currentColor"
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
        />
    </svg>
);


export const TwitterIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2vw"
        viewBox="0 0 256 209"
        {...rest}
        className={` h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v209H0z" />
        <path
            fill="#55acee"
            d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
        />
    </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2vw"
        height="2vw"
        viewBox="0 0 256 256"
        {...rest}
        className={` h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <g fill="none">
            <rect width={256} height={256} fill="#fff" rx={60} />
            <rect width={256} height={256} fill="#0A66C2" rx={60} />
            <path
                fill="#fff"
                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
            />
        </g>
    </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2vw"
        height="2vw"
        viewBox="0 0 256 256"
        {...rest}
        className={` h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <path
            fill="#CB1F27"
            d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
        />
    </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2vw"
        height="2vw"
        viewBox="0 0 256 256"
        {...rest}
        className={` h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <path
            fill="#E74D89"
            d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
        />
        <path
            fill="#B2215A"
            d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
        />
    </svg>
);

export const SunIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={` h-auto ${className}`}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <g strokeDasharray="2">
                <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
                <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
            </g>
            <path
                fill="currentColor"
                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                opacity="0"
            >
                <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate
                    id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="3;12"
                />
            </circle>
            <circle cx="22" cy="2" r="1">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.1s"
                    dur="0.4s"
                    values="22;18"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.1s"
                    dur="0.4s"
                    values="2;6"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.1s"
                    dur="0.4s"
                    values="1;10"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
            mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
        >
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.1s"
                dur="0.4s"
                values="6;10"
            />
        </circle>
    </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={` h-auto ${className}`}
    >
        <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
        <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="2"
            strokeDashoffset="2"
            strokeLinecap="round"
            strokeWidth="2"
        >
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                />
            </path>
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.5s"
                    dur="1.2s"
                    values="2;0"
                />
            </path>
            <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
            />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="12;3"
                />
            </circle>
            <circle cx="18" cy="6" r="10">
                <animate
                    fill="freeze"
                    attributeName="cx"
                    begin="0.6s"
                    dur="0.4s"
                    values="18;22"
                />
                <animate
                    fill="freeze"
                    attributeName="cy"
                    begin="0.6s"
                    dur="0.4s"
                    values="6;2"
                />
                <animate
                    fill="freeze"
                    attributeName="r"
                    begin="0.6s"
                    dur="0.4s"
                    values="10;1"
                />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
            opacity="0"
        >
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate
                fill="freeze"
                attributeName="r"
                begin="0.6s"
                dur="0.4s"
                values="10;6"
            />
        </circle>
    </svg>
);

export const CircularText = ({ className, ...rest }) => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="500" height="500" viewBox="0 0 300.000000 300.000000"
        preserveAspectRatio="xMidYMid meet"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
             stroke="none">
            <path d="M1399 2742 c-25 -3 -27 -6 -22 -43 5 -35 3 -39 -16 -39 -14 0 -21 -6
-21 -20 0 -13 7 -20 19 -20 15 0 19 -10 25 -52 3 -29 6 -68 6 -86 0 -22 9 -41
26 -58 21 -22 31 -25 62 -19 46 8 56 17 47 44 -5 17 -9 19 -30 9 -41 -18 -52
1 -54 92 l-2 80 41 0 c35 0 40 3 40 23 0 20 -4 22 -44 19 l-45 -4 -3 39 c-3
35 -5 38 -29 35z"/>
            <path d="M1093 2699 c-72 -35 -90 -110 -39 -158 19 -18 40 -23 110 -28 81 -6
89 -8 99 -31 10 -21 8 -27 -16 -48 -22 -18 -40 -24 -78 -24 -28 0 -59 4 -69
10 -15 8 -19 5 -25 -17 -4 -17 -2 -29 7 -34 27 -17 84 -22 128 -10 86 22 128
71 116 135 -10 53 -51 76 -138 76 -55 0 -72 4 -88 20 -16 16 -18 25 -10 39 13
26 73 45 121 38 38 -5 39 -4 39 24 0 29 -1 29 -57 29 -38 0 -72 -7 -100 -21z"/>
            <path d="M1620 2664 c-8 -3 -21 -7 -28 -10 -9 -3 -10 -9 -3 -22 8 -16 19 -18
59 -14 64 6 92 -9 92 -49 0 -25 -3 -30 -17 -25 -9 4 -41 9 -72 12 -48 5 -60 3
-83 -16 -32 -25 -38 -72 -13 -107 21 -30 87 -48 127 -34 39 14 38 14 32 -4 -4
-9 0 -15 9 -15 9 0 22 -2 29 -5 11 -4 18 19 31 98 20 113 15 145 -25 171 -25
16 -114 29 -138 20z m109 -159 c2 -2 1 -15 -3 -28 -14 -58 -136 -56 -136 2 0
33 22 43 80 36 30 -4 57 -9 59 -10z"/>
            <path d="M1905 2570 c-31 -13 -71 -61 -85 -102 -21 -69 14 -130 94 -163 48
-20 111 -13 102 11 -3 9 -6 19 -6 24 0 4 -17 6 -38 3 -32 -4 -43 0 -70 25 -74
69 0 187 93 148 18 -8 38 -24 45 -35 11 -22 27 -26 49 -12 35 22 -78 112 -140
110 -13 0 -33 -4 -44 -9z"/>
            <path d="M724 2534 c-21 -15 -20 -17 94 -170 110 -147 116 -154 136 -141 12 8
20 18 19 21 -1 4 -44 64 -96 134 -52 70 -100 137 -108 150 -16 26 -17 26 -45
6z"/>
            <path d="M2137 2395 c-123 -140 -125 -143 -106 -161 19 -17 21 -16 53 15 25
25 41 32 63 29 l29 -3 -12 -70 -12 -70 29 -30 29 -30 0 32 c0 18 5 66 11 108
l11 75 69 0 c73 0 81 6 50 34 -17 16 -30 17 -105 9 -88 -9 -106 -2 -71 27 9 7
42 43 75 80 l60 68 -24 15 c-23 16 -25 14 -149 -128z"/>
            <path d="M587 2412 c-15 -17 -8 -26 118 -152 134 -133 134 -134 155 -115 l21
19 -133 133 c-73 73 -135 133 -139 133 -3 0 -13 -8 -22 -18z"/>
            <path d="M562 2227 c-23 -30 -19 -37 44 -77 99 -65 118 -107 68 -156 -32 -33
-54 -28 -145 31 l-68 44 -16 -21 c-17 -26 -21 -22 74 -82 86 -55 129 -66 166
-42 40 26 62 80 48 116 -13 34 -11 35 17 18 16 -11 22 -9 34 7 9 11 15 22 15
25 0 3 -51 37 -114 77 -81 50 -117 68 -123 60z"/>
            <path d="M2445 2065 c-114 -93 -139 -118 -137 -137 1 -12 6 -26 10 -30 4 -4
73 -4 152 1 80 4 146 7 148 6 1 -1 -50 -42 -115 -90 -65 -48 -119 -89 -121
-90 -1 -1 2 -14 8 -29 l10 -28 191 4 c184 3 190 4 185 23 -3 11 -6 23 -6 28 0
10 -94 9 -214 -3 -55 -5 -101 -8 -103 -6 -2 2 53 45 122 95 69 51 125 94 125
96 0 2 -4 15 -9 28 -9 23 -12 24 -88 20 -43 -3 -111 -8 -151 -12 -40 -4 -74
-5 -77 -3 -4 4 158 128 228 175 15 10 17 17 8 40 -6 15 -14 27 -18 26 -5 -1
-71 -52 -148 -114z"/>
            <path d="M315 1977 c-23 -76 -63 -222 -61 -224 1 -2 74 -23 162 -48 87 -25
164 -47 170 -49 6 -2 15 9 21 24 l11 28 -67 18 c-36 9 -69 20 -73 23 -4 4 3
41 16 83 21 66 22 77 9 82 -32 13 -40 4 -58 -70 -10 -41 -21 -77 -24 -78 -12
-7 -101 27 -101 38 0 6 11 45 24 87 l24 77 -24 11 c-19 8 -26 8 -29 -2z"/>
            <path d="M2495 1593 c-54 -15 -95 -71 -95 -132 0 -34 28 -111 40 -111 19 0 31
29 21 49 -20 36 -13 95 12 119 44 41 49 31 45 -83 l-4 -105 33 0 c37 0 91 24
110 49 7 9 15 35 19 58 7 50 -16 106 -57 136 -27 19 -90 30 -124 20z m110 -70
c45 -44 33 -126 -20 -139 -14 -3 -27 -5 -28 -3 -1 2 -1 39 1 82 4 81 14 94 47
60z"/>
            <path d="M540 1425 c-10 -12 -10 -18 0 -30 20 -25 55 -15 55 15 0 30 -35 40
-55 15z"/>
            <path d="M2386 1308 c-9 -34 -8 -35 17 -42 21 -6 21 -7 -11 -26 -51 -32 -69
-109 -37 -169 16 -31 89 -71 130 -71 35 0 79 24 104 56 23 29 28 92 11 125
-13 24 -15 24 70 -7 40 -14 73 -24 74 -22 2 2 6 14 9 28 5 24 1 27 -161 81
-92 31 -174 60 -183 63 -12 5 -18 0 -23 -16z m129 -82 c59 -25 75 -97 30 -141
-51 -52 -155 -12 -155 59 0 37 23 74 54 86 29 12 32 12 71 -4z"/>
            <path d="M330 1309 c0 -21 21 -49 48 -63 l27 -14 -27 -7 c-32 -8 -31 -6 -19
-39 10 -24 10 -24 58 -10 26 8 68 19 93 25 115 25 121 29 114 52 -3 12 -8 24
-10 26 -1 1 -36 -5 -77 -14 -88 -21 -122 -15 -145 25 -17 29 -62 43 -62 19z"/>
            <path d="M587 1150 c-3 -13 1 -21 15 -26 23 -7 58 -61 58 -90 0 -12 -8 -32
-19 -45 l-19 -23 -48 97 -49 97 -39 -26 c-74 -50 -81 -135 -16 -202 53 -56
139 -52 200 9 56 56 46 147 -23 205 -35 29 -53 31 -60 4z m-36 -130 c20 -38
34 -72 31 -75 -27 -26 -112 32 -112 77 0 24 25 68 38 68 4 0 23 -32 43 -70z"/>
            <path d="M2171 891 c-81 -86 -90 -104 -91 -171 0 -122 118 -209 233 -171 36
12 180 137 175 151 -3 9 -247 260 -251 259 -1 0 -31 -31 -66 -68z m161 -105
l88 -92 -56 -47 c-49 -41 -62 -47 -101 -47 -94 0 -161 96 -122 173 13 25 90
108 99 106 3 -1 44 -43 92 -93z"/>
            <path d="M685 918 c-38 -20 -75 -61 -86 -95 -23 -70 23 -148 92 -159 37 -6 38
-8 24 -24 -14 -15 -13 -18 5 -35 21 -19 22 -18 108 67 48 47 108 105 134 128
45 42 46 44 30 66 l-17 23 -57 -57 -58 -56 0 38 c0 31 -7 46 -39 77 -32 32
-46 39 -77 39 -22 0 -48 -6 -59 -12z m114 -65 c12 -10 24 -35 28 -55 5 -33 2
-41 -30 -73 -42 -42 -74 -45 -116 -9 -40 33 -42 79 -5 123 20 25 34 31 64 31
21 0 47 -8 59 -17z"/>
            <path d="M978 720 c-50 -9 -82 -32 -102 -73 -35 -74 -9 -150 63 -187 92 -46
173 -9 202 93 26 90 -66 184 -163 167z m87 -75 c36 -36 34 -88 -5 -127 -27
-26 -36 -30 -67 -25 -84 14 -106 90 -45 160 23 26 87 23 117 -8z"/>
            <path d="M1900 689 c-31 -13 -90 -69 -90 -85 0 -27 31 -21 64 12 24 24 43 34
66 34 34 0 70 -15 70 -30 0 -5 -40 -28 -90 -51 -54 -25 -90 -48 -90 -57 0 -8
17 -32 39 -53 43 -44 88 -51 140 -24 96 49 108 158 28 234 -29 27 -97 37 -137
20z m140 -137 c0 -61 -61 -101 -118 -76 -18 7 -32 18 -32 23 0 10 124 79 143
81 4 0 7 -12 7 -28z"/>
            <path d="M1171 455 c-30 -103 -52 -188 -50 -190 2 -2 16 -6 32 -10 22 -6 27
-4 27 11 0 11 22 94 48 186 l48 167 -23 10 c-13 6 -25 11 -27 11 -1 0 -26 -83
-55 -185z"/>
            <path d="M1663 613 c-14 -3 -25 -13 -27 -26 -15 -74 -46 -254 -46 -263 0 -17
49 -4 54 15 2 9 10 60 17 114 7 53 15 97 18 97 3 0 30 -43 59 -95 49 -86 57
-95 83 -95 16 0 29 3 29 6 0 10 -155 254 -160 253 -3 -1 -15 -4 -27 -6z"/>
            <path d="M1352 585 c-37 -16 -42 -53 -7 -47 85 15 107 14 131 -9 34 -32 32
-60 -3 -54 -16 2 -63 7 -105 9 l-78 5 0 -35 c0 -19 7 -50 15 -70 24 -58 110
-81 180 -48 49 23 69 59 70 126 0 47 -4 61 -25 83 -48 52 -115 67 -178 40z
m146 -151 c2 -1 1 -12 -3 -23 -9 -28 -61 -54 -91 -47 -32 8 -64 41 -64 64 0
17 7 19 78 14 42 -2 79 -6 80 -8z"/>
        </g>
    </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={` h-auto ${className}`}
        {...rest}
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
        />
    </svg>
);

