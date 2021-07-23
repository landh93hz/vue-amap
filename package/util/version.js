/**
 * 判断JSAPI的版本是不是2.0以上的
 * @returns {string}
 */
function getVersion() {
  const scriptArr = document.getElementsByTagName('script');
  const regexMap = /https:\/\/webapi.amap.com\/maps?/;
  const regexVersion = /v=2.0/;
  const scriptsMap = [...scriptArr]
    .map(item => item.outerHTML.match(regexMap))
    .filter(item => item && item.input);
  const mapScript = scriptsMap[0].input.search(regexVersion);
  return mapScript > 0 ? 'v2' : 'v1';
}
export { getVersion };
