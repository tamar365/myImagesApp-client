import "./Home.css";
import Modal from "../../components/Modal/Modal";
import Backdrop from "../../components/Backdrop/Backdrop";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../../features/imagesSlice";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [choiceCategory, setCategory] = useState("pasta");
  const [isCategory, setIsCategory] = useState(false);
  const [isImageDetails, setIsImagesDetails] = useState(false);
  const [choiceImage, setChoiceImage] = useState(null);
  const dispatch = useDispatch();

  //initial upload of images
  useEffect(() => {
    dispatch(fetchImages("/init"));
  }, [dispatch]);

  const imagesData = useSelector((state) => state.imagesSlice.items);
  
  //function of next button to the next page of images
  function next() {
    if (imagesData.length >= 9) {
      dispatch(fetchImages(`/images/${choiceCategory}/${page}`));
      setPage(page + 1);
    } else {
      alert("THIS IS THE LAST PAGE");
    }
  }

  //function of prev button to the previous page of images
  function prev() {
    if (page >= 1) {
      dispatch(fetchImages(`/images/${choiceCategory}/${page}`));
      setPage(page - 1);
    } else {
      alert("THIS IS PAGE NO.1");
    }
  }

  //get images by category
  function imagesByCategories(category) {
    setCategory(category);
    dispatch(fetchImages(`/init/${category}`));
    setIsCategory(false);
    closeModal();
  }

  //get the image object when image is selected
  function pickedImage(id) {
    setIsImagesDetails(true);
    let image = imagesData.filter((item) => item.id == id)[0];
    setChoiceImage(image);
    setModalIsOpen(true);
  }

  //open modal
  function openModal() {
    setModalIsOpen(true);
  }

  //close modal
  function closeModal() {
    setModalIsOpen(false);
    setIsImagesDetails(false);
  }

  return (
    <div className="home">
      <Navbar
        next={next}
        prev={prev}
        openModal={openModal}
        setIsCategory={setIsCategory}
      />
      {modalIsOpen && <Backdrop closeModal={closeModal} />}
      {modalIsOpen && (
        <Modal
          closeModal={closeModal}
          imagesByCategories={imagesByCategories}
          isCategory={isCategory}
          isImageDetails={isImageDetails}
          choiceImage={choiceImage}
        />
      )}
      <div className="cards-container">
        {imagesData &&
          imagesData.map((item) => (
            <Card image={item} key={item.id} pickedImage={pickedImage} />
          ))}
      </div>
    </div>
  );
}

export default Home;
