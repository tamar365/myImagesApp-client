import "./Modal.css";
import Categories from "../Categories/Categories";
import ImageDetails from "../Details/Details";

export default function Modal({
  closeModal,
  imagesByCategories,
  isCategory,
  isImageDetails,
  choiceImage
}) {
  return (
    <div className="modal">
      {isCategory && <Categories imagesByCategories={imagesByCategories} />}
      {isImageDetails && <ImageDetails closeModal={closeModal} choiceImage={choiceImage}/>}
    </div>
  );
}
