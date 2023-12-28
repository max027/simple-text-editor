export default function findReplacePopup() {
  return (
    `<div class="primary-popup">
      <div class="default-cover"></div>
      <div class="rcontainer">
        <div class="_3Feyyou7">
          <div class="find-section">
            <input type="checkbox" id="toggleReplace" hidden>
            <div style="height:32px;display:flex;align-items:center;">
              <label for="toggleReplace">
                <div class="b-icon b-title b-icon-left" data-title="Close replace options">
                  <svg width="22" height="22" fill="currentColor" style="transition:transform 0.2s ease-in-out;" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g class="style-scope tp-yt-iron-icon"><path d="M12,15.7L5.6,9.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,15.7z" class="style-scope tp-yt-iron-icon"></path></g></svg>
                </div>
              </label>
            </div>
            <div class="b-content">
              <div class="section-upper">
                <div class="field">
                  <input type="text" id="find" autocomplete="off" placeholder="Find">
                  <label for="find" class="b-find f-label" data-dir="next">
                    <svg width="16" height="16" fill="var(--notebook-subx-textcolor)" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g width="24" height="24" viewBox="0 0 24 24" class="style-scope tp-yt-iron-icon"><path d="M20.87 20.17L15.28 14.58C16.35 13.35 17 11.75 17 10C17 6.13 13.87 3 10 3C6.13 3 3 6.13 3 10C3 13.87 6.13 17 10 17C11.75 17 13.35 16.35 14.58 15.29L20.17 20.88L20.87 20.17ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z" class="style-scope tp-yt-iron-icon"></path></g></svg>
                  </label>
                </div>
                <div class="b-icon b-tdopt b-title" data-title="More options" onclick="$(this).toggleClass('active');">
                  <svg style="pointer-events:none;" width="22" height="22" viewBox="0 0 54 14" stroke-width="0" fill="currentColor">
                    <circle cx="9" cy="9" r="3.5" style="transform:translateX(2px);"/>
                    <circle cx="24" cy="9" r="3.5" style="transform:translateX(2px);"/>
                    <circle cx="38" cy="9" r="3.5" style="transform:translateX(2px);"/>
                  </svg>
                </div>
                <div class="controls">
                  <div class="b-icon b-find b-title" data-title="Search down" data-dir="next">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g class="style-scope tp-yt-iron-icon"><polygon points="18.65,11.65 12,18.29 12,4 11,4 11,18.29 4.35,11.65 3.65,12.35 11.5,20.21 19.35,12.35 " class="style-scope tp-yt-iron-icon"></polygon></g></svg>
                  </div>
                  <div class="b-icon b-find b-title" data-title="Search up" data-dir="prev">
                    <svg width="24" height="24" style="transform:rotate(180deg);" fill="currentColor" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g class="style-scope tp-yt-iron-icon"><polygon points="18.65,11.65 12,18.29 12,4 11,4 11,18.29 4.35,11.65 3.65,12.35 11.5,20.21 19.35,12.35 " class="style-scope tp-yt-iron-icon"></polygon></g></svg>
                  </div>
                  <div class="b-icon b-more-opt b-title" data-title="More options" onclick="$(this).toggleClass('show');">
                    <svg style="pointer-events:none;" width="22" viewBox="0 0 64 64" stroke-width="1.5" stroke="currentColor" fill="none">
                      <line x1="49.69" y1="22" x2="58.32" y2="22"/>
                      <line x1="7.68" y1="22" x2="35.69" y2="22"/>
                      <line x1="33" y1="48.03" x2="57.32" y2="48.03"/>
                      <line x1="7.68" y1="48.03" x2="19" y2="48.03"/>
                      <circle cx="42.69" cy="22" r="7"/>
                      <circle cx="26" cy="48.03" r="7"/>
                    </svg>
                    <div class="more-options">
                      <div class="optstyle">
                        <ul>
                          <li class="match-f-case">
                            <label for="matchCase" class="dflex _nbview">
                              <input type="checkbox" class="fr-handler" data-value="matchCase" id="matchCase" hidden>
                              <div class="nbcheck fr-check">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                              </div>
                              <div class="__toggle-option">Match case</div>
                            </label>
                          </li>
                          <li class="wrap-f-around">
                            <label for="wrapAround" class="dflex _nbview">
                              <input type="checkbox" data-value="isWrapAround" class="fr-handler" id="wrapAround" checked hidden>
                              <div class="nbcheck fr-check">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                              </div>
                              <div class="__toggle-option">Wrap around</div>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="b-icon fr-exit b-title" data-title="Exit Find and Replace">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="21" height="21" preserveAspectRatio="xMidYMid meet" focusable="false"><g class="style-scope tp-yt-iron-icon"><path d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z" class="style-scope tp-yt-iron-icon"></path></g></svg>
                </div>
              </div>
              <div class="aria-replace">
                <div class="replace-section">
                  <div class="field">
                    <input type="text" id="replace" autocomplete="off" placeholder="Replace">
                  </div>
                  <div class="b-button">
                    <button class="r-replace" data-global="false">Replace</button>
                    <button class="replace-all" data-global="true">Replce all</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`
  );
}