import axios from 'axios';

const KEY = 'AIzaSyApuOKeTtYrwQ0mVGd_4jn0-D7sRJdjAsg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});



