export default function Info() {
    return (
        <div className="info">
            <img src={require("../images/photo.JPG")} className="info--photo" />
            <div className="info--text">
                <h1 className="info--name">Rex Chang</h1>
                <h3 className="info--title">Frontend Developer</h3>
                <p className="info--nameweb">rexchange.website</p>
            </div>
            <div className="info--btn">
                <button className="info--mailbtn"><img src={require("../images/icon-email.png")} className="info--iconmail" />Email</button>
                <button className="info--linkbtn"><img src={require("../images/icon-linkedin.png")} className="info--iconlink" />LinkedIn</button>
            </div>
        </div>
    )
}