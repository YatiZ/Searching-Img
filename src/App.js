import SearchBar from "./Component/SearchBar";
import searchImages from "./api";
import ImageList from "./Component/ImageList";

import { useState } from "react";

function App(){
    
    const [images,setImage] = useState([]);

    const handleSubmit = async (term) =>{
       const result = await searchImages(term)
       console.log(result)
       return setImage(result)

       
    }
    return <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images = {images}/>
    </div>
}

export default App;