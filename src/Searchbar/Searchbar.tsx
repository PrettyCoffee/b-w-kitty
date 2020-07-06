import React from 'react';
import '../_styles/searchbar.css';

export function SearchBar() : JSX.Element {
    let engine = localStorage.getItem("search-engine")
    if (engine === null) {
        engine = "google.com/search"
    }

    var inputRef:any;
    function redirectToSearch() {
        let value = encodeURIComponent(inputRef.value)
        window.location.replace("https://"+engine+"?q="+value);
    }

    return (
        <div className="searchbar">
            <div>
                <input 
                    placeholder="Always stay clean!" 
                    className="input" 
                    type="input"
                    ref = {(ref) => inputRef = ref} 
                    onKeyPress={(e) => {if (e.which === 13) redirectToSearch()}}
                />
            </div>
        </div>
    );
}

export default SearchBar;
