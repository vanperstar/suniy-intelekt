import jsPDF from "jspdf";
import { useSelector } from "react-redux";
import { font } from "./fonts";
import { Font } from "jspdf";

function DataPdf() {
  const state = useSelector((state) => state.selection);
  console.log(state.result);
  const pdfGenerate = () => {
    var doc = new jsPDF("l", "px", "a4",);
    var fontData = "BASE64_ENCODED_FONT_DATA_HERE";
    doc.addFont("CustomFont.ttf", fontData)
  
    console.log(doc.getFontList("CustomFont.ttf", ));
    // doc.addFileToVFS("CustomFont.ttf", font);
    // doc.addFont("CustomFont.ttf", "CustomFont", "normal");
    // doc.setFont("CustomFont");
    doc.setFont("Times", "bold");
    doc.text(250, 60, "BMScore");
    doc.setFont("Times", "bold");
    doc.text(60, 80, "Bemor ismi: ");
    doc.text(60, 100, "Bemor familiyasi: ");
    doc.text(60, 120, "Bemor natijasi: ");
    doc.setFont("Helveritca", "Normal");
    doc.text(170, 80, `${localStorage.getItem("last_name")}`);
    doc.text(170, 100, `${localStorage.getItem("first_name")}`);
    if (state.result <= 24.6) {
      doc.text(
        170,
        120,
        `Kam xavf (BMScore L): ${state.result} ball фқфқфқфқфқфқфқ Endoprostetik yordamida rezektsiya
        Radiatsiya terapiyasi
        Antitumor, antirezorptiv, gormonal, maqsadli va biologik preparatlar`
      );
    }
    if(state.result >= 24.7 && state.result <= 53.3){
        doc.text(
            170,
            120,
            `O'rta xavf (BMScore H): ${state.result} ball Endoprostetik yordamida rezektsiya
            Radiatsiya terapiyasi
            Antitumor, antirezorptiv, gormonal, maqsadli va biologik preparatlar`
        );
    }
    if (state.result >= 53.4) {
        doc.text(
          170,
          120,
          `Yuqori xavf (BMScore L): ${state.result} ball Endoprostetik yordamida rezektsiya
          Radiatsiya terapiyasi
          Antitumor, antirezorptiv, gormonal, maqsadli va biologik preparatlar`
        );
      }

    doc.save(`${localStorage.getItem("last_name")}.pdf`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button className='buttons__button buttons__button--next' onClick={pdfGenerate}>Загрузить диагноз</button>
    </div>
  );
}

export default DataPdf;
