import "./sidebar.css"

export default function Sidebar() {
   return (
      <div className="sidebar">
         <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
               className="sidebarImg"
               src="https://images.wallpaperscraft.ru/image/single/germaniya_ploschad_zdaniya_doma_kostl_cvety_hdr_58523_1280x720.jpg"
               alt=""
            />
            <p>
               I would love to travel this year.In Europe I am going to visit
               Germany.
            </p>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
               <li className="sidebarListItem">Beauty</li>
               <li className="sidebarListItem">Health</li>
               <li className="sidebarListItem">Children</li>
               <li className="sidebarListItem">Relations</li>
            </ul>
         </div>
         <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
               <i className="sidebarIcon fab fa-facebook-square"></i>
               <i className="sidebarIcon fab fa-twitter-square"></i>
               <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
         </div>
      </div>
   );
}
