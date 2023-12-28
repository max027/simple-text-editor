function includeFile(filename) {
  return (
    `<div style="display:flex;justify-content:center;flex-direction:column;padding:22px 11px;width:100px;word-wrap:break-word;text-align:center;">
      <svg width="70" height="70" viewBox="0 0 50 80" y="0" x="0" id="Layer_1" version="1.1">
        <g class="ldl-scale" style="transform-origin:50% 50%;transform: translate(-20px,-8px);animation-play-state:paused"><path d="M19.31 9.41v81.18h61.38V28.153L61.947 9.41z" fill="var(--notebook-fill-filebg)"></path>
        <path d="M80.537 28L62 9.463V28z" fill="#656666" style="fill:rgb(101, 102, 102);animation-play-state:paused"></path>
        <path d="M40.863 40.556h28.262v3.778H40.863z" fill="#323232" style="fill:rgb(50, 50, 50);animation-play-state:paused"></path>
        <path d="M30.639 50h38.486v3.778H30.639z" fill="#323232" style="fill:rgb(50, 50, 50);animation-play-state:paused"></path>
        <path d="M30.639 59.444h38.486v3.778H30.639z" fill="#323232" style="fill:rgb(50, 50, 50);animation-play-state:paused"></path>
        <path d="M30.639 68.889h38.486v3.778H30.639z" fill="#323232" style="fill:rgb(50, 50, 50);animation-play-state:paused"></path>
        <path d="M30.639 78.333h38.486v3.778H30.639z" fill="#323232" style="fill:rgb(50, 50, 50);animation-play-state:paused"></path>
        </g>
      </svg>
      <div class="s-filename">${filename}</div>
    </div>`
  );
}
export default includeFile;