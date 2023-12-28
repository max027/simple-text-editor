function preloader() {
  return (
    `<div class="preloader">
      <div class="pre-icon">
        <div class="box">
          <div class="__preloaders-ceils" style="---notebook-preloader-delay: 0.4s"></div>
          <div class="__preloaders-ceils" style="---notebook-preloader-delay: 0.5s"></div>
        </div>
        <div class="box">
          <div class="__preloaders-ceils" style="---notebook-preloader-delay: 0.7s"></div>
          <div class="__preloaders-ceils" style="---notebook-preloader-delay: 0.6s"></div>
        </div>
      </div>
      <div class="pre-text"><h2>Notebook</h2></div>
    </div>`
  );
}
export default preloader;