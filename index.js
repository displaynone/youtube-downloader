/**
 * download-youtube <https://github.com/displaynone/download-youtube>
 *
 * YouTube download library
 *
 * It returns the URL needed for download a YouTube video
 *
 *
 * Copyright (c) 2019, Luis Sacristán.
 * Released under the MIT License.
 */

/**
 * External dependencies
 */
const https = require( 'https' );
const url = require( 'url' );

const YOUTUBE_INFO_URL = 'https://www.youtube.com/get_video_info?video_id=';

const fetchData = ( url, cb ) => {
  return new Promise( ( resolve, reject ) => {
    https.get( url, res => {
      res.setEncoding( 'utf8' );
      let body = '';
      res.on( 'data', data => {
        body += data;
      });
      res.on( 'end', () => {
        resolve( cb( body ) );
      });
    } ).on( 'error', e => reject( e ) );
  } );
};

class YoutubeDownloader {

  getVideoInfo( id ) {
    return fetchData( `${ YOUTUBE_INFO_URL }${ id }`, response => {
      const result = [];
      const params = new url.URLSearchParams( response );
      if ( params.has( 'url_encoded_fmt_stream_map' ) ) {
        params.get( 'url_encoded_fmt_stream_map' ).split( ',' ).forEach( map => {
          const mapParams = new url.URLSearchParams( map );
          const stream = {};
          [... mapParams.entries()].forEach( item => stream[item[0]] = item[1] );
          result.push( stream );
        } );
      }
      return result;
    } );
  }

  getVideoInfoByURL( link ){
    link = decodeURIComponent( link );
    const id = link.match( /[v][\/|=|%]([a-zA-Z-_\d]+)[&|?|\s]/ ) ||
      link.match( /youtu.be\/([A-Za-z-_\d]+)/ ) ||
      link.match( /embed\/([A-Za-z-_\d]+)/ );
    return Array.isArray( id ) && id.length === 2 ?
      this.getVideoInfo( id[ 1 ] ) :
      null;
  }

}

module.exports = YoutubeDownloader;
