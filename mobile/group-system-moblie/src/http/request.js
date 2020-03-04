import http from '@/http/axiosConfig';

const request = {
  get (url) {
    return (params = {}) => {
      return http.get(url, { params });
    };
  },
  post (url) {
    return (params = {}) => http.post(url, params);
  }
};

export default request;
