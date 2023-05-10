import "./Details.css";

export default function ImageDetails({ closeModal, choiceImage }) {
  return (
    <div className="details-container">
      <div className="button-cancel-container">
        <button onClick={closeModal}>X</button>
      </div>

      <div className="center">
        <h2>IMAGE DETAILS...</h2>
        <div className="details-inside-con">
          <h4>TAGS: {choiceImage.tags}</h4>
          <h4>DOWNLOADS: {choiceImage.downloads}</h4>
          <h4>LIKES: {choiceImage.likes}</h4>
        </div>
      </div>
    </div>
  );
}
