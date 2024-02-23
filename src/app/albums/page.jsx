"use client";
import { getAlbums } from "@/utils/getAlbums";


const Albums = async() => {
    let start = Date.now();
    const albums = await getAlbums()
    let timeTaken = Date.now() - start;
//   console.log(albums);
  return (
    <main>
      <form>
        <h2>Add a New Book</h2>
        <input type="text" name="title" placeholder="Enter your ID" />
        <button type="submit" className="btn">
          search
        </button>
      </form>
      {timeTaken && <h2 className="text-xl text-red-500">Exticution time : {timeTaken} milliseconds</h2>}

      {albums.map((album) => (
        <div key={album.userId} className="card">
          <h2>{album.title}</h2>
          <p>By {album.id}</p>
          <p>Rating {album.userId}</p>
        </div>
      ))}
    </main>
  );
};

export default Albums;
