function settingsTemplate() {
  const base_dir = $("body").attr("data-color-theme");
  return (
    `<span>
      <div class="settings-layout">
        <div class="area-cover"></div>
        <div class="setting-main">
          <div class="settings-content">
            <div class="setting-nav">
              <div class="back-arrow">
                <div class="back-setting" onclick="$('.settings-layout').parent().remove();">
                  <i style="width:22px;height:22px;background-image:url(/themes/img/${base_dir}/arrow_left.png);background-repeat:no-repeat;background-position:center;background-size:100%;"></i>
                </div>
              </div>
              <div class="title">
                <span>Notebook</span>
              </div>
            </div>
            <div class="smain">
              <h1>Settings</h1>
              <div class="settings-cover">
                <div class="adjust-setting flex-1">
                  <ul>
                    <li class="external-list">
                      <div class="__settingtab_opt">
                        <div class="pre-icon">
                          <i style="width:22px;height:22px;background-image:url(/themes/img/${base_dir}/theme.png);background-repeat:no-repeat;background-position:center;background-size:100%;"></i>
                        </div>
                        <div class="textContent">
                          <div class="headtext"><span>App theme</span></div>
                          <div class="ltext">Select which app theme to display</div>
                        </div>
                        <label for="theme_switcher" style="cursor:pointer;">
                          <div class="setting__opt__toggler hov">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                          </div>
                        </label>
                      </div>
                      <input type="checkbox" class="switcher" id="theme_switcher" hidden>
                      <div class="__setting-optinner">
                        <ul class="b-color-theme _FetSeidt">
                          <li>
                            <label for="light">
                              <div class="checkbox">
                                <input type="radio" value="light" class="_2SDW-both" name="color-theme" id="light">
                                <div class="radio"></div>
                              </div>
                              <div class="pretext"><span>Light</span></div>
                            </label>
                          </li>
                          <li>
                            <label for="dark">
                              <div class="checkbox">
                                <input type="radio" value="dark" class="_2SDW-both" name="color-theme" id="dark">
                                <div class="radio"></div>
                              </div>
                              <div class="pretext"><span>Dark</span></div>
                            </label>
                          </li>
                          <li>
                            <label for="default">
                              <div class="checkbox">
                                <input type="radio" value="default" class="_2SDW-both" name="color-theme" id="default">
                                <div class="radio"></div>
                              </div>
                              <div class="pretext"><span>Use system setting</span></div>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class="external-list">
                      <div class="__settingtab_opt">
                        <div class="pre-icon">
                          <i style="width:22px;height:22px;background-image:url(/themes/img/${base_dir}/fonts.png);background-repeat:no-repeat;background-position:center;background-size:100%;"></i>
                        </div>
                        <div class="textContent">
                          <div class="headtext"><span>Font</span></div>
                        </div>
                        <label for="font_selector" style="cursor:pointer;">
                          <div class="setting__opt__toggler hov">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                          </div>
                        </label>
                      </div>
                      <input type="checkbox" class="switcher" id="font_selector" hidden>
                      <div class="__setting-optinner font-control">
                        <div class="family _3Ftexgie _ebrtFei">
                          <div class="_3FeouyeFet">Family</div>
                          <div class="__fontField">
                            <input type="text" name="font-family" class="filter-input" id="family">
                            <div class="fa-cheverone">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                            </div>
                            <div class="boxtoggle ---font-family"></div>
                          </div>
                        </div>
                        <div class="style _3Ftexgie _ebrtFei">
                          <div class="_3FeouyeFet">Style</div>
                          <div class="__fontField">
                            <input type="text" name="font-style" class="filter-input" id="font_style" />
                            <div class="fa-cheverone">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                            </div>
                            <div class="boxtoggle ----font-style"></div>
                          </div>
                        </div>
                        <div class="size _3Ftexgie _ebrtFei">
                          <div class="_3FeouyeFet">Size</div>
                          <div class="__fontField">
                            <input type="text" name="font-size" class="filter-input" min="8" max="22" id="fsize">
                            <div class="fa-cheverone">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                            </div>
                            <div class="boxtoggle ----font-size"></div>
                          </div>
                        </div>
                        <div class="preview-font _ebrtFei">
                          <div>Welcome to Notebook Webapplication</div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="__settingtab_opt">
                        <div class="pre-icon">
                          <i style="width:22px;height:22px;background-image:url(/themes/img/${base_dir}/word_wrap.png);background-repeat:no-repeat;background-position:center;background-size:100%;"></i>
                        </div>
                        <div class="textContent">
                          <div class="headtext"><span>Word wrap</span></div>
                          <div class="ltext">Fixed text within window by default</div>
                        </div>
                        <div class="setting__opt__toggler">
                          <div class="on-off">
                            <input type="checkbox" class="_2SDW-both" name="word-wrap" id="switch" hidden>
                            <label for="switch"><div class="switch"></div></label>
                            <div class="faketext">On</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="__settingtab_opt" style="cursor:default;">
                        <div class="pre-icon">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                        </div>
                        <div class="textContent">
                          <div class="headtext"><span>Opening files</span></div>
                          <div class="ltext">Choosed where your file are opened</div>
                        </div>
                        <div class="setting__opt__toggler">
                          <div class="__fontField ptrd">
                            <div class="fstyle" style="width:150px;">Open in a new tab</div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="about-webapp flex-1">
                  <div class="about-header">
                    <span>About this app</span>
                  </div>
                  <div class="copyright">
                    <div>Webapplication Notebook 24.09.23</div>
                    <div>© 2023 Notebook. All rights reserved.</div>
                  </div>
                  <div class="_efexTery">
                    <button>Webapplication License Terms</button>
                    <button>Notebook Privacy Statement</button>
                    <button onclick="window.location.href='https://github.com/expertmodassir';">Follow on Github</button>
                    <button>Notebook Version 24.09.23</button>
                    <div style="padding:0 14px;">
                      <button class="accptmrg" onclick="window.location.href='http://localhost/mailto:codingmodassir@gmail.com';">Send Feedback</button>
                      <button class="accptmrg">Help</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>`
  );
}
export default settingsTemplate;