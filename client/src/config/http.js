import axios from 'axios';

/*
* Create an instance of Axios with default options set up so
* we don't need to redefine them elsewhere.
*/

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

// const csrfMetaTag = document.querySelector('meta[name="csrf-token"]');
//
// if (csrfMetaTag) {
//   axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfMetaTag.getAttribute('content');
// }
//
// axios.defaults.withCredentials = true;

export default axios.create({});
