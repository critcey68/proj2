// import React, {Component } from 'react';
// // import logo from './logo.svg';
// // import './App.css';
//
// // holds the basic banner image, centered on the page.
// class bannerimage extends Component {
// render() {
//     return(
//     <div>    banner image component
//     </div>
//   );
//   }
// }
// export default bannerimage;

import bimage from '../images/jmt_purplelake2.jpeg';
import './mycomponents.css';
import React, {Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
class Bannerimg extends Component {
render() {
    return(
    <div>
    <img className = "bannerimagetag"  src={bimage} />
      </div>
  );
  }
}
export default Bannerimg;
