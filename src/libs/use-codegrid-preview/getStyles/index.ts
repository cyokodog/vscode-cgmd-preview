export const getStyles = () => {
  return `:root {
    --base-color: black;
    --base-link-color: #0c732e;
    --base-content-width: 930px;
    --base-content-side-gap: 47px;
    --base-font-family: sans-serif;
    --base-font-color: #242424;
    --base-font-size: 14px;
    --button-font-color: #fff;
    --button-bg-color: #128938;
    --button-bg-color-hover: #15ce53;
    --bg-gray: #f0f2ee;
    --caution-font-color: #a60000;
    /* scroll-behavior: smooth; */
  }
  /* 狭い画面でのスタイル */
  @media screen and (max-width: 930px) {
    :root {
      --base-content-side-gap: 10px;
    }
  }
  
  /*
        全体のスタイル
        */
  ::selection {
    background: rgba(174, 217, 17, 0.6);
    text-shadow: none;
  }
  
  html {
    height: 100%;
    color: var(--base-color);
    font-family: var(--base-font-family);
    font-size: var(--base-font-size);
    line-height: 1.8;
    text-size-adjust: 100%;
  }
  
  body {
    height: 100%;
    margin: 0;
    background: #fff;
  }
  
  a {
    color: var(--base-link-color);
    transition: color 0.2s;
  }
  
  a:hover,
  a:active {
    transition: color 0s;
  }
  
  iframe[name='google_conversion_frame'] {
    position: absolute;
    top: 0;
    left: -100px;
    width: 1px;
    height: 1px;
  }
  
  .cmn-VisuallyHidden {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
  
  .cmn-Main {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  
  .cmn-Main .cg-SubscriptionNav,
  .cmn-Main .cg-NoticeBar,
  .cmn-Main .cg-SimpleHeader,
  .cmn-Main .cg-GlobalHeader {
    flex: 0 0 auto;
  }
  
  .cmn-Main .cg-SimpleFooter,
  .cmn-Main .cg-GlobalFooter {
    flex: 0 0 auto;
    margin-top: auto;
  }
  
  /* カテゴリーごとのグラデーションの指定 */
  .-Pink1 {
    background: linear-gradient(135deg, #f06292 0%, #e10025 100%);
  }
  .-Pink2 {
    background: linear-gradient(135deg, #ec407a 0%, #d90000 100%);
  }
  .-Pink3 {
    background: linear-gradient(135deg, #e91e63 0%, #d30000 100%);
  }
  .-Pink4 {
    background: linear-gradient(135deg, #d81b60 0%, #b10000 100%);
  }
  .-Purple1 {
    background: linear-gradient(135deg, #ba68c8 0%, #750091 100%);
  }
  .-Purple2 {
    background: linear-gradient(135deg, #9c27b0 0%, #390061 100%);
  }
  .-Purple3 {
    background: linear-gradient(135deg, #ab47bc 0%, #570079 100%);
  }
  .-Purple4 {
    background: linear-gradient(135deg, #8e24aa 0%, #1d0055 100%);
  }
  .-DeepPurple1 {
    background: linear-gradient(135deg, #9575cd 0%, #2b009b 100%);
  }
  .-DeepPurple2 {
    background: linear-gradient(135deg, #673ab7 0%, #00006f 100%);
  }
  .-DeepPurple3 {
    background: linear-gradient(135deg, #7e57c2 0%, #000085 100%);
  }
  .-DeepPurple4 {
    background: linear-gradient(135deg, #5e35b1 0%, #000063 100%);
  }
  .-Indigo1 {
    background: linear-gradient(135deg, #7986cb 0%, #000d97 100%);
  }
  .-Indigo2 {
    background: linear-gradient(135deg, #3f51b5 0%, #00006b 100%);
  }
  .-Indigo3 {
    background: linear-gradient(135deg, #5c6bc0 0%, #000081 99.03%);
  }
  .-Indigo4 {
    background: linear-gradient(135deg, #3949ab 0%, #000057 99.7%);
  }
  .-LightBlue1 {
    background: linear-gradient(135deg, #03a9f4 0%, #0053e9 100%);
  }
  .-LightBlue2 {
    background: linear-gradient(135deg, #039be5 0%, #0037cb 100%);
  }
  .-LightBlue3 {
    background: linear-gradient(135deg, #0288d1 0%, #0011a3 100%);
  }
  .-LightBlue4 {
    background: linear-gradient(135deg, #0277bd 0%, #00007b 100%);
  }
  .-Teal1 {
    background: linear-gradient(135deg, #26a69a 0%, #004d35 100%);
  }
  .-Teal2 {
    background: linear-gradient(135deg, #009688 0%, #002d11 100%);
  }
  .-Teal3 {
    background: linear-gradient(135deg, #00897b 0%, #001300 100%);
  }
  .-Teal4 {
    background: linear-gradient(135deg, #00796b 0%, #000000 100%);
  }
  .-LightGreen1 {
    background: linear-gradient(135deg, #7cb342 0%, #006700 100%);
  }
  .-LightGreen2 {
    background: linear-gradient(135deg, #689f38 0%, #003f00 100%);
  }
  .-LightGreen3 {
    background: linear-gradient(135deg, #558b2f 0%, #001700 100%);
  }
  .-LightGreen4 {
    background: linear-gradient(135deg, #33691e 0%, #000000 99.83%);
  }
  .-Lime1 {
    background: linear-gradient(135deg, #afb42b 0%, #5f6900 100%);
  }
  .-Lime2 {
    background: linear-gradient(135deg, #9e9d24 0%, #3d3b00 100%);
  }
  .-Orange1 {
    background: linear-gradient(135deg, #ff8926 0%, #cc1b00 100%);
  }
  .-Orange2 {
    background: linear-gradient(135deg, #e77c22 0%, #b41800 100%);
  }
  .-Orange3 {
    background: linear-gradient(135deg, #cc612b 0%, #871200 100%);
  }
  .-Orange4 {
    background: linear-gradient(135deg, #a84815 0%, #3d0000 100%);
  }
  .-DeepOrange1 {
    background: linear-gradient(135deg, #ff7043 0%, #ff0000 100%);
  }
  .-DeepOrange2 {
    background: linear-gradient(135deg, #ff5722 0%, #ff0000 100%);
  }
  .-DeepOrange3 {
    background: linear-gradient(135deg, #f4511e 0%, #e90000 100%);
  }
  .-DeepOrange4 {
    background: linear-gradient(135deg, #e64a19 0%, #cd0000 100%);
  }
  .-Red1 {
    background: linear-gradient(135deg, #ef5350 0%, #df0000 100%);
  }
  .-Red2 {
    background: linear-gradient(135deg, #f44336 0%, #e90000 100%);
  }
  .-Red3 {
    background: linear-gradient(135deg, #e53935 0%, #cb0000 100%);
  }
  .-Red4 {
    background: linear-gradient(135deg, #d32f2f 0%, #a70000 100%);
  }
  .-Amber1 {
    background: linear-gradient(135deg, #ffbe26 0%, #b54200 100%);
  }
  .-Amber2 {
    background: linear-gradient(135deg, #d9962b 0%, #8c2700 100%);
  }
  .-Amber3 {
    background: linear-gradient(135deg, #b56e00 0%, #692300 100%);
  }
  .-Amber4 {
    background: linear-gradient(135deg, #8f5600 0%, #260d00 100%);
  }
  .-Green1 {
    background: linear-gradient(135deg, #4caf50 0%, #005f00 100%);
  }
  .-Green2 {
    background: linear-gradient(135deg, #43a047 0%, #004100 100%);
  }
  .-Green3 {
    background: linear-gradient(135deg, #388e3c 0%, #001d00 100%);
  }
  .-Green4 {
    background: linear-gradient(135deg, #2e7d32 0%, #000000 100%);
  }
  .-Cyan1 {
    background: linear-gradient(135deg, #14b7cc 0%, #00799c 100%);
  }
  .-Cyan2 {
    background: linear-gradient(135deg, #11a0b3 0%, #006583 100%);
  }
  .-Cyan3 {
    background: linear-gradient(135deg, #0f8999 0%, #003b4d 100%);
  }
  .-Cyan4 {
    background: linear-gradient(135deg, #0d7b8a 0%, #001319 100%);
  }
  .-Blue1 {
    background: linear-gradient(135deg, #42a5f5 0%, #004beb 100%);
  }
  .-Blue2 {
    background: linear-gradient(135deg, #2196f3 0%, #002de7 100%);
  }
  .-Blue3 {
    background: linear-gradient(135deg, #1e88e5 0%, #0011cb 100%);
  }
  .-Blue4 {
    background: linear-gradient(135deg, #1976d2 0%, #0000a5 100%);
  }
  .-BlueGray1 {
    background: linear-gradient(135deg, #78909c 0%, #002139 100%);
  }
  .-BlueGray2 {
    background: linear-gradient(135deg, #607d8b 0%, #000017 100%);
  }
  .-BlueGray3 {
    background: linear-gradient(135deg, #546e7a 0%, #000000 100%);
  }
  .-BlueGray4 {
    background: linear-gradient(135deg, #455a64 0%, #000000 100%);
  }
  .-Brown1 {
    background: linear-gradient(135deg, #a1887f 0%, #431100 100%);
  }
  .-Brown2 {
    background: linear-gradient(135deg, #8d6e63 0%, #1b0000 100%);
  }
  .-Brown3 {
    background: linear-gradient(135deg, #795548 0%, #000000 100%);
  }
  .-Brown4 {
    background: linear-gradient(135deg, #6d4c41 0%, #000000 100%);
  }
  
  /* ------------------------------------------------------------------------ style4 */
  
  .cg-ToUnRead.svelte-1k7ufzm {
    appearance: none;
    display: inline-flex;
    align-items: center;
    border: 0;
    border-radius: 0;
    padding: 2px;
    background: transparent;
    font: inherit;
    transition: background 0.5s;
    cursor: pointer;
  }
  .cg-ToUnRead.svelte-1k7ufzm:hover {
    background-color: #ffffff4d;
    transition: background 0.2s;
  }
  .cg-ToUnRead_Text.svelte-1k7ufzm {
    color: #fff;
    font-size: 12px;
  }
  .cg-ToUnRead_Icon.svelte-1k7ufzm {
    --fill: #fff;
    --stroke: #fff;
  }
  .cmn-VisuallyHidden.svelte-1k7ufzm {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
  .cg-Article_Head.svelte-1m3q4j0.svelte-1m3q4j0 {
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns:
      minmax(var(--base-content-side-gap), 1fr) [main-start] minmax(auto, 610px)
      [main-end] minmax(var(--base-content-side-gap), 1fr);
    width: 100%;
    min-height: 330px;
    padding-top: 50px;
    padding-bottom: 20px;
    align-items: start;
    color: #fff;
  }
  .cg-Article_HeadInner.svelte-1m3q4j0.svelte-1m3q4j0 {
    grid-column: main;
    display: grid;
    grid-template: 'title ' auto 'cate  ' auto 'desc  ' auto 'author' auto / 1fr;
  }
  .cg-Article_HeadTitle.svelte-1m3q4j0.svelte-1m3q4j0 {
    grid-area: title;
    margin: 0;
    font-weight: 400;
    text-align: center;
  }
  .cg-Article_HeadSeries.svelte-1m3q4j0.svelte-1m3q4j0 {
    position: relative;
    display: inline-block;
    color: inherit;
    text-decoration: none;
    font-size: 18px;
    line-height: 1;
  }
  .cg-Article_HeadSeries.svelte-1m3q4j0.svelte-1m3q4j0:after {
    content: '';
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    height: 1px;
    background: #fff;
    transform: translateY(2px) scaleX(0.1);
    transition: all 0.6s cubic-bezier(0.3, 1.4, 0.6, 1);
  }
  .cg-Article_HeadSeries.svelte-1m3q4j0.svelte-1m3q4j0:hover:after {
    opacity: 1;
    transform: scaleX(1);
  }
  .cg-Article_HeadPart.svelte-1m3q4j0.svelte-1m3q4j0 {
    display: inline-block;
    line-height: 1;
    font-size: 18px;
  }
  .cg-Article_HeadPart.svelte-1m3q4j0.svelte-1m3q4j0:before {
    display: inline-block;
    content: '';
    width: 0;
    height: 18px;
    border-left: 1px solid #fff;
    margin-top: -4px;
    margin-right: 5px;
    vertical-align: middle;
  }
  .cg-Article_HeadTitleText.svelte-1m3q4j0.svelte-1m3q4j0 {
    display: block;
    margin-top: 15px;
    line-height: 1.2;
    font-size: 28px;
    font-feature-settings: 'palt';
  }
  .cg-Article_HeadCategoriesAndDate.svelte-1m3q4j0.svelte-1m3q4j0 {
    grid-area: cate;
    text-align: center;
    margin-top: 10px;
  }
  .cg-Article_HeadCategoryContainer.svelte-1m3q4j0.svelte-1m3q4j0 {
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    margin: 0;
    line-height: 1.2;
  }
  .cg-Article_HeadDateContainer.svelte-1m3q4j0.svelte-1m3q4j0 {
    grid-area: date;
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 0 20px;
    line-height: 1.2;
  }
  .cg-Article_HeadDateText.svelte-1m3q4j0.svelte-1m3q4j0 {
    font-size: 12px;
    display: inline-block;
    padding: 2px 0;
    vertical-align: middle;
  }
  .cg-Article_HeadDescription.svelte-1m3q4j0.svelte-1m3q4j0 {
    grid-area: desc;
    margin-top: 30px;
    margin-bottom: 0;
    line-height: 1.4;
  }
  .cg-Article_HeadAuthorContainer.svelte-1m3q4j0.svelte-1m3q4j0 {
    grid-area: author;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
  }
  .cg-Article_HeadAuthorIcons.svelte-1m3q4j0.svelte-1m3q4j0 {
    --author-icon-size: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, var(--author-icon-size));
    grid-auto-columns: var(--author-icon-size);
    grid-auto-rows: var(--author-icon-size);
    gap: 1px;
    width: 100%;
    margin: 0;
    padding: 5px 0;
    list-style: none;
  }
  .cg-Article_HeadAuthorIcon.svelte-1m3q4j0.svelte-1m3q4j0 {
    display: block;
  }
  .cg-Article_HeadAuthorIconLink.svelte-1m3q4j0.svelte-1m3q4j0 {
    display: block;
    color: inherit;
    text-decoration: none;
  }
  .cg-Article_HeadAuthorIconImg.svelte-1m3q4j0.svelte-1m3q4j0 {
    display: block;
    border-radius: 100%;
  }
  .cg-Article_HeadAuthor.svelte-1m3q4j0.svelte-1m3q4j0 {
    display: flex;
    align-items: center;
  }
  .cg-Article_HeadAuthorLink.svelte-1m3q4j0.svelte-1m3q4j0 {
    display: grid;
    column-gap: 10px;
    row-gap: 3px;
    grid-template: 'img name    ' auto 'img position' auto / auto 1fr;
    align-items: center;
    color: inherit;
    text-decoration: none;
    padding: 5px;
    transition: background 0.5s;
  }
  .cg-Article_HeadAuthorLink.svelte-1m3q4j0.svelte-1m3q4j0:hover {
    background-color: #ffffff1a;
    transition: background 0.2s;
  }
  .cg-Article_HeadAuthorImg.svelte-1m3q4j0.svelte-1m3q4j0 {
    grid-area: img;
    border-radius: 100%;
  }
  .cg-Article_HeadAuthorName.svelte-1m3q4j0.svelte-1m3q4j0 {
    grid-area: name;
    font-size: 14px;
    line-height: 1;
  }
  .cg-Article_HeadAuthorPosition.svelte-1m3q4j0.svelte-1m3q4j0 {
    grid-area: position;
    font-size: 10px;
    line-height: 1;
  }
  .cg-Article_HeadNav.svelte-1m3q4j0.svelte-1m3q4j0 {
    grid-column: 1 / -1;
    position: absolute;
    top: 20px;
    left: 0;
    display: grid;
    grid-template-columns:
      minmax(var(--base-content-side-gap), 1fr) [left-start] minmax(
        auto,
        calc(var(--base-content-width) / 2)
      )
      [left-end right-start] minmax(auto, calc(var(--base-content-width) / 2))
      [right-end] minmax(var(--base-content-side-gap), 1fr);
    width: 100%;
  }
  .cg-Article_HeadSeriesListLink.svelte-1m3q4j0.svelte-1m3q4j0 {
    grid-column: left;
    justify-self: start;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
  }
  .cg-Article_HeadSeriesListLinkIcon.svelte-1m3q4j0.svelte-1m3q4j0 {
    fill: #fff;
    margin-right: 5px;
    transition: transform 0.4s cubic-bezier(0.3, 2, 0.6, 1);
  }
  .cg-Article_HeadSeriesListLink.svelte-1m3q4j0:hover
    .cg-Article_HeadSeriesListLinkIcon.svelte-1m3q4j0 {
    transform: translate(-2px) scale(1.2);
    transition-duration: 0.4s;
  }
  .cg-Article_HeadSeriesListLinkText.svelte-1m3q4j0.svelte-1m3q4j0 {
    color: #fff;
    font-size: 12px;
  }
  .cg-Article_ReadStatusButtonContainer.svelte-1m3q4j0.svelte-1m3q4j0 {
    grid-column: right;
    justify-self: end;
    appearance: none;
  }
  .cg-Article_SeriesNav.svelte-uzgvxa {
    display: grid;
    grid-template-columns:
      minmax(var(--base-content-side-gap), 1fr) [main-start] minmax(
        auto,
        var(--base-content-width)
      )
      [main-end] minmax(var(--base-content-side-gap), 1fr);
    width: 100%;
    margin-bottom: 11px;
  }
  .cg-Article_SeriesNavInner.svelte-uzgvxa {
    grid-column: main;
    justify-self: end;
    position: relative;
    width: 290px;
  }
  .cg-Article_SeriesNavToggler.svelte-uzgvxa {
    appearance: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    border: 0;
    border-radius: 0;
    background: #e1e1e1;
    font: inherit;
    outline-offset: -3px;
    cursor: pointer;
  }
  .cg-Article_SeriesNavTogglerIcon {
    fill: #000;
    margin-right: 5px;
  }
  .cg-Article_SeriesNavTogglerText.svelte-uzgvxa {
    display: block;
  }
  .cg-Article_SeriesNavBody.svelte-uzgvxa {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    background: #e1e1e1;
    padding-bottom: 20px;
  }
  .cg-Article_SeriesNavList.svelte-uzgvxa {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 315px;
    overflow-y: auto;
  }
  .cg-Article_SeriesNavListItem.svelte-uzgvxa {
    font-size: 12px;
  }
  .cg-Article_SeriesNavListLink.svelte-uzgvxa {
    display: block;
    padding: 6px 20px;
    text-decoration: none;
    color: inherit;
    transition: background 0.2s;
    outline-offset: -3px;
  }
  .cg-Article_SeriesNavListLink.svelte-uzgvxa:hover {
    background-color: #686868;
    color: #fff;
    transition: background 0.1s;
  }
  .cg-Toc:where(.astro-B3KUQDIL) {
    grid-column: main;
    padding: 30px;
    border-radius: 5px;
    background-color: var(--bg-gray);
  }
  .cg-Toc_Title:where(.astro-B3KUQDIL) {
    margin: 0 0 20px;
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
  }
  .cg-Toc:where(.astro-B3KUQDIL) ol:where(.astro-B3KUQDIL) {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .cg-Toc:where(.astro-B3KUQDIL) li:where(.astro-B3KUQDIL) {
    line-height: 1.4;
  }
  .cg-Toc:where(.astro-B3KUQDIL)
    li:where(.astro-B3KUQDIL)
    + li:where(.astro-B3KUQDIL) {
    margin-top: 10px;
  }
  .cg-Toc:where(.astro-B3KUQDIL) a:where(.astro-B3KUQDIL) {
    display: inline-flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
  .cg-Toc:where(.astro-B3KUQDIL) a:where(.astro-B3KUQDIL):before {
    display: block;
    content: url('data:image/svg+xml,<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.83317 0.200012L6.49984 4.83022L11.1665 0.200012L12.3332 1.36668L6.49984 7.20001L0.666504 1.36668L1.83317 0.200012Z" fill="black"/></svg>');
    margin-right: 5px;
  }
  @media screen and (max-width: 930px) {
    .cg-Toc:where(.astro-B3KUQDIL) {
      grid-column: full;
    }
  }
  .cg-CGMarkdown {
    color:black;
    grid-column: main;
    display: grid;
    grid-template-columns:
      [full-start] minmax(0, 40px) [main-start] minmax(300px, 670px)
      [main-end] minmax(0, 40px) [full-end];
    font-size: 16px;
    hanging-punctuation: allow-end;
  }
  .cg-CGMarkdown cg-livecode,
  .cg-CGMarkdown cg-column,
  .cg-CGMarkdown cg-code-block,
  .cg-CGMarkdown cg-note,
  .cg-CGMarkdown cg-imgbox,
  .cg-CGMarkdown cg-audio,
  .cg-CGMarkdown cg-video {
    display: block;
  }
  .cg-CGMarkdown > * {
    grid-column: main;
    min-width: 0;
    margin-top: 0;
    margin-bottom: 50px;
  }
  .cg-CGMarkdown > :last-child {
    margin-bottom: 0;
  }
  .cg-CGMarkdown img {
    max-width: 100%;
  }
  .cg-CGMarkdown > pre,
  .cg-CGMarkdown > pre.code {
    grid-column: full;
  }
  .cg-CGMarkdown h2 {
    margin: 0 0 30px;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    line-height: 1.4;
    font-feature-settings: 'palt';
  }
  .cg-CGMarkdown h2:before {
    display: block;
    content: url('data:image/svg+xml,<svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25 10C27.7614 10 30 7.76142 30 5C30 2.23858 27.7614 0 25 0C22.2386 0 20 2.23858 20 5C20 7.76142 22.2386 10 25 10Z" fill="black"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M45 10C47.7614 10 50 7.76142 50 5C50 2.23858 47.7614 0 45 0C42.2386 0 40 2.23858 40 5C40 7.76142 42.2386 10 45 10Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z" fill="black"/></svg>');
    height: 12px;
    margin-bottom: 50px;
  }
  .cg-CGMarkdown h2:first-of-type {
    padding-top: 60px;
  }
  .cg-CGMarkdown h2:first-of-type:before {
    content: none;
  }
  .cg-CGMarkdown h3 {
    margin: 0 0 15px;
    font-size: 20px;
    font-weight: 500;
    font-feature-settings: 'palt';
  }
  .cg-CGMarkdown h4 {
    margin: 0 0 15px;
    font-size: 18px;
    font-weight: 500;
    font-feature-settings: 'palt';
  }
  .cg-CGMarkdown h5,
  .cg-CGMarkdown h6 {
    margin: 0 0 15px;
    font-size: 16px;
    font-weight: 500;
    font-feature-settings: 'palt';
  }
  .cg-CGMarkdown p {
    margin: 0 0 30px;
    line-height: 1.7;
  }
  .cg-CGMarkdown li p {
    margin: 0;
  }
  .cg-CGMarkdown > p + *:not(p) {
    margin-top: 20px;
  }
  .cg-CGMarkdown ol,
  .cg-CGMarkdown ul {
    padding-left: 20px;
  }
  .cg-CGMarkdown li ul,
  .cg-CGMarkdown li ol {
    margin-bottom: 0;
  }
  .cg-CGMarkdown li li ul,
  .cg-CGMarkdown li li ol {
    font-size: 14px;
  }
  .cg-CGMarkdown ul {
    list-style-image: url('data:image/svg+xml,<svg width="8" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z" fill="black"/></svg>');
  }
  .cg-CGMarkdown ul ul {
    margin-top: 5px;
    list-style-image: url('data:image/svg+xml,<svg width="8" height="11" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 4C7.5 5.933 5.933 7.5 4 7.5C2.067 7.5 0.5 5.933 0.5 4C0.5 2.067 2.067 0.5 4 0.5C5.933 0.5 7.5 2.067 7.5 4Z" fill="white" stroke="black"/></svg>');
  }
  .cg-CGMarkdown ul ul ul {
    list-style-image: url('data:image/svg+xml,<svg width="6" height="12" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="6" height="2" fill="black"/></svg>');
  }
  .cg-CGMarkdown li + li {
    margin-top: 5px;
  }
  .cg-CGMarkdown blockquote {
    margin-inline: 0;
    border-left: 10px solid #d8d8d8;
    padding-left: 15px;
    color: #333;
  }
  .cg-CGMarkdown blockquote :last-child {
    margin-bottom: 0;
  }
  .cg-CGMarkdown blockquote p + p,
  .cg-CGMarkdown blockquote p + blockquote {
    margin-top: 15px;
  }
  .cg-CGMarkdown table {
    --border-color: #ccc;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border-width: 1px 0 0 1px;
    border-style: solid;
    border-color: var(--border-color);
    overflow-wrap: break-word;
  }
  .cg-CGMarkdown th {
    font-weight: 400;
    background-color: var(--bg-gray);
  }
  .cg-CGMarkdown td,
  .cg-CGMarkdown th {
    padding: 8px 10px;
    border-width: 0 1px 1px 0;
    border-style: solid;
    border-color: var(--border-color);
  }
  .cg-CGMarkdown code {
    padding: 2px;
    font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
    background-color: #f5f2f0;
    overflow-wrap: anywhere;
  }
  .cg-CGMarkdown pre code {
    padding: initial;
    background-color: initial;
  }
  .cg-CGMarkdown hr {
    width: 100%;
    border-width: 1px 0 0 0;
    border-style: dotted;
    border-color: #333;
  }
  .cg-CGMarkdown > cg-code-block {
    grid-column: full;
  }
  .cg-CGMarkdown > cg-code-block * {
    font-size: 14px;
  }
  .cg-CGMarkdown > cg-code-block > h6,
  .cg-CGMarkdown > cg-code-block > h5,
  .cg-CGMarkdown > cg-code-block > h4,
  .cg-CGMarkdown > cg-code-block > h3,
  .cg-CGMarkdown > cg-code-block > h2,
  .cg-CGMarkdown > cg-code-block > h1 {
    margin-bottom: 0;
    height: auto;
  }
  .cg-CGMarkdown > cg-code-block > pre {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .cg-CGMarkdown > cg-code-block > pre > code {
    font-family: Roboto Mono, Consolas, Monaco, Andale Mono, Ubuntu Mono,
      monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 4;
    color: #111;
  }
  .cg-CGMarkdown cg-note {
    display: block;
  }
  .cg-CGMarkdown cg-note * {
    font-size: 14px;
  }
  .cg-CGMarkdown cg-note p {
    margin-bottom: 1em;
  }
  .cg-CGMarkdown cg-note :last-child {
    margin-bottom: 0;
  }
  .cg-CGMarkdown cg-column {
    display: block;
  }
  .cg-CGMarkdown cg-column * {
    font-size: 14px;
  }
  .cg-CGMarkdown cg-column > * {
    margin-bottom: 15px;
  }
  .cg-CGMarkdown cg-column > :is(h3, h4, h5, h6) {
    font-weight: 700;
  }
  .cg-CGMarkdown cg-column > :last-child {
    margin-bottom: 0;
  }
  .cg-CGMarkdown cg-column > cg-code-block > * {
    --code-block-pre-side-padding: 15px;
  }
  .cg-CGMarkdown cg-column > cg-code-block > pre {
    padding-top: 0;
    padding-bottom: 15px;
  }
  .cg-CGMarkdown > cg-livecode {
    grid-column: full;
    display: block;
  }
  .cg-CGMarkdown cg-imgbox {
    display: block;
  }
  .cg-CGMarkdown cg-imgbox * {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .cg-CGMarkdown cg-imgbox :last-child {
    margin-bottom: 0;
  }
  .cg-CGMarkdown iframe {
    width: 100%;
    display: block;
  }
  .cg-Article_FootAuthors:where(.astro-TCYQBU7P) {
    display: grid;
    grid-template-columns:
      minmax(var(--base-content-side-gap), 1fr) [main-start] minmax(auto, 670px)
      [main-end] minmax(var(--base-content-side-gap), 1fr);
    width: 100%;
    row-gap: 20px;
    margin-bottom: 60px;
  }
  .cg-Article_FootButtonContainer:where(.astro-TCYQBU7P) {
    display: grid;
    grid-template-columns:
      minmax(var(--base-content-side-gap), 1fr) [main-start] minmax(auto, 670px)
      [main-end] minmax(var(--base-content-side-gap), 1fr);
    width: 100%;
    margin-bottom: 100px;
  }
  .cg-Article_FootButtonContainerInner:where(.astro-TCYQBU7P) {
    grid-column: main;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 30px;
    row-gap: 10px;
  }
  .cg-ArticleContactButton:where(.astro-TCYQBU7P) {
    appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: #666666;
    color: #fff;
    font: inherit;
    text-decoration: none;
    transition: background 0.5s;
  }
  .cg-ArticleContactButton:where(.astro-TCYQBU7P):hover {
    background-color: #777;
    transition: background 0.2s;
  }
  .cg-ArticleContactButton_Icon:where(.astro-TCYQBU7P) {
    fill: #fff;
    margin-right: 5px;
  }
  .cg-ArticleContactButton_Text:where(.astro-TCYQBU7P) {
    line-height: 1;
  }
  .cg-ArticleTweetArticleButton:where(.astro-TCYQBU7P) {
    display: inline-flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    background: #666666;
    color: #fff;
    text-decoration: none;
    transition: background 0.5s;
  }
  .cg-ArticleTweetArticleButton:where(.astro-TCYQBU7P):hover {
    background-color: #777;
    transition: background 0.2s;
  }
  .cg-ArticleTweetArticleButton_Icon:where(.astro-TCYQBU7P) {
    fill: #fff;
    margin-right: 5px;
  }
  .cg-ArticleTweetArticleButton_Text:where(.astro-TCYQBU7P) {
    line-height: 1;
  }
  .cg-Article_FootSubscription:where(.astro-TCYQBU7P) {
    display: grid;
    grid-template-columns:
      [full-start] minmax(var(--base-content-side-gap), 1fr) [main-start] minmax(
        auto,
        930px
      )
      [main-end] minmax(var(--base-content-side-gap), 1fr) [full-end];
    width: 100%;
    margin-top: 60px;
    margin-bottom: 100px;
  }
  .cg-Article_FootSubscriptionInner:where(.astro-TCYQBU7P) {
    grid-column: main;
    padding: 60px 10px;
    border: 1px solid #000;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
  }
  .cg-Article_FootSubscriptionTitle:where(.astro-TCYQBU7P) {
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 400;
    font-feature-settings: 'palt';
  }
  .cg-Article_FootSubscriptionLinkContainer:where(.astro-TCYQBU7P) {
    margin: 0;
    text-align: center;
  }
  .cg-Article_FootSubscriptionLink:where(.astro-TCYQBU7P) {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 290px;
    max-width: 670px;
    min-height: 60px;
    padding: 0 15px;
    margin: 0 auto;
    border-radius: 2px;
    color: var(--button-font-color);
    background-color: var(--button-bg-color);
    text-decoration: none;
    transition: background-color 0.2s;
    font-size: 18px;
  }
  .cg-Article_FootSubscriptionLink:where(.astro-TCYQBU7P):hover {
    background-color: var(--button-bg-color-hover);
  }
  .cg-Article_FootSubscriptionText:where(.astro-TCYQBU7P) {
    margin: 20px 0 0;
    text-align: center;
  }
  .cg-Article_Pager:where(.astro-5IYK7OB3) {
    display: grid;
    grid-template-columns:
      minmax(var(--base-content-side-gap), 1fr) [main-start] minmax(auto, 670px)
      [main-end] minmax(var(--base-content-side-gap), 1fr);
    width: 100%;
    margin-bottom: 50px;
  }
  .cg-Article_PagerInner:where(.astro-5IYK7OB3) {
    --line-color: #000;
    --line-bg-color: #fff;
    grid-column: main;
    display: grid;
    grid-template-columns: [prev] 1fr [next] 1fr;
    column-gap: 15px;
    width: 100%;
    padding-top: 20px;
    background-image: linear-gradient(
      to bottom,
      var(--line-color),
      var(--line-color) 1px,
      var(--line-bg-color) 1px,
      var(--line-bg-color) 3px,
      var(--line-color) 3px,
      var(--line-color) 6px,
      var(--line-bg-color) 6px,
      var(--line-bg-color)
    );
    background-repeat: repeat-x;
  }
  .cg-Article_PagerLink:where(.astro-5IYK7OB3) {
    display: inline-grid;
    align-items: center;
    column-gap: 5px;
    text-decoration: none;
    color: inherit;
    line-height: 1.2;
  }
  .cg-Article_PagerLink:where(.astro-5IYK7OB3).-prev {
    grid-area: prev;
    grid-template: 'icon text' auto / auto 1fr;
  }
  .cg-Article_PagerLink:where(.astro-5IYK7OB3).-next {
    grid-area: next;
    grid-template: 'text icon' auto / 1fr auto;
    text-align: right;
  }
  .cg-Article_PagerLinkIcon:where(.astro-5IYK7OB3) {
    grid-area: text;
    fill: #000;
    transition: transform 0.4s cubic-bezier(0.3, 2, 0.6, 1);
  }
  .cg-Article_PagerLink:where(.astro-5IYK7OB3).-prev:hover
    .cg-Article_PagerLinkIcon:where(.astro-5IYK7OB3) {
    transform: translate(-2px) scale(1.2);
    transition-duration: 0.4s;
  }
  .cg-Article_PagerLink:where(.astro-5IYK7OB3).-next:hover
    .cg-Article_PagerLinkIcon:where(.astro-5IYK7OB3) {
    transform: translate(2px) scale(1.2);
    transition-duration: 0.4s;
  }
  .cg-Article_PagerLinkIcon:where(.astro-5IYK7OB3) {
    grid-area: icon;
    fill: #000;
  }
  .cg-ArticleSeriesFavoriteButton.svelte-1f3pufs.svelte-1f3pufs {
    --fill: white;
    --fill-opacity: 0.3;
    --stroke: white;
    -webkit-appearance: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 320px;
    height: 60px;
    background: rgba(0, 0, 0, 0.4);
    font: inherit;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .cg-ArticleSeriesFavoriteButton.-favorite.svelte-1f3pufs.svelte-1f3pufs {
    --fill-opacity: 1;
  }
  .cg-ArticleSeriesFavoriteButton.svelte-1f3pufs svg.svelte-1f3pufs {
    margin-right: 10px;
  }
  .cg-Article_ArticleSeriesContainer.svelte-qnjo88 {
    margin-bottom: 100px;
  }
  .cg-ArticleSeries.svelte-qnjo88 {
    display: grid;
    justify-items: center;
    grid-template-columns:
      minmax(var(--base-content-side-gap), 1fr) [main-start] minmax(auto, 870px)
      [main-end] minmax(var(--base-content-side-gap), 1fr);
    width: 100%;
    padding: 30px 0;
    color: #fff;
  }
  .cg-ArticleSeries_Title.svelte-qnjo88 {
    grid-column: main;
    margin: 0 0 8px;
    font-size: 28px;
    font-weight: 400;
    font-feature-settings: 'palt';
    line-height: 1.2;
    text-align: center;
  }
  .cg-ArticleSeries_TitleLink.svelte-qnjo88 {
    position: relative;
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }
  .cg-ArticleSeries_TitleLink.svelte-qnjo88:after {
    content: '';
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    height: 1px;
    background: #fff;
    transform: translateY(2px) scaleX(0.1);
    transition: all 0.6s cubic-bezier(0.3, 1.4, 0.6, 1);
  }
  .cg-ArticleSeries_TitleLink.svelte-qnjo88:hover:after {
    opacity: 1;
    transform: scaleX(1);
  }
  .cg-ArticleSeries_CategoryContainer.svelte-qnjo88 {
    grid-column: main;
    font-size: 12px;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  .cg-ArticleSeries_FavoriteButtonContainer.svelte-qnjo88 {
    grid-column: main;
    width: 100%;
    max-width: 320px;
    margin-bottom: 18px;
  }
  .cg-ArticleSeries_List.svelte-qnjo88 {
    grid-column: main;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    column-count: 2;
    gap: 30px;
  }
  .cg-ArticleSeries_ListItem.svelte-qnjo88 {
    border-width: 1px 0 1px 0;
    border-style: solid;
    border-color: #d8d8d8;
    margin-top: -1px;
    break-inside: avoid;
  }
  .cg-ArticleSeries_ListItemLink.svelte-qnjo88 {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 5px;
    min-height: 54px;
    padding: 10px;
    background-color: #fff0;
    transition: background 0.5s;
    color: inherit;
    text-decoration: none;
    line-height: 1.2;
  }
  .cg-ArticleSeries_ListItemLink.svelte-qnjo88:hover {
    background-color: #fff3;
    transition: background 0.2s;
  }
  .cg-ArticleSeries_ListItemLink.-unread.svelte-qnjo88 {
    background-color: #fff3;
  }
  .cg-ArticleSeries_ListItemLink.-unread.svelte-qnjo88:hover {
    background-color: #ffffff4d;
  }
  .cg-ArticleSeries_ListItemExposeIcon.svelte-qnjo88 {
    --fill: #fff;
  }
  .cg-ArticleSeries_ListItemPart.svelte-qnjo88 {
    flex: 0 0 auto;
    min-width: 50px;
  }
  .cg-ArticleSeries_ListItemTitle.svelte-qnjo88 {
    flex: 1 1 auto;
  }
  .cg-ArticleSeries_ListItemDate.svelte-qnjo88 {
    flex: 0 0 auto;
    font-size: 10px;
    line-height: 1;
  }
  .cg-ArticleSeries_AuthorIcons.svelte-qnjo88 {
    --author-icon-size: 30px;
    grid-column: main;
    display: grid;
    grid-template-columns: repeat(auto-fit, var(--author-icon-size));
    grid-auto-columns: var(--author-icon-size);
    grid-auto-rows: var(--author-icon-size);
    gap: 1px;
    width: 100%;
    margin: 7px 0 0;
    padding: 5px 0;
    list-style: none;
  }
  .cg-ArticleSeries_AuthorIcon.svelte-qnjo88 {
    display: block;
  }
  .cg-ArticleSeries_AuthorIconLink.svelte-qnjo88 {
    display: block;
    color: inherit;
    text-decoration: none;
  }
  .cg-ArticleSeries_AuthorIconImg.svelte-qnjo88 {
    display: block;
    border-radius: 100%;
  }
  .cg-ArticleSeries_Author.svelte-qnjo88 {
    grid-column: main;
    display: flex;
    align-items: center;
    justify-self: start;
    margin-top: 10px;
  }
  .cg-ArticleSeries_AuthorLink.svelte-qnjo88 {
    display: grid;
    column-gap: 10px;
    row-gap: 3px;
    grid-template: 'img name    ' auto 'img position' auto / auto 1fr;
    align-items: center;
    color: inherit;
    text-decoration: none;
    padding: 5px;
    transition: background 0.5s;
  }
  .cg-ArticleSeries_AuthorLink.svelte-qnjo88:hover {
    background-color: #ffffff1a;
    transition: background 0.2s;
  }
  .cg-ArticleSeries_AuthorImg.svelte-qnjo88 {
    grid-area: img;
    border-radius: 100%;
  }
  .cg-ArticleSeries_AuthorName.svelte-qnjo88 {
    grid-area: name;
    font-size: 14px;
    line-height: 1;
  }
  .cg-ArticleSeries_AuthorPosition.svelte-qnjo88 {
    grid-area: position;
    font-size: 10px;
    line-height: 1;
  }
  @media screen and (max-width: 930px) {
    .cg-ArticleSeries_List.svelte-qnjo88 {
      column-count: 1;
    }
    .cg-ArticleSeries_ListItemLink.svelte-qnjo88 {
      flex-wrap: wrap;
    }
    .cg-ArticleSeries_ListItemDate.svelte-qnjo88 {
      width: 100%;
      text-align: right;
    }
  }
  .cg-RelationalSerieses.svelte-16lq1bu {
    display: grid;
    grid-template-columns:
      minmax(var(--base-content-side-gap), 1fr) [main-start] minmax(
        auto,
        var(--base-content-width)
      )
      [main-end] minmax(var(--base-content-side-gap), 1fr);
    width: 100%;
  }
  .cg-RelationalSerieses_Title.svelte-16lq1bu {
    grid-column: main;
    display: grid;
  }
  .cg-RelationalSerieses_TitleText.svelte-16lq1bu {
    margin: 0 0 24px;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    line-height: 1;
  }
  .cg-RelationalSerieses_Inner.svelte-16lq1bu {
    grid-column: main;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  .cg-Article_FootAuthor:where(.astro-HXLEI5NU) {
    grid-column: main;
    display: grid;
    grid-template:
      '.    . .           .     description' auto 'icon . name        .     description' auto 'icon . affiliation .     description' auto 'icon . title       .     description' auto '.    . .           .     description' auto / 80px 10px minmax(
        auto,
        160px
      )
      20px minmax(140px, 1fr);
  }
  .cg-Article_FootAuthorLink:where(.astro-HXLEI5NU) {
    display: contents;
    color: inherit;
    text-decoration: none;
  }
  .cg-Article_FootAuthorImg:where(.astro-HXLEI5NU) {
    grid-area: icon;
    align-self: center;
    border-radius: 100%;
  }
  .cg-Article_FootAuthorName:where(.astro-HXLEI5NU) {
    grid-area: name;
    align-self: end;
    font-size: 18px;
    line-height: 1;
  }
  .cg-Article_FootAuthorAffiliation:where(.astro-HXLEI5NU) {
    grid-area: affiliation;
    font-size: 12px;
    line-height: 1;
    align-self: end;
  }
  .cg-Article_FootAuthorTitle:where(.astro-HXLEI5NU) {
    grid-area: title;
    align-self: start;
    font-size: 12px;
    line-height: 1;
  }
  .cg-Article_FootAuthorDescription:where(.astro-HXLEI5NU) {
    grid-area: description;
    border-left: 1px solid #000;
    padding-left: 20px;
    margin: 0;
    font-size: 12px;
    line-height: 1.4;
  }
  @media screen and (max-width: 930px) {
    .cg-Article_FootAuthor:where(.astro-HXLEI5NU) {
      grid-template: 'icon        .           name       ' auto 'icon        .           affiliation' auto 'icon        .           title      ' auto '.           .           .          ' auto 'description description description' auto / 80px 10px 1fr;
    }
    .cg-Article_FootAuthorDescription:where(.astro-HXLEI5NU) {
      border-left: 0;
      padding-left: 0;
    }
  }
  .cg-ArticleSubscriptionMessage:where(.astro-BE3C2X65) {
    grid-column: full;
    display: grid;
    grid-template-columns:
      [full-start] minmax(var(--base-content-side-gap), 1fr) [main-start] minmax(
        auto,
        930px
      )
      [main-end] minmax(var(--base-content-side-gap), 1fr) [full-end];
    width: 100%;
    margin-top: 60px;
  }
  .cg-ArticleSubscriptionMessage_Inner:where(.astro-BE3C2X65) {
    grid-column: main;
    padding: 60px 10px;
    border: 1px solid #000;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
  }
  .cg-ArticleSubscriptionMessage_Title:where(.astro-BE3C2X65) {
    margin: 0 0 40px;
    font-feature-settings: 'palt';
    font-weight: 400;
    font-size: 32px;
  }
  .cg-ArticleSubscriptionMessage_Text1:where(.astro-BE3C2X65) {
    display: block;
    margin: 0;
    text-align: center;
    line-height: 1;
  }
  .cg-ArticleSubscriptionMessage_Text1:where(.astro-BE3C2X65)
    b:where(.astro-BE3C2X65) {
    font-size: 36px;
    font-weight: 500;
  }
  .cg-ArticleSubscriptionMessage_Text2:where(.astro-BE3C2X65) {
    display: block;
    font-size: 36px;
    margin: 15px 0;
    text-align: center;
    line-height: 1;
  }
  .cg-ArticleSubscriptionMessage_Text3:where(.astro-BE3C2X65) {
    display: block;
    margin: 0;
    text-align: center;
    line-height: 1.4;
  }
  .cg-ArticleSubscriptionMessage_Text4:where(.astro-BE3C2X65) {
    display: block;
    margin: 0 0 50px;
    text-align: center;
    line-height: 1.4;
  }
  .cg-ArticleSubscriptionMessage_ButtonContainer:where(.astro-BE3C2X65) {
    display: flex;
    justify-content: center;
    max-width: 640px;
    margin: 0 auto 50px;
  }
  .cg-ArticleSubscriptionMessage_SubscriptionButton:where(.astro-BE3C2X65) {
    flex: 1 1 auto;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 290px;
    width: 100%;
    height: 60px;
    margin: 0 15px;
    padding: 0 15px;
    border-radius: 2px;
    color: var(--button-font-color);
    background-color: var(--button-bg-color);
    text-decoration: none;
    transition: background-color 0.2s;
    font: inherit;
  }
  .cg-ArticleSubscriptionMessage_SubscriptionButton:where(.astro-BE3C2X65):hover {
    background-color: var(--button-bg-color-hover);
  }
  .cg-ArticleSubscriptionMessage_LoginButtonContainer:where(.astro-BE3C2X65) {
    display: contents;
  }
  .cg-ArticleSubscriptionMessage_LoginButton:where(.astro-BE3C2X65) {
    flex: 1 1 auto;
    box-sizing: border-box;
    max-width: 290px;
    width: 100%;
    height: 60px;
    margin: 0 15px;
    border: 1px solid #000;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 0.2s;
    display: inline-block;
  }
  .cg-ArticleSubscriptionMessage_LoginButton:where(.astro-BE3C2X65):hover {
    background-color: #0000001a;
  }
  .cg-ArticleSubscriptionMessage_LoginButton:where(.astro-BE3C2X65)
    a:where(.astro-BE3C2X65) {
    box-sizing: border-box;
    -webkit-appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: var(--button-height, 100%);
    padding: var(--button-padding, 0);
    border: 0;
    border-radius: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }
  @media screen and (max-width: 750px) {
    .cg-ArticleSubscriptionMessage_ButtonContainer:where(.astro-BE3C2X65) {
      display: block;
      max-width: 100%;
    }
    .cg-ArticleSubscriptionMessage_SubscriptionButton:where(.astro-BE3C2X65) {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 30px;
    }
    .cg-ArticleSubscriptionMessage_LoginButton:where(.astro-BE3C2X65) {
      margin-left: 0;
      margin-right: 0;
    }
  }
  .cg-ArticleSubscriptionMessage:where(.astro-2KW54WZA) {
    grid-column: full;
    display: grid;
    grid-template-columns:
      [full-start] minmax(var(--base-content-side-gap), 1fr) [main-start] minmax(
        auto,
        930px
      )
      [main-end] minmax(var(--base-content-side-gap), 1fr) [full-end];
    width: 100%;
    margin-top: 60px;
  }
  .cg-ArticleSubscriptionMessage_Inner:where(.astro-2KW54WZA) {
    grid-column: main;
    padding: 60px 10px;
    border: 1px solid #000;
    border-radius: 5px;
    text-align: center;
    font-size: 18px;
  }
  .cg-ArticleSubscriptionMessage_Title:where(.astro-2KW54WZA) {
    margin: 0 0 40px;
    font-feature-settings: 'palt';
    font-weight: 400;
    font-size: 32px;
  }
  .cg-ArticleSubscriptionMessage_Text1:where(.astro-2KW54WZA) {
    display: block;
    margin: 0;
    text-align: center;
    line-height: 1;
  }
  .cg-ArticleSubscriptionMessage_Text1:where(.astro-2KW54WZA)
    b:where(.astro-2KW54WZA) {
    font-size: 36px;
    font-weight: 500;
  }
  .cg-ArticleSubscriptionMessage_Text2:where(.astro-2KW54WZA) {
    display: block;
    font-size: 36px;
    margin: 15px 0;
    text-align: center;
    line-height: 1;
  }
  .cg-ArticleSubscriptionMessage_Text3:where(.astro-2KW54WZA) {
    display: block;
    margin: 0;
    text-align: center;
    line-height: 1.4;
  }
  .cg-ArticleSubscriptionMessage_Text4:where(.astro-2KW54WZA) {
    display: block;
    margin: 0 0 50px;
    text-align: center;
    line-height: 1.4;
  }
  .cg-ArticleSubscriptionMessage_ButtonContainer:where(.astro-2KW54WZA) {
    display: flex;
    justify-content: center;
    max-width: 640px;
    margin: 0 auto 50px;
  }
  .cg-ArticleSubscriptionMessage_SubscriptionButton:where(.astro-2KW54WZA) {
    flex: 1 1 auto;
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 290px;
    width: 100%;
    height: 60px;
    margin: 0 15px;
    padding: 0 15px;
    border-radius: 2px;
    color: var(--button-font-color);
    background-color: var(--button-bg-color);
    text-decoration: none;
    transition: background-color 0.2s;
    font: inherit;
  }
  .cg-ArticleSubscriptionMessage_SubscriptionButton:where(.astro-2KW54WZA):hover {
    background-color: var(--button-bg-color-hover);
  }
  .cg-ArticleSubscriptionMessage_LoginButtonContainer:where(.astro-2KW54WZA) {
    display: contents;
  }
  .cg-ArticleSubscriptionMessage_LoginButton:where(.astro-2KW54WZA) {
    flex: 1 1 auto;
    box-sizing: border-box;
    max-width: 290px;
    width: 100%;
    height: 60px;
    margin: 0 15px;
    border: 1px solid #000;
    border-radius: 2px;
    cursor: pointer;
    transition: background-color 0.2s;
    display: inline-block;
  }
  .cg-ArticleSubscriptionMessage_LoginButton:where(.astro-2KW54WZA):hover {
    background-color: #0000001a;
  }
  .cg-ArticleSubscriptionMessage_LoginButton:where(.astro-2KW54WZA)
    a:where(.astro-2KW54WZA) {
    box-sizing: border-box;
    -webkit-appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: var(--button-height, 100%);
    padding: var(--button-padding, 0);
    border: 0;
    border-radius: 0;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
  }
  @media screen and (max-width: 750px) {
    .cg-ArticleSubscriptionMessage_ButtonContainer:where(.astro-2KW54WZA) {
      display: block;
      max-width: 100%;
    }
    .cg-ArticleSubscriptionMessage_SubscriptionButton:where(.astro-2KW54WZA) {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 30px;
    }
    .cg-ArticleSubscriptionMessage_LoginButton:where(.astro-2KW54WZA) {
      margin-left: 0;
      margin-right: 0;
    }
  }
  .cg-Article {
    margin-bottom: 70px;
  }
  .cg-Article_Body {
    display: grid;
    grid-template-columns:
      [full-start] minmax(var(--base-content-side-gap), 1fr) [main-start] minmax(
        auto,
        750px
      )
      [main-end] minmax(var(--base-content-side-gap), 1fr) [full-end];
    width: 100%;
  }
  .cg-Article_Body:after {
    grid-column: main;
    justify-self: center;
    display: block;
    content: url('data:image/svg+xml,<svg width="50" height="10" viewBox="0 0 50 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25 10C27.7614 10 30 7.76142 30 5C30 2.23858 27.7614 0 25 0C22.2386 0 20 2.23858 20 5C20 7.76142 22.2386 10 25 10Z" fill="black"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M45 10C47.7614 10 50 7.76142 50 5C50 2.23858 47.7614 0 45 0C42.2386 0 40 2.23858 40 5C40 7.76142 42.2386 10 45 10Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z" fill="black"/></svg>');
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .cg-Article_TocContainer {
    grid-column: main;
    display: grid;
    grid-template-columns:
      [full-start] minmax(0, 40px) [main-start] minmax(auto, 670px)
      [main-end] minmax(0, 40px) [full-end];
  }
  @media screen and (max-width: 930px) {
    .cg-Article_TocContainer {
      grid-column: full;
      display: block;
    }
  }

  `;
};
