import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function PdfApp() {
  const generatePDF = () => {
    // const input = document.getElementById("pdf-content");
    const input = document.getElementById("button-pdf");
    
    html2canvas(input, { width: 595, height: 842 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("BeautifulRussianText.pdf");
    });
  };

  return (
    <>
      <button onClick={generatePDF}>Сохранить в PDF</button>
      <div className="pdf_list">
        <div
          id="pdf-content"
          style={{
            display: "block",
            backgroundColor: "#f4f4f4",
            padding: "20px",
            borderRadius: "15px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width: "595px",
            height: "542px",
          }}
        >
          <h1 style={{ color: "#4CAF50", borderBottom: "2px solid #4CAF50" }}>
            BMScore!
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#555" }}>
            Это прекрасный текст на русском языке.
          </p>
          <br />
          <h2 style={{ color: "#2196F3", borderBottom: "1px solid #2196F3" }}>
            {localStorage.getItem("last_name")}{" "}
            {localStorage.getItem("first_name")}
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>
            Русский язык является одним из самых распространенных языков в мире.
          </p>
          <br />
        </div>
      </div>
    </>
  );
}

export default PdfApp;
