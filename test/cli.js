const YoutubeDownloader = require('../index');

const downloader = new YoutubeDownloader();
downloader.getVideoInfo( 'G_Sy6oiJbEk' )
  .then( response => console.log( response ) );

downloader.getVideoInfoByURL( 'https://youtu.be/G_Sy6oiJbEk' )
  .then( response => console.log( response ) );
