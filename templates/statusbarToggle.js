export default function statusBarToggle() {
  return (
    `<div class="alert-status-bar">
      <ul>
        <li class="show-hide-status-bar">
          <div class="ctx-icon">
            <div style="width:22px;height:22px;display:flex;justify-content:center;align-items:center;">
              <input type="checkbox" id="b_statusbar" hidden>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
          </div>
          <div class="ctx-text">Hide Status Bar</div>
        </li>
      </ul>
    </div>`
  );
}