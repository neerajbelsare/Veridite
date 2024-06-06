import React, {useEffect, useState} from "react";
import logo from "../assets/img/logo.png"
import {Link, useNavigate} from "react-router-dom";
import {Detect} from "./Detect";
import axios from "axios";
import {Home} from "./Home";
import {Wallet} from "./Wallet";
import {Documents} from "./Documents";

const navigationList = [
    {
        name: "Home",
        svg: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-[#4F80E1] fill-[#637381]"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.53955 0.907986C8.81038 0.697338 9.18962 0.697338 9.46045 0.907986L16.2105 6.15799C16.3931 6.30008 16.5 6.51856 16.5 6.75V15C16.5 15.5967 16.2629 16.169 15.841 16.591C15.419 17.0129 14.8467 17.25 14.25 17.25H3.75C3.15326 17.25 2.58097 17.0129 2.15901 16.591C1.73705 16.169 1.5 15.5967 1.5 15V6.75C1.5 6.51856 1.60685 6.30008 1.78954 6.15799L8.53955 0.907986ZM3 7.11681V15C3 15.1989 3.07902 15.3897 3.21967 15.5303C3.36032 15.671 3.55109 15.75 3.75 15.75H14.25C14.4489 15.75 14.6397 15.671 14.7803 15.5303C14.921 15.3897 15 15.1989 15 15V7.11681L9 2.45015L3 7.11681Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 9C6 8.58579 6.33579 8.25 6.75 8.25H11.25C11.6642 8.25 12 8.58579 12 9V16.5C12 16.9142 11.6642 17.25 11.25 17.25C10.8358 17.25 10.5 16.9142 10.5 16.5V9.75H7.5V16.5C7.5 16.9142 7.16421 17.25 6.75 17.25C6.33579 17.25 6 16.9142 6 16.5V9Z"
                />
            </svg>
        ),
    },
    {
        name: "Detect",
        svg: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-[#4F80E1] fill-[#637381]"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 2.25C1.5 1.83579 1.83579 1.5 2.25 1.5H7.5C7.91421 1.5 8.25 1.83579 8.25 2.25V7.5C8.25 7.91421 7.91421 8.25 7.5 8.25H2.25C1.83579 8.25 1.5 7.91421 1.5 7.5V2.25ZM3 3V6.75H6.75V3H3Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.75 2.25C9.75 1.83579 10.0858 1.5 10.5 1.5H15.75C16.1642 1.5 16.5 1.83579 16.5 2.25V7.5C16.5 7.91421 16.1642 8.25 15.75 8.25H10.5C10.0858 8.25 9.75 7.91421 9.75 7.5V2.25ZM11.25 3V6.75H15V3H11.25Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.75 10.5C9.75 10.0858 10.0858 9.75 10.5 9.75H15.75C16.1642 9.75 16.5 10.0858 16.5 10.5V15.75C16.5 16.1642 16.1642 16.5 15.75 16.5H10.5C10.0858 16.5 9.75 16.1642 9.75 15.75V10.5ZM11.25 11.25V15H15V11.25H11.25Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 10.5C1.5 10.0858 1.83579 9.75 2.25 9.75H7.5C7.91421 9.75 8.25 10.0858 8.25 10.5V15.75C8.25 16.1642 7.91421 16.5 7.5 16.5H2.25C1.83579 16.5 1.5 16.1642 1.5 15.75V10.5ZM3 11.25V15H6.75V11.25H3Z"
                />
            </svg>
        ),
    },
    {
        name: "Wallet",
        svg: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-[#4F80E1] fill-[#637381]"
            >
                <path
                    d="M14.625 5.0625H3.375C2.44302 5.0625 1.6875 5.81802 1.6875 6.75V13.5C1.6875 14.432 2.44302 15.1875 3.375 15.1875H14.625C15.557 15.1875 16.3125 14.432 16.3125 13.5V6.75C16.3125 5.81802 15.557 5.0625 14.625 5.0625Z"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.4619 5.0625V4.00781C14.4618 3.74913 14.4046 3.49366 14.2944 3.25963C14.1842 3.02559 14.0238 2.81876 13.8244 2.65388C13.6251 2.48901 13.3919 2.37016 13.1413 2.30581C12.8908 2.24147 12.6291 2.23322 12.375 2.28164L3.11625 3.86191C2.71418 3.93854 2.35144 4.15307 2.09062 4.46851C1.82979 4.78396 1.68722 5.18053 1.6875 5.58984V7.3125"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <path
                    d="M12.9375 11.25C12.715 11.25 12.4975 11.184 12.3125 11.0604C12.1275 10.9368 11.9833 10.7611 11.8981 10.5555C11.813 10.35 11.7907 10.1238 11.8341 9.90552C11.8775 9.6873 11.9847 9.48684 12.142 9.32951C12.2993 9.17217 12.4998 9.06503 12.718 9.02162C12.9363 8.97821 13.1625 9.00049 13.368 9.08564C13.5736 9.17078 13.7493 9.31498 13.8729 9.49998C13.9965 9.68499 14.0625 9.9025 14.0625 10.125C14.0625 10.4234 13.944 10.7095 13.733 10.9205C13.522 11.1315 13.2359 11.25 12.9375 11.25Z"/>
            </svg>
        ),
    },
    {
        name: "Documents",
        svg: (
            <svg
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-[#4F80E1] fill-[#637381]"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H8.25C8.44891 0 8.63968 0.0790176 8.78033 0.21967L13.2803 4.71967C13.421 4.86032 13.5 5.05109 13.5 5.25V14.25C13.5 14.8467 13.2629 15.419 12.841 15.841C12.419 16.2629 11.8467 16.5 11.25 16.5H2.25C1.65326 16.5 1.08097 16.2629 0.65901 15.841C0.237053 15.419 0 14.8467 0 14.25V2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901ZM2.25 1.5C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V14.25C1.5 14.4489 1.57902 14.6397 1.71967 14.7803C1.86032 14.921 2.05109 15 2.25 15H11.25C11.4489 15 11.6397 14.921 11.7803 14.7803C11.921 14.6397 12 14.4489 12 14.25V5.56066L7.93934 1.5H2.25Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.25 0C8.66421 0 9 0.335786 9 0.75V4.5H12.75C13.1642 4.5 13.5 4.83579 13.5 5.25C13.5 5.66421 13.1642 6 12.75 6H8.25C7.83579 6 7.5 5.66421 7.5 5.25V0.75C7.5 0.335786 7.83579 0 8.25 0Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 9C3 8.58579 3.33579 8.25 3.75 8.25H9.75C10.1642 8.25 10.5 8.58579 10.5 9C10.5 9.41421 10.1642 9.75 9.75 9.75H3.75C3.33579 9.75 3 9.41421 3 9Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H9.75C10.1642 11.25 10.5 11.5858 10.5 12C10.5 12.4142 10.1642 12.75 9.75 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H5.25C5.66421 5.25 6 5.58579 6 6C6 6.41421 5.66421 6.75 5.25 6.75H3.75C3.33579 6.75 3 6.41421 3 6Z"
                />
            </svg>
        ),
    },
];
const footerNavigation = [
    {
        name: "Settings",
        svg: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-[#4F80E1] fill-[#637381]"
            >
                <g clipPath="url(#clip0_519_55577)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5ZM6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9Z"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 1.5C8.80109 1.5 8.61032 1.57902 8.46967 1.71967C8.32902 1.86032 8.25 2.05109 8.25 2.25V2.38049C8.24845 2.7681 8.1336 3.14679 7.91958 3.46996C7.70556 3.79313 7.40172 4.04666 7.04545 4.19935C6.98203 4.22653 6.91531 4.24477 6.84721 4.25367C6.52348 4.36704 6.17499 4.39498 5.83575 4.33347C5.445 4.26262 5.08444 4.07634 4.80055 3.79865L4.79464 3.79286L4.74967 3.74783C4.68002 3.6781 4.597 3.62248 4.50596 3.58474C4.41491 3.547 4.31731 3.52757 4.21875 3.52757C4.12019 3.52757 4.02259 3.547 3.93154 3.58474C3.8405 3.62248 3.75778 3.6778 3.68813 3.74754L3.68754 3.74813C3.6178 3.81778 3.56248 3.9005 3.52474 3.99154C3.487 4.08259 3.46757 4.18019 3.46757 4.27875C3.46757 4.37731 3.487 4.47491 3.52474 4.56596C3.56248 4.657 3.6178 4.73972 3.68754 4.80937L3.73868 4.86052C4.01637 5.14441 4.20262 5.505 4.27347 5.89575C4.34291 6.27872 4.29835 6.67347 4.14559 7.03108C4.00642 7.396 3.76273 7.712 3.44479 7.93941C3.12041 8.17142 2.73374 8.30047 2.33504 8.30979L2.3175 8.31H2.25C2.05109 8.31 1.86032 8.38902 1.71967 8.52967C1.57902 8.67032 1.5 8.86109 1.5 9.06C1.5 9.25891 1.57902 9.44968 1.71967 9.59033C1.86032 9.73098 2.05109 9.81 2.25 9.81H2.38049C2.7681 9.81155 3.14679 9.9264 3.46996 10.1404C3.79201 10.3537 4.0449 10.6562 4.19776 11.0108C4.35681 11.3732 4.40408 11.7748 4.33347 12.1642C4.26262 12.555 4.07634 12.9156 3.79865 13.1994L3.79286 13.2054L3.74783 13.2503C3.6781 13.32 3.62248 13.403 3.58474 13.494C3.547 13.5851 3.52757 13.6827 3.52757 13.7812C3.52757 13.8798 3.547 13.9774 3.58474 14.0685C3.62248 14.1595 3.6778 14.2422 3.74754 14.3119L3.74813 14.3125C3.81778 14.3822 3.90049 14.4375 3.99154 14.4753C4.08259 14.513 4.18019 14.5324 4.27875 14.5324C4.37731 14.5324 4.47491 14.513 4.56596 14.4753C4.65701 14.4375 4.73972 14.3822 4.80937 14.3125L4.86052 14.2613C5.14441 13.9836 5.505 13.7974 5.89575 13.7265C6.27872 13.6571 6.67347 13.7017 7.03108 13.8544C7.39599 13.9936 7.712 14.2373 7.93941 14.5552C8.17142 14.8796 8.30047 15.2663 8.30979 15.665L8.31 15.6825V15.75C8.31 15.9489 8.38902 16.1397 8.52967 16.2803C8.67032 16.421 8.86109 16.5 9.06 16.5C9.25891 16.5 9.44968 16.421 9.59033 16.2803C9.73098 16.1397 9.81 15.9489 9.81 15.75V15.6225L9.81001 15.6195C9.81155 15.2319 9.9264 14.8532 10.1404 14.53C10.3537 14.208 10.6562 13.9551 11.0109 13.8022C11.3733 13.6432 11.7748 13.5959 12.1642 13.6665C12.555 13.7374 12.9156 13.9237 13.1994 14.2014L13.2054 14.2071L13.2503 14.2522C13.32 14.3219 13.403 14.3775 13.494 14.4153C13.5851 14.453 13.6827 14.4724 13.7812 14.4724C13.8798 14.4724 13.9774 14.453 14.0685 14.4153C14.1595 14.3775 14.2422 14.3222 14.3119 14.2525L14.3125 14.2519C14.3822 14.1822 14.4375 14.0995 14.4753 14.0085C14.513 13.9174 14.5324 13.8198 14.5324 13.7213C14.5324 13.6227 14.513 13.5251 14.4753 13.434C14.4375 13.343 14.3822 13.2603 14.3125 13.1906L14.2613 13.1395C13.9836 12.8556 13.7974 12.495 13.7265 12.1042C13.6559 11.7148 13.7032 11.3133 13.8622 10.9509C14.0151 10.5962 14.268 10.2937 14.59 10.0804C14.9132 9.8664 15.2919 9.75155 15.6795 9.75001L15.6825 9.74999L15.75 9.75C15.9489 9.75 16.1397 9.67098 16.2803 9.53033C16.421 9.38968 16.5 9.19891 16.5 9C16.5 8.80109 16.421 8.61032 16.2803 8.46967C16.1397 8.32902 15.9489 8.25 15.75 8.25H15.6225L15.6195 8.24999C15.2319 8.24845 14.8532 8.1336 14.53 7.91958C14.2069 7.70556 13.9533 7.40172 13.8006 7.04545C13.7735 6.98203 13.7552 6.91531 13.7463 6.84721C13.633 6.52348 13.605 6.17499 13.6665 5.83575C13.7374 5.445 13.9237 5.08444 14.2014 4.80055L14.2071 4.79464L14.2522 4.74967C14.3219 4.68002 14.3775 4.597 14.4153 4.50596C14.453 4.41491 14.4724 4.31731 14.4724 4.21875C14.4724 4.12019 14.453 4.02259 14.4153 3.93154C14.3775 3.8405 14.3222 3.75778 14.2525 3.68813L14.2519 3.68754C14.1822 3.6178 14.0995 3.56248 14.0085 3.52474C13.9174 3.487 13.8198 3.46757 13.7213 3.46757C13.6227 3.46757 13.5251 3.487 13.434 3.52474C13.343 3.56248 13.2603 3.6178 13.1906 3.68754L13.1395 3.73868C12.8556 4.01637 12.495 4.20262 12.1042 4.27347C11.7148 4.34408 11.3132 4.29681 10.9508 4.13776C10.5962 3.9849 10.2937 3.73201 10.0804 3.40996C9.8664 3.08679 9.75155 2.7081 9.75001 2.32049L9.75 2.3175V2.25C9.75 2.05109 9.67098 1.86032 9.53033 1.71967C9.38968 1.57902 9.19891 1.5 9 1.5ZM14.55 11.25L15.2361 11.5528C15.1968 11.6419 15.1851 11.7408 15.2025 11.8366C15.2197 11.9314 15.2645 12.019 15.3314 12.0882L15.3725 12.1294C15.3724 12.1293 15.3726 12.1295 15.3725 12.1294C15.5816 12.3383 15.7477 12.5866 15.8609 12.8596C15.9741 13.1328 16.0324 13.4256 16.0324 13.7213C16.0324 14.0169 15.9741 14.3097 15.8609 14.5829C15.7477 14.856 15.5817 15.1042 15.3725 15.3131L14.8425 14.7825L15.3731 15.3125C15.1642 15.5217 14.916 15.6877 14.6429 15.8009C14.3697 15.9141 14.0769 15.9724 13.7812 15.9724C13.4856 15.9724 13.1928 15.9141 12.9196 15.8009C12.6466 15.6877 12.3986 15.5219 12.1897 15.3128C12.1896 15.3127 12.1898 15.3129 12.1897 15.3128L12.1482 15.2714C12.079 15.2045 11.9914 15.1597 11.8966 15.1425C11.8008 15.1251 11.7019 15.1368 11.6128 15.1761L11.6055 15.1794C11.5181 15.2168 11.4435 15.279 11.391 15.3583C11.3387 15.4372 11.3106 15.5297 11.31 15.6244V15.75C11.31 16.3467 11.0729 16.919 10.651 17.341C10.229 17.7629 9.65674 18 9.06 18C8.46326 18 7.89097 17.7629 7.46901 17.341C7.04705 16.919 6.81 16.3467 6.81 15.75V15.6933C6.80644 15.5979 6.77495 15.5056 6.71936 15.4278C6.66245 15.3483 6.58292 15.2877 6.49111 15.2539C6.47628 15.2484 6.46163 15.2425 6.44718 15.2361C6.35806 15.1968 6.25921 15.1851 6.16337 15.2025C6.06856 15.2197 5.981 15.2645 5.91172 15.3314L5.87063 15.3725C5.87053 15.3726 5.87072 15.3724 5.87063 15.3725C5.66172 15.5816 5.41338 15.7477 5.14037 15.8609C4.86722 15.9741 4.57444 16.0324 4.27875 16.0324C3.98306 16.0324 3.69028 15.9741 3.41713 15.8609C3.14425 15.7478 2.89631 15.582 2.68746 15.3731C2.47827 15.1642 2.31231 14.916 2.19908 14.6429C2.08585 14.3697 2.02757 14.0769 2.02757 13.7812C2.02757 13.4856 2.08585 13.1928 2.19908 12.9196C2.31231 12.6465 2.47827 12.3983 2.68746 12.1894L2.72858 12.1483C2.79546 12.079 2.84035 11.9914 2.85754 11.8966C2.87491 11.8008 2.86318 11.7019 2.82385 11.6128L2.82061 11.6055C2.78315 11.5181 2.721 11.4435 2.64174 11.391C2.56278 11.3387 2.47031 11.3106 2.37562 11.31H2.25C1.65326 11.31 1.08097 11.0729 0.65901 10.651C0.237053 10.229 0 9.65674 0 9.06C0 8.46326 0.237053 7.89097 0.65901 7.46901C1.08097 7.04705 1.65326 6.81 2.25 6.81H2.30673C2.40213 6.80644 2.49444 6.77495 2.57216 6.71936C2.65173 6.66245 2.71233 6.58292 2.7461 6.49111C2.75155 6.47628 2.75747 6.46163 2.76385 6.44718C2.80318 6.35806 2.81491 6.25921 2.79754 6.16337C2.78035 6.06857 2.73546 5.98101 2.66857 5.91173L2.62747 5.87063C2.41827 5.66166 2.25231 5.41351 2.13908 5.14037C2.02585 4.86722 1.96757 4.57443 1.96757 4.27875C1.96757 3.98307 2.02585 3.69028 2.13908 3.41713C2.25226 3.14412 2.41811 2.89607 2.62717 2.68717C2.83607 2.47811 3.08412 2.31226 3.35713 2.19908C3.63028 2.08585 3.92307 2.02757 4.21875 2.02757C4.51443 2.02757 4.80722 2.08585 5.08037 2.19908C5.35351 2.31231 5.60166 2.47827 5.81063 2.68746L5.85173 2.72857C5.92101 2.79546 6.00857 2.84035 6.10337 2.85754C6.19921 2.87491 6.29806 2.86318 6.38718 2.82385C6.43521 2.80266 6.48519 2.78662 6.5363 2.77592C6.58859 2.74042 6.63374 2.69492 6.66896 2.64174C6.72125 2.56278 6.74941 2.47031 6.75 2.37562V2.25C6.75 1.65326 6.98705 1.08097 7.40901 0.65901C7.83097 0.237053 8.40326 0 9 0C9.59674 0 10.169 0.237053 10.591 0.65901C11.0129 1.08097 11.25 1.65326 11.25 2.25V2.31562C11.2506 2.41031 11.2787 2.50278 11.331 2.58174C11.3835 2.661 11.4581 2.72319 11.5454 2.76064L11.5528 2.76381C11.642 2.80314 11.7408 2.81491 11.8366 2.79754C11.9314 2.78035 12.019 2.73546 12.0883 2.66858L12.1294 2.62747C12.3383 2.41827 12.5865 2.25231 12.8596 2.13908C13.1328 2.02585 13.4256 1.96757 13.7213 1.96757C14.0169 1.96757 14.3097 2.02585 14.5829 2.13908C14.856 2.25231 15.1042 2.41827 15.3131 2.62747C15.522 2.83631 15.6878 3.08424 15.8009 3.35713C15.9141 3.63028 15.9724 3.92306 15.9724 4.21875C15.9724 4.51444 15.9141 4.80722 15.8009 5.08037C15.6877 5.35338 15.5219 5.60143 15.3128 5.81033C15.3127 5.81043 15.3129 5.81023 15.3128 5.81033L15.2714 5.85173C15.2045 5.92101 15.1597 6.00857 15.1425 6.10337C15.1251 6.19921 15.1368 6.29806 15.1761 6.38718C15.1973 6.43521 15.2134 6.48519 15.2241 6.5363C15.2596 6.58859 15.3051 6.63374 15.3583 6.66896C15.4372 6.72125 15.5297 6.74941 15.6244 6.75H15.75C16.3467 6.75 16.919 6.98705 17.341 7.40901C17.7629 7.83097 18 8.40326 18 9C18 9.59674 17.7629 10.169 17.341 10.591C16.919 11.0129 16.3467 11.25 15.75 11.25H15.6844C15.5897 11.2506 15.4972 11.2787 15.4183 11.331C15.339 11.3835 15.2768 11.4581 15.2394 11.5454L14.55 11.25Z"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_519_55577">
                        <rect width="18" height="18" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        ),
    },
    {
        name: "Log out",
        svg: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-[#4F80E1] fill-[#637381]"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 3C3.55109 3 3.36032 3.07902 3.21967 3.21967C3.07902 3.36032 3 3.55109 3 3.75V14.25C3 14.4489 3.07902 14.6397 3.21967 14.7803C3.36032 14.921 3.55109 15 3.75 15H6.75C7.16421 15 7.5 15.3358 7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5H3.75C3.15326 16.5 2.58097 16.2629 2.15901 15.841C1.73705 15.419 1.5 14.8467 1.5 14.25V3.75C1.5 3.15326 1.73705 2.58097 2.15901 2.15901C2.58097 1.73705 3.15326 1.5 3.75 1.5H6.75C7.16421 1.5 7.5 1.83579 7.5 2.25C7.5 2.66421 7.16421 3 6.75 3H3.75Z"
                />
                <path
                    d="M12 12.75L15.75 9L12 5.25"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 9C6 8.58579 6.33579 8.25 6.75 8.25H15.75C16.1642 8.25 16.5 8.58579 16.5 9C16.5 9.41421 16.1642 9.75 15.75 9.75H6.75C6.33579 9.75 6 9.41421 6 9Z"
                />
            </svg>
        ),
    },
];
export const Dashboard = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [openSideBar, setOpenSieBar] = useState(true);
    const [currentComponent, setCurrentComponent] = useState("Detect");
    const [loginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();

    const changeSideBar = () => {
        setOpenSieBar(!openSideBar);
    };
    const showMenuItems = () => {
        setShowMenu(!showMenu);
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:8000/users/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log(response.data)
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();

        const verifyToken = async () => {
            const token = localStorage.getItem('token');
            console.log(token)
            try {
                const response = await fetch(`http://localhost:8000/verify-token/${token}`);

                if (!response.ok) {
                    throw new Error('Token verification failed');
                }

                setLoginStatus(true);
            } catch (error) {
                setLoginStatus(false);
            }
        };

        verifyToken();
    }, [navigate]);

    const setComponent = (data) => {
        var name = data;
        setCurrentComponent(name);
    }

    const logOut = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <div className="min-h-[100vh] bg-dark-100 w-full">
            <div className={`w-full flex ${showMenu ? "overflow-hidden h-screen" : "sm:overflow-auto"}`}>
                <div
                    className={`transition-all duration-1000 ease-in-out z-50 bg-dark-200 text-gray-100 sm:relative sm:flex sm:flex-col gap-2 sm:gap-16 h-screen min-h-[600px] py-6 absolute top-0 sm:left-0 ${
                        showMenu ? "left-0 h-screen overflow-y-auto px-5" : "-left-72 sm:left-0"
                    } ${openSideBar ? "w-72 px-5" : "w-72 sm:w-24"} overflow-hidden`}
                >
                    <div
                        className={`transition-all duration-500 delay-700 ease-in-out flex gap-2 justify-start items-center ${
                            openSideBar ? "sm:justify-start" : "sm:justify-center"
                        }  cursor-pointer relative z-30`}
                    >
                        <img src={logo} className="z-30 w-[32px] h-[32px]" alt="logo"/>
                        <span
                            className={`text-xl font-semibold ${
                                openSideBar ? " block" : "block sm:hidden"
                            } `}
                        >
                        Veridite
                    </span>
                        <img
                            src={"/assets/admin/dashboard/close.svg"}
                            alt="close"
                            className={`h-7 cursor-pointer sm:hidden left-5 relative ${
                                showMenu ? "block " : "hidden"
                            }`}
                            onClick={showMenuItems}
                        />
                        <div
                            className={`h-10  w-10 rounded-full absolute top-0  sm:flex justify-center items-center cursor-pointer hidden ${
                                openSideBar ? "rotate-[180deg] -right-3" : "rotate-0 -right-3"
                            }`}
                            onClick={changeSideBar}
                        >
                            <svg
                                className="w-8 h-8 rotate-[180deg]"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5 sm:justify-between h-full mt-10 sm:mt-0">
                        <div className="md:max-w-[234px]">
                            {navigationList?.map((data, index) => (
                                <div
                                    key={index}
                                    className={`flex gap-2.5 items-center cursor-pointer py-2 group hover:bg-[#4F80E1]/[12%] group rounded-md overflow-hidden ${
                                        openSideBar ? " pl-5 justify-start flex-row" : "pl-5 sm:pl-0 justify-start sm:justify-center sm:flex-col"
                                    } ${currentComponent === data.name && "bg-[#4F80E1]/[12%]"}`}
                                    onClick={() => {
                                        setComponent(data?.name)
                                    }}
                                >
                                    <div className={`${currentComponent === data.name && "stroke-[#4F80E1]"}`}>{data?.svg}</div>
                                    <span
                                        className={`font-medium text-base group-hover:text-[#4F80E1] text-gray-100 ${
                                            openSideBar ? " block" : "block sm:hidden group-hover:block sm:group-hover:text-xs"
                                        } ${currentComponent === data.name && "text-[#4F80E1]"}`}
                                    >
                                    {data?.name}
                                </span>
                                </div>
                            ))}
                        </div>
                        {loginStatus ? (
                            <div className="flex flex-col gap-5">
                                <div className="max-w-[234px]">
                                    {footerNavigation?.map((data, index) => (
                                        <div
                                            className={`flex gap-2.5 items-center cursor-pointer py-2 rounded-md hover:bg-[#4F80E1]/[12%] group ${
                                                openSideBar ? " pl-5 justify-start flex-row" : "pl-5 sm:pl-0 justify-start sm:justify-center sm:flex-col"
                                            }`}
                                            key={index}
                                        >
                                            {data?.svg}
                                            {data.name === "Log out" ?
                                                (<span
                                                    onClick={logOut}
                                                className={`font-medium text-base group-hover:text-[#4F80E1] text-gray-100 ${
                                                    openSideBar ? " block" : "block sm:hidden group-hover:block sm:group-hover:text-xs"
                                                }`}
                                            >
                                        {data?.name}
                                    </span>) : (<span
                                                    className={`font-medium text-base group-hover:text-[#4F80E1] text-gray-100 ${
                                                        openSideBar ? " block" : "block sm:hidden group-hover:block sm:group-hover:text-xs"
                                                    }`}
                                                >
                                        {data?.name}
                                    </span>)}
                                        </div>
                                    ))}
                                </div>
                                <div
                                    className={`flex gap-3 ${openSideBar ? "bg-dark-300 rounded-md p-2 justify-start pl-5" : "justify-center"}`}
                                >
                                    <div
                                        className={`bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full hidden sm:block ${
                                            openSideBar ? "h-10 w-10" : "justify-center"
                                        }`}
                                    />
                                    <div className={`${openSideBar ? "block" : "hidden"}`}>
                                        <div className="flex flex-col pr-1">
                                            {user && (
                                                <>
                                            <span
                                                className="text-gray-100 text-sm xl:text-base font-medium truncate w-full max-w-20 cursor-pointer">
                                                {user.full_name}
                                            </span>
                                                    <span
                                                        className="text-gray-100 text-xs xl:text-sm font-normal truncate w-full max-w-20 cursor-pointer">
                                                {user.email}
                                            </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>) : (openSideBar && (<div>
                            <div className={"w-full text-white font-semibold bg-blue-700 py-2 rounded-lg"}>
                                <Link to={"/login"}>Sign In</Link>
                            </div>
                        </div>))}
                    </div>
                </div>
                <div className="w-full h-full">
                    <div className="w-full flex flex-col">
                        <div className="w-full h-full pt-5 pl-8 pr-7 py-5 bg-dark-100 flex justify-between gap-2">
                            <div className="w-full hidden sm:flex max-w-2xl justify-between">
                                <div className="w-full flex flex-col h-full">
                                    {currentComponent === "Home" && <Home/>}
                                    {currentComponent === "Detect" && <Detect/>}
                                    {currentComponent === "Wallet" && <Wallet/>}
                                    {currentComponent === "Documents" && <Documents/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};