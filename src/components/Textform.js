import React, { useState } from "react";
import axios from "axios";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [language, setlanguage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  
  
  const handleTranslate = async () => {
    setLoading(true);
    setError("");
    setTranslatedText(""); // Clear previous translation
  
    const requestBody = {
      sourceLanguageCode: "en", // Source language code
      targetLanguageCode: "es", // Target language code
      format: "PLAIN_TEXT", // Text format
      texts: [text], // Array of texts to translate
      // folderId: "YOUR_FOLDER_ID", // Replace with your folder ID if required
    };
  
    const options = {
      method: "POST",
      url: "https://translate.api.cloud.yandex.net/translate/v2/translate",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "AIzaSyDsN1xjkDsS-zHBTcYyW8STM8AjZLsSyug" // Replace with your actual token
      },
      data: requestBody,
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data); // Debugging: log the response
  
      if (response.data && response.data.translations && response.data.translations.length > 0) {
        const translatedText = response.data.translations[0].text;
        setTranslatedText(translatedText); // Set translated text
        props.showAlert("Text translated successfully", "success");
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error translating text:", error);
      setError("Failed to translate text. Please try again.");
      props.showAlert("Failed to translate text", "danger");
    } finally {
      setLoading(false);
    }
  };

  const handleLanguagedector = async () => {
    setLoading(true);
    setError("");
    setlanguage(""); // Clear previous summary

    const formdata = new FormData();
    formdata.append("key", "71df4c8f60ec7a95680f8ab9abbd8ba3");
    formdata.append("txt", text); // Use the current text from the state

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://api.meaningcloud.com/lang-4.0/identification",
        requestOptions
      );
      const result = await response.json();

      console.log(result); // Debugging: log the response

      if (response.ok && result && result.language_list) {
        const detectedLanguage = result.language_list[0].name;
        setlanguage(`Detected language: ${detectedLanguage}`); // Update state with the detected language
        props.showAlert("Language identified successfully", "success");
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.error("Error identifying language:", err);
      setError("Failed to identify language. Please try again.");
      props.showAlert("Failed to identify language", "danger");
    } finally {
      setLoading(false);
    }
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleTitleClick = () => {
    let newText = "";
    const words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > 0) {
        newText +=
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
      }
    }

    setText(newText.trim());
    props.showAlert("Converted to TitleCase", "success");
  };

  const handleinvCaseClick = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === char.toLowerCase()) {
        newText += char.toUpperCase();
      } else if (char === char.toUpperCase()) {
        newText += char.toLowerCase();
      } else {
        newText += char;
      }
    }
    setText(newText);
    props.showAlert("Converted to InverseCase", "success");
  };

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extraspaces Removed", "success");
  };

  const handleCopyClick = () => {
    let text = document.getElementById("Box1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleClearClick = () => {
    setText(" ");
    props.showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value); // Update text state when the user types
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>{props.heading}</h2>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="Box1"
            rows="8"
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleTranslate}
          disabled={loading}
        >
          {loading ? "Translating..." : "Translate Text"}
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleLanguagedector}
          disabled={loading}
        >
          {loading ? "Detecting Language..." : "Detect Language"}
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleTitleClick}
        >
          TitleCase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleinvCaseClick}
        >
          InvCase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extraspaces
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>

        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h4>Your Text Summary</h4>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length - 1 + 0.92} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>

      {language && (
        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h4>Detected Language</h4>
          <p>{language}</p>
        </div>
      )}

      {translatedText && (
        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h4>Translated Text</h4>
          <p>{translatedText}</p>
        </div>
      )}
    </>
  );
}
