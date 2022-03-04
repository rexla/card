export default function Footer() {
    return (
        <div className="footer">
            <button className="footer--twibtn"><img src={require("../images/icon-twitter.png")} className="footer--twitter" /> </button>
            <button className="footer--fbbtn"><img src={require("../images/icon-fb.png")} className="footer--fb" /></button>
            <button className="footer--igbtn"><img src={require("../images/icon-ig.png")} className="footer--ig" /></button>
            <button className="footer--gitbtn"><img src={require("../images/icon-github.png")} className="footer--github" /></button>
        </div>
    )
}