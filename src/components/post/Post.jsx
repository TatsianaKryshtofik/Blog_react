import "./post.css"

export default function Post() {
   return (
      <div className="post">
         <img
            className="postImg"
            src="https://images.wallpaperscraft.ru/image/single/para_ruki_nezhnost_118110_300x168.jpg"
            alt=""
         />
         <div className="postinfo">
            <div className="postCats">
               <span className="postCat">Beauty</span>
               <span className="postCat">Health</span>
            </div>
            <span className="postTitle">
               I would love to travel this year.
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
         </div>
         <p className="PostDesc">
            I would love to travel this year. There are many
            countries that I would like to visit. In Europe I am
            going to visit Germany and especially such cities as
            Berlin, Frankfurt and Munich.Also I would like to go
            to Italy to see Florence, Milan, Venice and Rome.
         </p>
      </div>
   )
}
