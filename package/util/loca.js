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

/**
 * 用来构造 geojson 格式的数据
 * @returns {{features: [], type: string}}
 */
function getGeoData(Loca, points, value) {
  if (points.type === 'geojson') return points;
  let options;
  if (points.type === 'FeatureCollection') {
    options = points;
  } else if (points.length && points.length !== 0) {
    options = {
      type: 'FeatureCollection',
      features: []
    };
    points.forEach(point => {
      const feature = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: []
        }
      };
      const { longitude, latitude } = point;
      feature['properties'][value] = point[value];
      feature['geometry']['coordinates'] = [longitude, latitude];
      options['features'].push(feature);
    });
  }
  return new Loca.GeoJSONSource({ data: options });
}

export { getVersion, getGeoData };
