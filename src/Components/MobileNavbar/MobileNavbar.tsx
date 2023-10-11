// import React from 'react';
// import { Link } from 'react-router-dom';

// interface IMobileNavbar {
//   isMobileMenuOpen: boolean;
//   toggleMobileMenu: () => void;
//   closeMobileMenu: () => void;
// }

// // S
// const MobileNavbar: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] =
//     React.useState<boolean>(false);
//   function toggleMobileMenu() {
//     setIsMobileMenuOpen((prevState) => !prevState);
//   }

//   function closeMobileMenu() {
//     setIsMobileMenuOpen(false);
//   }
//   return (
//     <div className="mainMobileNabvarContainer" show={isMobileMenuOpen}>
//       <div className="NavList">
//         <div activepage={location.pathname == '/'} onClick={closeMobileMenu}>
//           <Link to="/">
//             <span>00</span>home
//           </Link>
//         </div>
//         <div
//           activepage={location.pathname.includes('destination')}
//           onClick={closeMobileMenu}
//         >
//           <Link to="/destination">
//             <span>01</span>destination
//           </Link>
//         </div>
//         <div
//           activepage={location.pathname.includes('crew')}
//           onClick={closeMobileMenu}
//         >
//           <Link to="/crew">
//             <span>02</span>crew
//           </Link>
//         </div>
//         <div
//           activepage={location.pathname.includes('technology')}
//           onClick={closeMobileMenu}
//         >
//           <Link to="/technology">
//             <span>03</span>technology
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileNavbar;
