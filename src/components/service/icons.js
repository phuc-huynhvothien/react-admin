import React  from 'react';
const icons = {
    bugger: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    ),
    iconHoliday: (
        <svg xmlns="http://www.w3.org/2000/svg" width="102.58" height="57.5" viewBox="0 0 102.58 57.5"><title>holiday</title><path d="M22.26,50a4.78,4.78,0,0,1-2.62-.77c-5.1-2.74-15.33-10.9-18.79-15l-.85-1,1.19-.56C4,31.35,6.72,30.09,9.46,28.83l.14,0a2.52,2.52,0,0,1,1.92.2c2.84,1.41,6.62,3.3,10.51,5.32a1,1,0,0,0,1.3,0l.1-.08c3.88-2.67,7.87-5.33,12-8L11.59,14.49l1-1,2.13-2.14,2-2q.75-.73,1.44-1.38a30.73,30.73,0,0,0,2.2-2.23,2.75,2.75,0,0,1,2.87-.88L60,10.72c1.73.29,3.52.58,5.29.8a2,2,0,0,0,1.14-.27c5.42-3.62,12-7.65,19.49-10A24,24,0,0,1,98.2.49c1.47.32,3.46.76,4,2.92s-1,4-1.84,4.74A146.05,146.05,0,0,1,67.66,32.32,187.35,187.35,0,0,1,23.43,49.86,4.68,4.68,0,0,1,22.26,50Zm-19-16.09C7.2,38,16.12,45.07,20.65,47.51a2.92,2.92,0,0,0,2.29.41A185,185,0,0,0,66.7,30.57,144.42,144.42,0,0,0,99,6.73c1-1,1.57-1.81,1.3-2.8s-1-1.15-2.51-1.48a21.88,21.88,0,0,0-11.26.71c-7.27,2.28-13.7,6.22-19,9.77a3.88,3.88,0,0,1-2.44.57c-1.84-.22-3.64-.52-5.39-.8L58,12.43,22.7,6.78a.76.76,0,0,0-.82.25c-.76.87-1.53,1.6-2.35,2.38-.46.43-.92.87-1.4,1.35-.67.66-1.33,1.33-2,2L15,13.93,39.4,25.87l-1.46,1c-4.73,3.15-9,6-13.33,9A3,3,0,0,1,21,36c-3.79-2-7.56-3.86-10.42-5.28a.6.6,0,0,0-.39-.06C7.9,31.75,5.61,32.81,3.26,33.91Z" transform="translate(0 -0.02)" /><path d="M60,57.52a11.64,11.64,0,0,1-4.18-.78,10,10,0,0,1-6.51-7.58c-.43-3,.91-5.93,3.77-8.11l.17-.1c.09,0,9.11-4.49,17.72-9.09a84.92,84.92,0,0,0,13.51-8.73l.15-.1c1.61-.87,4.85-.81,7.25.84,1.53,1.05,3.24,3.07,3.09,6.84,4.53.31,6.3,2.67,7,4.13,1.28,2.8.55,6.63-1.79,9.31A7.63,7.63,0,0,1,93,46.87c-1.37,4.38-3.51,7.35-6.38,8.86-4.69,2.44-10.29.48-14-.82A13.17,13.17,0,0,0,69.13,54,14.38,14.38,0,0,1,60,57.52ZM54.25,42.7C52,44.42,51,46.6,51.32,48.87a8,8,0,0,0,5.25,6c3.64,1.39,7.78.47,11.37-2.53l.09-.07c1.09-.71,2.75-.13,5.25.75,3.58,1.25,8.48,3,12.4.92,2.56-1.33,4.46-4.21,5.66-8.54l.27-1,1,.3a5.64,5.64,0,0,0,6.07-1.89c1.81-2.07,2.43-5.08,1.48-7.16s-3-3-6.14-3H92.79l.14-1.13c.34-2.76-.4-4.85-2.15-6a5.88,5.88,0,0,0-5.11-.76,87.07,87.07,0,0,1-13.74,8.87C63.76,38,55.21,42.23,54.25,42.7Z" transform="translate(0 -0.02)" /></svg>
    ),
    iconTimecard: (
        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="151.69" viewBox="0 0 130 151.69"><title>Untitled-2</title><path d="M25.5,116.6a1,1,0,0,1-1-1,1,1,0,0,1,.29-.71L40.59,99.1H1a1,1,0,0,1,0-2H40.59L24.79,81.3a1,1,0,0,1,0-1.41,1,1,0,0,1,1.42,0L43.7,97.38a1,1,0,0,1,.22.33,1,1,0,0,1,.07.5h0a.59.59,0,0,1,0,.13h0a1,1,0,0,1-.25.43h0l-17.5,17.5A1,1,0,0,1,25.5,116.6Z" transform="translate(0 0)" /><path d="M18.5,67.6a1,1,0,0,1-.71-.3L.29,49.8h0A1,1,0,0,1,0,49.16H0A1.21,1.21,0,0,1,0,49H0a.92.92,0,0,1,.24-.53l0-.06L17.79,30.89a1,1,0,0,1,1.42,0,1,1,0,0,1,0,1.41L3.41,48.1H43a1,1,0,0,1,0,2H3.41l15.8,15.79a1,1,0,0,1,0,1.41A1,1,0,0,1,18.5,67.6Z" transform="translate(0 0)" /><path d="M60,151.69V0l70,21.1V130.59Zm2-149V149l66-19.9V22.59Z" transform="translate(0 0)" /><path d="M61,139.85H40V106.1h6v-16H40v-33h8v-16H40V11.85H61Zm-19-2H59v-124H42V39.1h8v20H42v29h6v20H42Z" transform="translate(0 0)" /></svg>
    ),
    align_justify: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="css-i6dzq1"
        >
            <line x1="21" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="21" y1="18" x2="3" y2="18"></line>
        </svg>
    ),
    loader: (
        <svg
            version="1.1"
            id="loader-circle"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="30px"
            height="30px"
            viewBox="0 0 40 40"
            enable-background="new 0 0 40 40"
            xmlSpace="preserve"
        >
            <g>
                <path
                    fill="#e7e7e7"
                    d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                />
                <path
                    fill="#1EB7FF"
                    d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z"
                ></path>
            </g>
        </svg>
    ),
    visa: (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="cc-visa"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="svg-inline--fa fa-cc-visa fa-w-18 fa-2x"
            width="24"
            height="24"
        >
            <path
                fill="#0062cc"
                d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"
                class=""
            ></path>
        </svg>
    ),
    user: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="css-i6dzq1"
        >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
        </svg>
    ),
    userPlus: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
    ),
    userGroup: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#c0ccda"
            fill="#c0ccda"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
    ),
    logo_new_hr: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="104.61"
            height="119"
            viewBox="0 0 104.61 119"
        >
            <title>logo</title>
            <path d="M52.3,14.39a52.31,52.31,0,1,0,52.31,52.3A52.36,52.36,0,0,0,52.3,14.39Zm0,96.19A43.88,43.88,0,1,1,96.18,66.69,43.93,43.93,0,0,1,52.3,110.58Z" />
            <path d="M52.3,30.05a4.22,4.22,0,0,0,0,8.43,28.22,28.22,0,1,1-20,48.16,4.21,4.21,0,0,0-6,6A36.65,36.65,0,1,0,52.3,30.05Z" />
            <path d="M35.1,8.43H69.5A4.22,4.22,0,0,0,69.5,0H35.1a4.22,4.22,0,0,0,0,8.43Z" />
            <path d="M38.61,84.6a4.17,4.17,0,0,0,3-1.24L55.28,69.67a4.21,4.21,0,1,0-6-6L35.63,77.41a4.22,4.22,0,0,0,3,7.19Z" />
        </svg>
    ),

    card: (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            width="24"
            height="24"
            data-icon="address-card"
            class="svg-inline--fa fa-address-card fa-w-18"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
        >
            <path
                fill="currentColor"
                d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
            ></path>
        </svg>
    ),
    delete: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
    ),

    edit: (
        <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
    ),
    add: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus"
        >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    ),
    calendar: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#c0ccda"
            stroke-width="1"
            fill="#ffffff"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
    ),
    space: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-git-commit"
        >
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="1.05" y1="12" x2="7" y2="12"></line>
            <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
        </svg>
    ),
    right: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-right"
        >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    ),
    left: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
        >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
    ),
    minus: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-minus"
        >
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    ),
    down: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-down"
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    ),
    help: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
    ),
    approve: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="00 00 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    ),
    close: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
        >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    ),
    cancel: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
        >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    ),
    plusCircle: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus-circle"
        >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="16"></line>
            <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
    ),
    search: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
    ),
    viewDetails: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-more-horizontal"
        >
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
        </svg>
    ),
    work_schedule: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-clock"
        >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    ),

    arrowRightCircle: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-right-circle"
        >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 16 16 12 12 8"></polyline>
            <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
    ),
    arrowRight: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-right"
        >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    ),
    arrowLeft: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
        >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
    ),
    exit: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x"
        >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    ),
    check: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c0ccda"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    ),
    reload: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="css-i6dzq1"
        >
            <polyline points="1 4 1 10 7 10"></polyline>
            <polyline points="23 20 23 14 17 14"></polyline>
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
        </svg>
    ),
    mapMarkerPin: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#c0ccda"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    ),
    comment: (
        <svg
            stroke="currentColor"
            width="24"
            height="24"
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="comment-alt-lines"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-comment-alt-lines fa-w-16 fa-2x"
        >
            <g class="fa-group">
                <path
                    fill="#9ea0a5"
                    d="M448 0H64A64.06 64.06 0 0 0 0 64v288a64.06 64.06 0 0 0 64 64h96v84a12 12 0 0 0 19.1 9.7L304 416h144a64.06 64.06 0 0 0 64-64V64a64.06 64.06 0 0 0-64-64zM288 264a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8zm96-96a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h240a8 8 0 0 1 8 8z"
                    class="fa-secondary"
                ></path>
                <path
                    fill="#ffffff"
                    d="M280 240H136a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm96-96H136a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h240a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"
                    class="fa-primary"
                ></path>
            </g>
        </svg>
    ),
    login: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-log-in"
        >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10 17 15 12 10 7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
        </svg>
    ),
    logout: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-log-out"
        >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
    ),
    send: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-send"
        >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
    ),
    bookmark: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bookmark"
        >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
    ),
    work_type: (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="history"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-history fa-w-16 fa-2x"
        >
            <path
                fill="currentColor"
                d="M20 24h10c6.627 0 12 5.373 12 12v94.625C85.196 57.047 165.239 7.715 256.793 8.001 393.18 8.428 504.213 120.009 504 256.396 503.786 393.181 392.834 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.354-12.561-.482-17.433l7.069-7.069c4.503-4.503 11.749-4.714 16.482-.454C150.782 449.238 200.935 470 256 470c117.744 0 214-95.331 214-214 0-117.744-95.331-214-214-214-82.862 0-154.737 47.077-190.289 116H164c6.627 0 12 5.373 12 12v10c0 6.627-5.373 12-12 12H20c-6.627 0-12-5.373-12-12V36c0-6.627 5.373-12 12-12zm321.647 315.235l4.706-6.47c3.898-5.36 2.713-12.865-2.647-16.763L272 263.853V116c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v164.147l84.884 61.734c5.36 3.899 12.865 2.714 16.763-2.646z"
                class=""
            ></path>
        </svg>
    ),
    file: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-file"
        >
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
        </svg>
    ),
    folder: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-folder"
        >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
    ),
    user_circle_solid: (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="user-circle"
            class="svg-inline--fa fa-user-circle fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
        >
            <path
                fill="currentColor"
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
            ></path>
        </svg>
    ),
    phone: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-phone"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    ),
    empty: (
        <svg
            width="64"
            height="41"
            viewBox="0 0 64 41"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                <ellipse
                    fill="#F5F5F5"
                    cx="32"
                    cy="33"
                    rx="32"
                    ry="7"
                ></ellipse>
                <g fill-rule="nonzero" stroke="#D9D9D9">
                    <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                    <path
                        d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                        fill="#FAFAFA"
                    ></path>
                </g>
            </g>
        </svg>
    ),
    bin: (
        <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="#c0ccda"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
    ),
    chevron_left: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c0ccda"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-left"
        >
            <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
    ),
    chevrons_left: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            s
            height="24"
            stroke="#c0ccda"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <polyline points="11 17 6 12 11 7"></polyline>
            <polyline points="18 17 13 12 18 7"></polyline>
        </svg>
    ),
    chevrons_down: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#c0ccda"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <polyline points="7 13 12 18 17 13"></polyline>
            <polyline points="7 6 12 11 17 6"></polyline>
        </svg>
    ),
    chevron_down: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8392a5"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-down"
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    ),
    chevron_up: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#8392a5"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    ),
    chevron_right: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c0ccda"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-right"
        >
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    ),
    chevrons_right: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <polyline points="13 17 18 12 13 7"></polyline>
            <polyline points="6 17 11 12 6 7"></polyline>
        </svg>
    ),
    download: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="css-i6dzq1"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
    ),
    bell: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="css-i6dzq1"
        >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
    ),
    message_square: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    ),
    messageSquare: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    ),
    work_history_2: (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="history"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
            class="svg-inline--fa fa-history fa-w-16 fa-2x"
        >
            <path
                fill="currentColor"
                d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"
                class=""
            ></path>
        </svg>
    ),
    checkListClock: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="24"
        // style="enable-background:new 0 0 512 512;"
        >
            {" "}
            <g>
                {" "}
                <g>
                    <path d="M354.338,34.205h-61.71c-3.354-9.93-12.752-17.102-23.8-17.102h-17.547C243.359,6.451,230.813,0,217.521,0 s-25.839,6.451-33.76,17.102h-17.547c-11.048,0-20.446,7.172-23.8,17.102H80.701c-18.566,0-33.67,15.105-33.67,33.67v359.148 c0,18.566,15.105,33.67,33.67,33.67h171.023c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017H80.701 c-9.725,0-17.637-7.912-17.637-17.637V67.875c0-9.725,7.912-17.637,17.637-17.637h60.394v26.188c0,4.427,3.589,8.017,8.017,8.017 H285.93c4.427,0,8.017-3.589,8.017-8.017V50.238h60.391c9.725,0,17.637,7.912,17.637,17.637v230.881 c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017V67.875C388.008,49.309,372.904,34.205,354.338,34.205z M277.914,68.409H157.129V42.252c0-0.011,0.001-0.02,0.001-0.031c0-0.005-0.001-0.011-0.001-0.015 c0.009-5.004,4.08-9.071,9.085-9.071h21.846c2.854,0,5.493-1.517,6.929-3.985c4.781-8.213,13.204-13.117,22.532-13.117 s17.751,4.904,22.532,13.117c1.435,2.467,4.075,3.985,6.929,3.985h21.846c4.999,0,9.067,4.059,9.085,9.055 c0,0.011-0.001,0.02-0.001,0.031c0,0.021,0.003,0.041,0.003,0.062V68.409z" />
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M251.722,410.455H97.269V84.443h17.64c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H89.253 c-4.427,0-8.017,3.589-8.017,8.017v342.046c0,4.427,3.589,8.017,8.017,8.017h162.47c4.427,0,8.017-3.589,8.017-8.017 C259.739,414.044,256.15,410.455,251.722,410.455z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M345.787,68.409h-25.653c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h17.637v214.311 c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017V76.426C353.804,71.999,350.214,68.409,345.787,68.409z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M294.48,171.023h-85.511c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h85.511 c4.427,0,8.017-3.589,8.017-8.017S298.908,171.023,294.48,171.023z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M268.827,136.818h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858 c4.427,0,8.017-3.589,8.017-8.017S273.254,136.818,268.827,136.818z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M412.738,448.433l-33.281-33.281v-53.687c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v57.007 c0,2.126,0.844,4.166,2.348,5.668l35.629,35.629c1.565,1.565,3.617,2.348,5.668,2.348s4.103-0.782,5.668-2.348 C415.869,456.639,415.869,451.563,412.738,448.433z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M371.44,324.944c-51.572,0-93.528,41.956-93.528,93.528S319.869,512,371.44,512s93.528-41.956,93.528-93.528 S423.012,324.944,371.44,324.944z M371.44,495.967c-42.731,0-77.495-34.764-77.495-77.495s34.764-77.495,77.495-77.495 s77.495,34.764,77.495,77.495S414.172,495.967,371.44,495.967z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    <path d="M176.49,163.55c-3.831-2.217-8.736-0.909-10.954,2.924c-1.624,2.806-4.64,4.548-7.875,4.548 c-5.01,0-9.086-4.076-9.086-9.086s4.076-9.086,9.086-9.086c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017 c-13.851,0-25.119,11.268-25.119,25.119s11.268,25.119,25.119,25.119c8.938,0,17.273-4.81,21.753-12.553 C181.632,170.671,180.322,165.767,176.49,163.55z" />
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M294.48,256.534h-85.511c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h85.511 c4.427,0,8.017-3.589,8.017-8.017S298.908,256.534,294.48,256.534z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M268.827,222.33h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858 c4.427,0,8.017-3.589,8.017-8.017S273.254,222.33,268.827,222.33z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M176.49,249.061c-3.831-2.218-8.736-0.91-10.954,2.924c-1.624,2.806-4.64,4.548-7.875,4.548 c-5.01,0-9.086-4.076-9.086-9.086c0-5.01,4.076-9.084,9.086-9.084c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017 c-13.851,0-25.119,11.268-25.119,25.119s11.268,25.119,25.119,25.119c8.938,0,17.273-4.81,21.753-12.553 C181.632,256.183,180.323,251.279,176.49,249.061z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M268.827,342.046h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858 c4.427,0,8.017-3.589,8.017-8.017S273.254,342.046,268.827,342.046z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M268.827,307.841h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858 c4.427,0,8.017-3.589,8.017-8.017S273.254,307.841,268.827,307.841z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M176.49,334.572c-3.831-2.219-8.736-0.909-10.954,2.924c-1.624,2.806-4.64,4.548-7.875,4.548 c-5.01,0-9.086-4.076-9.086-9.086c0-5.01,4.076-9.086,9.086-9.086c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017 c-13.851,0-25.119,11.268-25.119,25.119c0,13.851,11.268,25.12,25.119,25.12c8.938,0,17.273-4.81,21.753-12.553 C181.632,341.694,180.323,336.79,176.49,334.572z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M217.607,34.205h-0.086c-4.427,0-7.974,3.589-7.974,8.017c0,4.427,3.631,8.017,8.059,8.017 c4.427,0,8.017-3.589,8.017-8.017C225.624,37.794,222.035,34.205,217.607,34.205z" />{" "}
                </g>{" "}
            </g>{" "}
            <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
            <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
            <g> </g>{" "}
        </svg>
    ),
    check_list_clock: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="24"
        // style="enable-background:new 0 0 512 512;"
        >
            {" "}
            <g>
                {" "}
                <g>
                    <path d="M354.338,34.205h-61.71c-3.354-9.93-12.752-17.102-23.8-17.102h-17.547C243.359,6.451,230.813,0,217.521,0 s-25.839,6.451-33.76,17.102h-17.547c-11.048,0-20.446,7.172-23.8,17.102H80.701c-18.566,0-33.67,15.105-33.67,33.67v359.148 c0,18.566,15.105,33.67,33.67,33.67h171.023c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017H80.701 c-9.725,0-17.637-7.912-17.637-17.637V67.875c0-9.725,7.912-17.637,17.637-17.637h60.394v26.188c0,4.427,3.589,8.017,8.017,8.017 H285.93c4.427,0,8.017-3.589,8.017-8.017V50.238h60.391c9.725,0,17.637,7.912,17.637,17.637v230.881 c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017V67.875C388.008,49.309,372.904,34.205,354.338,34.205z M277.914,68.409H157.129V42.252c0-0.011,0.001-0.02,0.001-0.031c0-0.005-0.001-0.011-0.001-0.015 c0.009-5.004,4.08-9.071,9.085-9.071h21.846c2.854,0,5.493-1.517,6.929-3.985c4.781-8.213,13.204-13.117,22.532-13.117 s17.751,4.904,22.532,13.117c1.435,2.467,4.075,3.985,6.929,3.985h21.846c4.999,0,9.067,4.059,9.085,9.055 c0,0.011-0.001,0.02-0.001,0.031c0,0.021,0.003,0.041,0.003,0.062V68.409z" />
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M251.722,410.455H97.269V84.443h17.64c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017H89.253 c-4.427,0-8.017,3.589-8.017,8.017v342.046c0,4.427,3.589,8.017,8.017,8.017h162.47c4.427,0,8.017-3.589,8.017-8.017 C259.739,414.044,256.15,410.455,251.722,410.455z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M345.787,68.409h-25.653c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h17.637v214.311 c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017V76.426C353.804,71.999,350.214,68.409,345.787,68.409z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M294.48,171.023h-85.511c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h85.511 c4.427,0,8.017-3.589,8.017-8.017S298.908,171.023,294.48,171.023z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M268.827,136.818h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858 c4.427,0,8.017-3.589,8.017-8.017S273.254,136.818,268.827,136.818z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M412.738,448.433l-33.281-33.281v-53.687c0-4.427-3.589-8.017-8.017-8.017c-4.427,0-8.017,3.589-8.017,8.017v57.007 c0,2.126,0.844,4.166,2.348,5.668l35.629,35.629c1.565,1.565,3.617,2.348,5.668,2.348s4.103-0.782,5.668-2.348 C415.869,456.639,415.869,451.563,412.738,448.433z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M371.44,324.944c-51.572,0-93.528,41.956-93.528,93.528S319.869,512,371.44,512s93.528-41.956,93.528-93.528 S423.012,324.944,371.44,324.944z M371.44,495.967c-42.731,0-77.495-34.764-77.495-77.495s34.764-77.495,77.495-77.495 s77.495,34.764,77.495,77.495S414.172,495.967,371.44,495.967z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    <path d="M176.49,163.55c-3.831-2.217-8.736-0.909-10.954,2.924c-1.624,2.806-4.64,4.548-7.875,4.548 c-5.01,0-9.086-4.076-9.086-9.086s4.076-9.086,9.086-9.086c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017 c-13.851,0-25.119,11.268-25.119,25.119s11.268,25.119,25.119,25.119c8.938,0,17.273-4.81,21.753-12.553 C181.632,170.671,180.322,165.767,176.49,163.55z" />
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M294.48,256.534h-85.511c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h85.511 c4.427,0,8.017-3.589,8.017-8.017S298.908,256.534,294.48,256.534z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M268.827,222.33h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858 c4.427,0,8.017-3.589,8.017-8.017S273.254,222.33,268.827,222.33z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M176.49,249.061c-3.831-2.218-8.736-0.91-10.954,2.924c-1.624,2.806-4.64,4.548-7.875,4.548 c-5.01,0-9.086-4.076-9.086-9.086c0-5.01,4.076-9.084,9.086-9.084c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017 c-13.851,0-25.119,11.268-25.119,25.119s11.268,25.119,25.119,25.119c8.938,0,17.273-4.81,21.753-12.553 C181.632,256.183,180.323,251.279,176.49,249.061z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M268.827,342.046h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858 c4.427,0,8.017-3.589,8.017-8.017S273.254,342.046,268.827,342.046z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M268.827,307.841h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858 c4.427,0,8.017-3.589,8.017-8.017S273.254,307.841,268.827,307.841z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M176.49,334.572c-3.831-2.219-8.736-0.909-10.954,2.924c-1.624,2.806-4.64,4.548-7.875,4.548 c-5.01,0-9.086-4.076-9.086-9.086c0-5.01,4.076-9.086,9.086-9.086c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017 c-13.851,0-25.119,11.268-25.119,25.119c0,13.851,11.268,25.12,25.119,25.12c8.938,0,17.273-4.81,21.753-12.553 C181.632,341.694,180.323,336.79,176.49,334.572z" />{" "}
                </g>{" "}
            </g>{" "}
            <g>
                {" "}
                <g>
                    {" "}
                    <path d="M217.607,34.205h-0.086c-4.427,0-7.974,3.589-7.974,8.017c0,4.427,3.631,8.017,8.059,8.017 c4.427,0,8.017-3.589,8.017-8.017C225.624,37.794,222.035,34.205,217.607,34.205z" />{" "}
                </g>{" "}
            </g>{" "}
            <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
            <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
            <g> </g>{" "}
        </svg>
    ),
    employee: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-users"
        >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
    ),
    businessTrip: (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="business-time"
            class="svg-inline--fa fa-business-time fa-w-20"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            width="24"
            stroke-width="1"
        >
            <path
                fill="currentColor"
                d="M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z"
            ></path>
        </svg>
    ),
    clock: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    ),
    education: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-award"
        >
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </svg>
    ),
    notLogin: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-minus-circle"
        >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
    ),
    outing: (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="outdent"
            class="svg-inline--fa fa-outdent fa-w-14"
            role="img"
            stroke-width="1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="24"
        >
            <path
                fill="currentColor"
                d="M100.69 363.29c10 10 27.31 2.93 27.31-11.31V160c0-14.32-17.33-21.31-27.31-11.31l-96 96a16 16 0 0 0 0 22.62zM432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-128H204.83A12.82 12.82 0 0 0 192 300.83v38.34A12.82 12.82 0 0 0 204.83 352h230.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288zm0-128H204.83A12.82 12.82 0 0 0 192 172.83v38.34A12.82 12.82 0 0 0 204.83 224h230.34A12.82 12.82 0 0 0 448 211.17v-38.34A12.82 12.82 0 0 0 435.17 160zM432 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
            ></path>
        </svg>
    ),
    xOctagon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x-octagon"
        >
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
    ),
    fileText: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
    ),
    clipBoard: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
    ),
    map_pin: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    ),
    alert_circle: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
    ),
    headphones: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
    ),
    wifi: (
        <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
            <line x1="12" y1="20" x2="12.01" y2="20"></line>
        </svg>
    ),
    monitor: (
        <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="currentColor"
            stroke-width="1"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
        >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
    )
};

const mainIcons = {
    dashboard: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-home"
        >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
    ),
    work_status: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-calendar"
        >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
    ),
    approval: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check"
        >
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    ),
    work_schedule: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-clock"
        >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
    ),
    salary: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-dollar-sign"
        >
            <line x1="12" y1="1" x2="12" y2="23"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
    ),
    pie: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-pie-chart"
        >
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </svg>
    ),
    settings: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-settings"
        >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
    ),
    work_plan: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-trending-up"
        >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
    ),
    statistics: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bar-chart-2"
        >
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
    ),
    real_time: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="M4.181,5.773C6.014,3.474,8.838,2,12.006,2c5.522,0,10,4.478,10,10s-4.478,10-10,10c-5.522,0-10-4.478-10-10 M3.114,2.025v4.444h4.446 M12.006,6.969V13 M17.031,13h-5.025" />
        </svg>
    ),

    employee: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-users"
        >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
    ),
    history: (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="history"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-history fa-w-16 fa-2x"
        >
            <path
                fill="currentColor"
                d="M20 24h10c6.627 0 12 5.373 12 12v94.625C85.196 57.047 165.239 7.715 256.793 8.001 393.18 8.428 504.213 120.009 504 256.396 503.786 393.181 392.834 504 256 504c-63.926 0-122.202-24.187-166.178-63.908-5.113-4.618-5.354-12.561-.482-17.433l7.069-7.069c4.503-4.503 11.749-4.714 16.482-.454C150.782 449.238 200.935 470 256 470c117.744 0 214-95.331 214-214 0-117.744-95.331-214-214-214-82.862 0-154.737 47.077-190.289 116H164c6.627 0 12 5.373 12 12v10c0 6.627-5.373 12-12 12H20c-6.627 0-12-5.373-12-12V36c0-6.627 5.373-12 12-12zm321.647 315.235l4.706-6.47c3.898-5.36 2.713-12.865-2.647-16.763L272 263.853V116c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v164.147l84.884 61.734c5.36 3.899 12.865 2.714 16.763-2.646z"
                class=""
            ></path>
        </svg>
    ),
    holiday: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-umbrella"
        >
            <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
        </svg>
    ),
    share: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-share-2"
        >
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
    ),
    clock: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-lock"
        >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
    ),
    work_history: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bookmark"
        >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
    ),
    alert_octagon: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-alert-octagon"
        >
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
    )
};

const defaultIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="feather feather-folder"
    >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
);

// const deleteIcon = (
//     <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         stroke-width="1"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         class="feather feather-x-circle"
//     >
//         <circle cx="12" cy="12" r="10"></circle>
//         <line x1="15" y1="9" x2="9" y2="15"></line>
//         <line x1="9" y1="9" x2="15" y2="15"></line>
//     </svg>
// );

export default key => {
    let icon = icons[key] || defaultIcon;
    if (typeof icon == "string") return icons[icon];
    else return icon;
};

export { mainIcons };
