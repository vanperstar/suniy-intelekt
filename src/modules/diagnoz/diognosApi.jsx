// import React from 'react';
// import ReactDOM from 'react-dom';
// import { useSelector } from 'react-redux';

// class PortalExample extends React.Component {
//   constructor (props) {
//     super(props);

//     this.nodeElement = document.getElementById('portal');
//   }

//   render () {
//   const state = useSelector((state) => state.selection);

//     const newElement = document.createElement('span');
//     newElement.innerText = 'portal element';

//     return (
//       <div id="non-portal">
// 	{
// 	  ReactDOM.createPortal(
// 	    this.props.children,
// 	    this.nodeElement.appendChild(newElement)
// 	  )
// 	}
//       </div>
//     )
//   }
// }

// export default PortalExample;