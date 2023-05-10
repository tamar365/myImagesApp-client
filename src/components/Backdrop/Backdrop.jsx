import './Backdrop.css'

export default function Backdrop({closeModal}) {
    return (
    <div className="backdrop" onClick={closeModal}/>
    )
}

