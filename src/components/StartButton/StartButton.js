import './StartButton.css';
import { Link } from "react-router-dom";

function StartButton(props) {
    const {link, text} = props;
    return (
        <Link to={link}>
        <div className="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {text}
        </div></Link>
      );
}

export default StartButton;