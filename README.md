# YouTube Downloader
Node.js library for getting YouTube download URLs


[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/npm/v/youtube-downloader-links.svg)](https://www.npmjs.org/package/youtube-downloader-links)
[![Twitter](	https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/luissacristan)

## How to use it

The following example gets the stream files of a video:

```javascript
const YoutubeDownloader = require('./youtube-downloader');

const downloader = new YoutubeDownloader();
downloader.getVideoInfo( 'xxxxxxxxx' )
  .then( response => console.log( response ) );
```

And the result is:

```json
[ { quality: 'hd720',
    type: 'video/mp4; codecs="avc1.64001F, mp4a.40.2"',
    url: 'https://r3---sn-h5q7kned.googlevideo.com/videoplayback?.....',
    itag: '22' },
  { quality: 'medium',
    type: 'video/webm; codecs="vp8.0, vorbis"',
    url: 'https://r3---sn-h5q7kned.googlevideo.com/videoplayback?.....',
    itag: '43' },
  { quality: 'medium',
    type: 'video/mp4; codecs="avc1.42001E, mp4a.40.2"',
    url: 'https://r3---sn-h5q7kned.googlevideo.com/videoplayback?......',
    itag: '18' } ]
```
