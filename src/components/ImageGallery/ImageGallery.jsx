import ImageCard from "../ImageCard/ImageCard";
export default function ImageGallerry({ photos }) {
  return (
    <ul>
      {photos.map(({ id, description,  urls: { small, regular } }) => {

        return(
          <li key={id}>
            <ImageCard description={description} smallUrl={small} regularUrl={regular}/>
          </li>
        )
      })}
    </ul>
  );
}


