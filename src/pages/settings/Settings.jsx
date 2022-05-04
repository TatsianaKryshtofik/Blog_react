import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
   return (
      <div className="settings">
         <div className="settingsWrapper">
            <div className="settingsTitle">
               <span className="settingsUpdateTitle">Update Your Account</span>
               <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
               <label>Profile Picture</label>
               <div className="settingsPP">
                  <img
                     src="https://i.7fon.org/1000/g658730.jpg"
                     alt=""
                  />
                  <label htmlFor="fileInput">
                     <i className="settingsPPIcon far fa-user-circle"></i>
                  </label>
                  <input type="file" id="fileInput" style={{ display: "none" }} />
               </div>
               <label>Username</label>
               <input type="text" placeholder="Minora" />
               <label>Surname</label>
               <input type="text" placeholder="Minorina" />
               <label>Email</label>
               <input type="email" placeholder="minora@tut.by" />
               <label>Password</label>
               <input type="password" />
               <button className="settingsSubmit">Update</button>
            </form>
         </div>
         <Sidebar />
      </div>
   );
}
