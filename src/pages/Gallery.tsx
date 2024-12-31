import FooterDark from "../components/FooterDark"
import Navbar from "../components/Navbar"


const Gallery = () => {
    return (
        <div className="bg-primary flex flex-col gap-10 px-10">
            <Navbar/>
                <div className="bg-secondary p-10 rounded-xl">
                    Gallery</div>
            <FooterDark/>
        </div>
    )
}

export default Gallery