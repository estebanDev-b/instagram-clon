import { Heart } from "lucide-react";
import { useState } from "react";

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white  mb-4 md:rounded-sm ">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <img
            src={post.userImage}
            alt={post.username}
            className="w-8 h-8  rounded-full mr-3 object-cover"
          />
          <span className="font-semibold text-sm">{post.username}</span>
        </div>
        <div className="flex items-center">
          <button className="text-sm font-semibold text-blue-500 mr-3">
            Seguir
          </button>
          <button className="text-gray-500">
            <svg
              aria-label="Más opciones"
              className="x1lliihq x1n2onr6 x5n08af"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Más opciones</title>
              <circle cx="12" cy="12" r="1.5"></circle>
              <circle cx="6" cy="12" r="1.5"></circle>
              <circle cx="18" cy="12" r="1.5"></circle>
            </svg>
          </button>
        </div>
      </div>
      <div className="md:px-4">
        <img
          src={post.postImage}
          alt="Post"
          className="w-full aspect-square object-cover md:rounded-[3px]"
        />
      </div>
      <div className="p-3 md:px-4">
        <div className="flex justify-between mb-3">
          <div className="flex space-x-4">
            <button onClick={() => setLiked(!liked)}>
              <Heart
                className={`w-6 h-6 ${
                  liked ? "text-red-500 fill-current" : "text-black"
                }`}
              />
            </button>
            <button>
              <svg
                aria-label="Comentar"
                className="x1lliihq x1n2onr6 x1roi4f4"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Comentar</title>
                <path
                  d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
            <button>
              <svg
                aria-label="Compartir"
                className="x1lliihq x1n2onr6 xyb1xck"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Compartir</title>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></polygon>
              </svg>
            </button>
          </div>
          <button>
            <svg
              aria-label="Guardar"
              className="x1lliihq x1n2onr6 x1roi4f4"
              fill="currentColor"
              height="24"
              role="img"
              viewBox="0 0 24 24"
              width="24"
            >
              <title>Guardar</title>
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></polygon>
            </svg>
          </button>
        </div>
        <p className="font-semibold text-sm mb-1">
          {post.likes.toLocaleString()} Me gusta
        </p>
        <p className="text-sm mb-2">
          <span className="font-semibold mr-2">{post.username}</span>
          {post.caption}
        </p>
        <p className="text-sm text-gray-500 mb-2">
          Ver los {post.comments.length} comentarios
        </p>
        {post.comments.map((comment, index) => (
          <p key={index} className="text-sm mb-1">
            <span className="font-semibold mr-2">{comment.username}</span>
            {comment.text}
          </p>
        ))}

        {/*

          <p className="text-xs text-gray-500 uppercase mt-2">{post.timestamp}</p>
          */}
      </div>
      <div className="flex items-center border-b p-3">
        <input
          type="text"
          placeholder="Añade un comentario..."
          className="flex-grow text-sm focus:outline-none"
        />
        <button className="text-blue-500 font-semibold text-sm">
          <svg
            aria-label="Emoji"
            className="x1lliihq x1n2onr6 x1roi4f4"
            fill="currentColor"
            height="13"
            role="img"
            viewBox="0 0 24 24"
            width="13"
          >
            <title>Emoji</title>
            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Post;
