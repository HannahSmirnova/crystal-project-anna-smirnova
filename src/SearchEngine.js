import { useState } from "react";
import axios from "axios";
import OpenAI from "openai";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    const client = new OpenAI({
      apiKey: "KHanpt564PP6qDJM82fOIHJpiXxi6nOK-da_dOgYfB8",
      apiUrl: `https://api.poe.com/v1${keyword}`,
    });
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="search-engine">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} autoFocus={true} />
      </form>
    </div>
  );
}

// https://poe.com/api_key
