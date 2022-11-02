import Bold from "../icons/bold";
import Styles from './header.module.css';

export default function Header({boldClicked, setBoldClicked}) {
    return (
        <div className={Styles.Header}>
            <Bold clicked={boldClicked} onclick={setBoldClicked} />
        </div>
    )
}