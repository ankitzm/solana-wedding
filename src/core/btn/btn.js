import "./btn.css"

function CoreBTN({ type, text, onClick, id }) {
    return (<>
        <button id={id} onClick={onClick} className={`btn ${type}`}>
            {text}
        </button></>
    )
}

export default CoreBTN
