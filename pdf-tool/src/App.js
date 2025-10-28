import React, { useState } from "react";

function PdfTool() {
  const [files, setFiles] = useState([]);
  const [mergedUrl, setMergedUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle file input change
  const onFilesChange = (event) => {
    setFiles(Array.from(event.target.files));
    setMergedUrl(null);
  };

  // Upload files and request merge from backend
  const mergePdfs = async () => {
    if (files.length < 2) {
      alert("Select at least 2 PDF files to merge.");
      return;
    }
    setLoading(true);

    const formData = new FormData();
    files.forEach((file, idx) => formData.append("files", file));

    try {
      const response = await fetch("/api/pdf/merge", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Merge failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      setMergedUrl(url);
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h1>PDF Merge Tool</h1>
      <input type="file" multiple accept="application/pdf" onChange={onFilesChange} />
      <div style={{ marginTop: 10 }}>
        <button onClick={mergePdfs} disabled={loading}>
          {loading ? "Merging..." : "Merge PDFs"}
        </button>
      </div>
      {mergedUrl && (
        <div style={{ marginTop: 20 }}>
          <a href={mergedUrl} download="merged.pdf">
            Download Merged PDF
          </a>
        </div>
      )}
    </div>
  );
}

export default PdfTool;
