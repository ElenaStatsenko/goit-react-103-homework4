import ImageCard from "../ImageCard/ImageCard";
export default function ImageGallerry({ photos }) {
  console.log(photos);
  return (
    <ul>
      {/* Набір елементів списку із зображеннями */}
      <li>
        <div>
          <ImageCard />
        </div>
      </li>
    </ul>
  );
}
