import '../App.css';


const Footer = (props) => {
    console.log('footer => ',props)
    return <div className="footer-section">
        <span>{props.address}</span>
        <span>{props.mobile}</span>
    </div>
}

export default Footer ;