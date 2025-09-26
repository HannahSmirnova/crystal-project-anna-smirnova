import { useState } from "react";
import axios from "axios";
import CrystalDetails from "./CrystalDetails";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    const text = response.data.answer;
    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);

    let formula = "—";
    let benefits = [];
    let connectionTips = [];

    lines.forEach((line, index) => {
      if (
        line.toLowerCase().includes("formula") &&
        !line.toLowerCase().includes("benefits") &&
        !line.toLowerCase().includes("connect")
      ) {
        formula = line.split(":")[1]?.trim() || lines[index + 1] || "—";
      }

      if (line.toLowerCase().includes("benefits")) {
        const next = lines[index + 1];
        if (next && !next.toLowerCase().includes("connect")) {
          benefits = next
            .split(/[,.;]/)
            .map((b) => b.trim())
            .filter((b) => b);
        }
      }

      if (line.toLowerCase().includes("connect")) {
        const next = lines[index + 1];
        if (next) {
          connectionTips = next
            .split(/[,.;]/)
            .map((t) => t.trim())
            .filter((t) => t);
        }
      }
      if (formula === "**" || !formula.trim()) {
        formula = "Not available";
      }
    });

    const parsedResults = {
      formula,
      benefits,
      connectionTips,
    };

    setResults(parsedResults);
  }

  function search(event) {
    event.preventDefault();
    const apiKey = "60503d6efotf2704dfb74d90d8ce4ea6";
    const prompt = `You are a knowledgeable crystal guide and famous master. For the crystal "${keyword}", provide: 1.Chemical formula (one line, just the formula, no extra description.). Below the formula please provide a short introductory paragraph explaining the physical properties (e.g. color varieties, hardness etc.) of the requested crystal. 2. Benefits - list the benefits. Show titles in bold. 3.How to spiritually connect  - in this part please include practices to spiritually connect with a crystal (e.g. Burn sandalwood incense and put smoky quarts beside. Whisper your intention and gaze at the crystal for a few moments.), format steps as a list with text-align centered and make the title in bold.)`;
    const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
      prompt
    )}&key=${apiKey}`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("API error:", error);
      });
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="search-engine">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a crystal name..."
          onChange={handleKeywordChange}
          autoFocus={true}
          value={keyword}
        />
        <input type="submit" value="Search" />
      </form>
      <CrystalDetails data={results} />
    </div>
  );
}

// https://poe.com/api_key
//apiKey: "KHanpt564PP6qDJM82fOIHJpiXxi6nOK-da_dOgYfB8"
