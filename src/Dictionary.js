import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary (props){
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults]= useState(null);
		let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos]= useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0])
    }

    function handlePexelsResponse(response){
      setPhotos(response.data.photos);

    }

		function search(){
			let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey="563492ad6f91700001000001c42c7ea9360646ec83152b317e50856f";
        let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers= {Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
				search ();
        

    }


function handleKeywordChange(event){
    setKeyword(event.target.value);
}

function load(){
	setLoaded(true);
	search();
}

if (loaded) {
	 return (
        <div className="Dictionary">
        <section>
					<h1>
						What word are you looking for?
					</h1>
					 <form onSubmit={handleSubmit}>
              <input type="search" onChange={handleKeywordChange} autoFocus={true} placeholder="Type your word here"/>
          	</form>
						
				</section>
        <Results results={results} />
        <Photos photos={photos} />
        </div>
    )
} else {
	load ();
	return "Loading";
}

   
}