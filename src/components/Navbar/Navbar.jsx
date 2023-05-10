import "./Navbar.css";
import Button from "@mui/material/Button";

export default function Buttons({ next, prev, openModal, setIsCategory }) {
  return (
    <div className="navbar-container">
      <Button variant="outlined" color="success" onClick={prev}>
        PREV
      </Button>
      <Button variant="contained" color="success"  onClick={() => {openModal(); setIsCategory(true);}}>
        CATEGORIES
      </Button>
      <Button variant="outlined" color="success" onClick={next}>
        NEXT
      </Button>
    </div>
  );
}
