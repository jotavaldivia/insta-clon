import React from "react";
import IconProfile from "../icon_profile/IconProfile";
import Icons from "../svg/Svg";
import "./Post.css";
import ImgProfile from "../../assets/images/profile.jpg";
function Post() {
  return (
    <>
      <div className="container__post">
        <div className="container__post__userName">
          <div className="container__post__userName--left">
          <IconProfile />
          <span>Tu Usuario</span>
          </div>
          <div className="container__post__userName--right">
          <Icons.SvgPoints />
          </div>
         
        </div>
        <div className="container__post__img">
          <img src="https://cdn.pixabay.com/photo/2021/02/23/09/26/cat-6042858_960_720.jpg" />
        </div>

        <div className="container__post__icons">
          <div className="container__post__icons--left">
            <Icons.SvgHeart />
            <Icons.SvgComment /> <Icons.SvgDirect />
          </div>
          <div className="container__post__icons--right">
            <Icons.SvgSave />
          </div>
        </div>

        <div className="container__post_yourlikes">
          <img src={ImgProfile} />
          <span>
            Les gusta a <b>pa._me </b>y <b>28,267 personas más</b>
          </span>
        </div>

        <div className="container__post__myacount">
          <span>
            <b>paginadeinsta</b> @deperros.meme 🍐
          </span>
        </div>
        <div className="container__post__comment">
          <span className="container__post__comment--viewComment">
            Ver los 141 comentarios
          </span>

          <span className="container__post__comment--dateComment">
            HACE 2 HORAS
          </span>

          <div className="container__post__comment--postComment">
            <div className="container__post__comment--postComment--elements">
              <Icons.SvgFaceSmile />
              <input placeholder="Agrega un comentario..." />
            </div>
            <a>Publicar</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
