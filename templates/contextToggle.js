export default function contextToggle() {
  return (
    `<div class="context-toggle">
      <div class="context-wrap">
        <ul>
          <li class="disabled auto-fire tsd-list cfr-undo" data-target="undo">
            <div class="ctx-icon">
              <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
                <path d="M4.75 2C5.1297 2 5.44349 2.28215 5.49315 2.64823L5.5 2.75V8.44L10.0743 3.88014C12.5163 1.43819 16.4385 1.37863 18.9526 3.70146L19.1385 3.88014C21.6415 6.38313 21.6415 10.4413 19.1385 12.9443L10.2933 21.7835C10.0003 22.0762 9.52558 22.0759 9.23269 21.783C8.93979 21.4901 8.94013 21.0151 9.23315 20.7223L18.0778 11.8836C19.995 9.96641 19.995 6.85801 18.0778 4.9408C16.2187 3.08169 13.2395 3.02535 11.3118 4.77248L11.1342 4.94156L6.562 9.5L12.25 9.50018C12.6297 9.50018 12.9435 9.78234 12.9932 10.1484L13 10.2502C13 10.6299 12.7178 10.9437 12.3518 10.9933L12.25 11.0002H4.75C4.3703 11.0002 4.05651 10.718 4.00685 10.352L4 10.2502V2.75C4 2.33579 4.33579 2 4.75 2Z" fill="currentColor"/>
              </svg>
            </div>
            <div class="ctx-text">Undo</div>
          </li>
        </ul>
        <ul>
          <li class="disabled auto-fire rsd-slag tsd-list cfr-cut" data-target="cut">
            <div class="ctx-icon">
              <svg width="20" height="20" viewBox='0 0 24 24' style="transform:rotate(-90deg);"> 
                <g transform="matrix(1.43 0 0 1.43 12 12)" >
                <g style="" >
                <g transform="matrix(1 0 0 1 0.84 1.19)" >
                <line style="stroke: currentColor; stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="-5.655" y1="-3.26" x2="5.655" y2="3.26" />
                </g>
                <g transform="matrix(1 0 0 1 -4.25 -4.25)" >
                <circle style="stroke: currentColor; stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" cx="0" cy="0" r="2.25" />
                </g>
                <g transform="matrix(1 0 0 1 0.84 -1.19)" >
                <line style="stroke: currentColor; stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="-5.655" y1="3.2600000000000002" x2="5.655" y2="-3.2600000000000002" />
                </g>
                <g transform="matrix(1 0 0 1 -4.25 4.25)" >
                <circle style="stroke: currentColor; stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" cx="0" cy="0" r="2.25" />
                </g></g></g>
              </svg>
            </div>
            <div class="ctx-text">Cut</div>
          </li>
          <li class="disabled auto-fire rsd-slag tsd-list cfr-copy" data-target="copy">
            <div class="ctx-icon">
              <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32">
                <g id="_36_copy-03" data-name="36 copy-03"><path d="M26,23H12a3,3,0,0,1-3-3V6a3,3,0,0,1,3-3H26a3,3,0,0,1,3,3V20A3,3,0,0,1,26,23ZM12,5a1,1,0,0,0-1,1V20a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1Z"/><path d="M20,29H6a3,3,0,0,1-3-3V12A3,3,0,0,1,6,9h4a1,1,0,0,1,0,2H6a1,1,0,0,0-1,1V26a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V22a1,1,0,0,1,2,0v4A3,3,0,0,1,20,29Z"/></g>
              </svg>
            </div>
            <div class="ctx-text">Copy</div>
          </li>
          <li class="disabled auto-fire tsd-list cfr-paste" data-target="paste">
            <div class="ctx-icon">
              <svg fill="currentColor" height="20" viewBox="0 0 20 20" width="20">
                <path d="M4.5 4H6.08535C6.29127 4.5826 6.84689 5 7.5 5H10.5C11.1531 5 11.7087 4.5826 11.9146 4H13.5C13.7761 4 14 4.22386 14 4.5V5.5C14 5.77614 14.2239 6 14.5 6C14.7761 6 15 5.77614 15 5.5V4.5C15 3.67157 14.3284 3 13.5 3H11.9146C11.7087 2.4174 11.1531 2 10.5 2H7.5C6.84689 2 6.29127 2.4174 6.08535 3H4.5C3.67157 3 3 3.67157 3 4.5V16.5C3 17.3284 3.67157 18 4.5 18H7.5C7.77614 18 8 17.7761 8 17.5C8 17.2239 7.77614 17 7.5 17H4.5C4.22386 17 4 16.7761 4 16.5V4.5C4 4.22386 4.22386 4 4.5 4ZM7.5 4C7.22386 4 7 3.77614 7 3.5C7 3.22386 7.22386 3 7.5 3H10.5C10.7761 3 11 3.22386 11 3.5C11 3.77614 10.7761 4 10.5 4H7.5Z" fill="currentColor"/><path d="M10.5 7C9.67157 7 9 7.67157 9 8.5V16.5C9 17.3284 9.67157 18 10.5 18H15.5C16.3284 18 17 17.3284 17 16.5V8.5C17 7.67157 16.3284 7 15.5 7H10.5ZM10 8.5C10 8.22386 10.2239 8 10.5 8H15.5C15.7761 8 16 8.22386 16 8.5V16.5C16 16.7761 15.7761 17 15.5 17H10.5C10.2239 17 10 16.7761 10 16.5V8.5Z" fill="currentColor"/>
              </svg>
            </div>
            <div class="ctx-text">Paste</div>
          </li>
          <li class="disabled auto-fire rsd-slag tsd-list cfr-delete" data-target="del">
            <div class="ctx-icon">
              <svg fill="currentColor" viewBox="0 0 48 48" width="20" height="20">
                <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 10.238281 10 A 1.50015 1.50015 0 0 0 9.9804688 9.9785156 A 1.50015 1.50015 0 0 0 9.7578125 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6386719 13 L 11.15625 39.029297 C 11.427329 41.835926 13.811782 44 16.630859 44 L 31.367188 44 C 34.186411 44 36.570826 41.836168 36.841797 39.029297 L 39.361328 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 38.244141 10 A 1.50015 1.50015 0 0 0 37.763672 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 11.650391 13 L 36.347656 13 L 33.855469 38.740234 C 33.730439 40.035363 32.667963 41 31.367188 41 L 16.630859 41 C 15.331937 41 14.267499 40.033606 14.142578 38.740234 L 11.650391 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5 L 19 34.5 A 1.50015 1.50015 0 1 0 22 34.5 L 22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5 L 26 34.5 A 1.50015 1.50015 0 1 0 29 34.5 L 29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z"/>
              </svg>
            </div>
            <div class="ctx-text">Delete</div>
          </li>
        </ul>
        <ul>
          <li class="tsd-list auto-fire cfr-select-all" data-target="select-all">
            <div class="ctx-icon">
              <svg fill="currentColor" width="20" height="20" width="20" height="20" viewBox="0 0 24 24">
                <path d="M5 3A2 2 0 0 0 3 5H5M7 3V5H9V3M11 3V5H13V3M15 3V5H17V3M19 3V5H21A2 2 0 0 0 19 3M3 7V9H5V7M7 7V11H11V7M13 7V11H17V7M19 7V9H21V7M3 11V13H5V11M19 11V13H21V11M7 13V17H11V13M13 13V17H17V13M3 15V17H5V15M19 15V17H21V15M3 19A2 2 0 0 0 5 21V19M7 19V21H9V19M11 19V21H13V19M15 19V21H17V19M19 19V21A2 2 0 0 0 21 19Z"/>
              </svg>
            </div>
            <div class="ctx-text">Select all</div>
          </li>
          <li class="tsd-list disabled cfr-download auto-fire" data-target="download">
            <div class="ctx-icon">
              <svg width="20" height="20" aria-hidden="true" fill="none" viewBox="0 0 20 19">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"/>
              </svg>
            </div>
            <div class="ctx-text">Download</div>
          </li>
          <li class="tsd-list cfr-clear-win disabled auto-fire" data-target="clear-win">
            <div class="ctx-icon">
              <svg fill="currentColor" height="20" viewBox="0 0 24 24" width="20" focusable="false">
                <g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g>
              </svg>
            </div>
            <div class="ctx-text">Clear window</div>
          </li>
          <li class="tsd-list cfr-rtl-rorder">
            <div class="ctx-icon">
              <div style="width:22px;height:22px;display:flex;justify-content:center;align-items:center;">
                <input type="checkbox" id="writeDir" hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>
            <div class="ctx-text">Right-to-left reading order</div>
          </li>
        </ul>
      </div>
    </div>`
  );
}