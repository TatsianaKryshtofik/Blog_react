import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
   const user = false;
   return (
      <div className="top">
         <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
         </div>
         <div className="topCenter">
            <ul className="topList">
               <li className="topListItem">
                  <Link className="link" to="/">HOME </Link>
               </li>
               <li className="topListItem">
                  <Link className="link" to="/">ABOUT </Link>
               </li>
               <li className="topListItem">
                  <Link className="link" to="/">CONTACT </Link>
               </li>
               <li className="topListItem">
                  <Link className="link" to="/write">WRITE </Link>
               </li>
               <li className="topListItem">
                  {user && "LOGOUT"}
               </li>
            </ul>
         </div>
         <div className="topRight">
            {
               user ? (
                  <img
                     className="topImg"
                     src="http://1tmn.ru/wp-content/uploads/2015/03/393036_monika-belluchchi_monica_1920x1200_www.gdefon.ru_-680x425.jpg"
                     alt=""
                  />
               ) : (
                  <ul className="topList">
                     <li className="topListItem">
                        <Link className="link" to="/login">
                           LOGIN
                        </Link>
                     </li>
                     <li className="topListItem">
                        <Link className="link" to="/register">
                           REGISTER
                        </Link>
                     </li>
                  </ul>
               )}
            <i className="topSearchIcon fas fa-magnifying-glass"></i>
         </div>
      </div>
   );
}
