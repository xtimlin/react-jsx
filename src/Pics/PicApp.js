import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from "./../api";
import  {useState} from "react";

function PicApp() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (searchValue) => {
        const imagesResult = await searchImages(searchValue);
        setImages(imagesResult);
    }
    return (
        <div>
            <h1>PicApp</h1>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    )
}


export default PicApp;