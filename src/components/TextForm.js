import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText('');
    setSummary('');
    setSuggestions([]);
    props.showAlert("Text cleared!", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.split(/\s+/).join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    generateSuggestions(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

 
  const handleSpeak = () => {
    if (!text.trim()) return;
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    props.showAlert("Stopped speaking!", "success");
  };

  
  const handleSummarize = () => {
    if (!text.trim()) {
      setSummary("");
      return;
    }
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    setSummary(sentences.slice(0, 3).join(" "));
    props.showAlert("Text summarized!", "success");
  };

  const handleExportPDF = () => {
    if (!text.trim()) return;
    const blob = new Blob([text], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'text.pdf';
    link.click();
    props.showAlert("Exported to PDF!", "success");
  };

  const dictionary = ["hello", "world", "text", "form", "react", "example", "javascript"];
  const generateSuggestions = (input) => {
    const words = input.split(/\s+/);
    const lastWord = words[words.length - 1].toLowerCase();
    if (!lastWord) {
      setSuggestions([]);
      return;
    }
    const matches = dictionary.filter(word => word.startsWith(lastWord) && word !== lastWord);
    setSuggestions(matches.slice(0, 5));
  };

  const handleSuggestionClick = (suggestion) => {
    const words = text.split(/\s+/);
    words[words.length - 1] = suggestion;
    setText(words.join(" ") + " ");
    setSuggestions([]);
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : '#042743'
            }}
            rows="8"
          ></textarea>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div style={{ marginTop: "5px" }}>
              {suggestions.map((sug, idx) => (
                <button
                  key={idx}
                  className="btn btn-sm btn-outline-secondary mx-1 my-1"
                  onClick={() => handleSuggestionClick(sug)}
                >
                  {sug}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Buttons */}
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lowercase</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Speak</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleStop}>Stop</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleSummarize}>Summarize</button>
        <button disabled={!text} className="btn btn-primary mx-1 my-1" onClick={handleExportPDF}>Export PDF</button>
      </div>

      {/* Text Analysis and Preview */}
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Text Analysis</h2>
        <p>{text.split(/\s+/).filter(Boolean).length} words, {text.length} characters</p>
        <p>{(0.008 * text.split(/\s+/).filter(Boolean).length).toFixed(2)} Minutes read</p>

        <h2>Preview</h2>
        <p>{text || "Nothing to preview!"}</p>

        {summary && (
          <>
            <h2>Summarized Text</h2>
            <p>{summary}</p>
          </>
        )}
      </div>
    </>
  );
}
