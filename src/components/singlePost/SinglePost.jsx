import "./singlePost.css"

export default function SinglePost() {
   return (
      <div className="singlePost">
         <div className="singlePostWrapper">
            <img
               src="https://i.7fon.org/1000/c96544.jpg"
               alt=""
               className="singlePostImg"
            />
            <h1 className="singlePostTitle">
               I would love to travel this year.
               <div className="singlePostEdit">
                  <i className="sinlePostIcon fa-solid fa-pen-to-square"></i>
                  <i className="sinlePostIcon fa-solid fa-trash"></i>
               </div>
            </h1>
            <div className="singlePostInfo">
               <span className="singlePostAuthor">
                  Author: <b>Minora</b>
               </span>
               <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
               I would love to travel this year. There are many
               countries that I would like to visit. In Europe I am
               going to visit Germany and especially such cities as
               Berlin, Frankfurt and Munich.Also I would like to go
               to Italy to see Florence, Milan, Venice and Rome.
            </p>
         </div>
      </div>
   )
}
