    import { Packer, Paragraph } from "docx";
    import { Document } from "docx/build/file";
    import { saveAs } from "file-saver";

    const generateWordDocx = () => {
    const doc = new Document();
    doc.createParagraph("Hello world");
    saveDocumentToFile(doc, "firs.docx");
    };

function saveDocumentToFile(doc, fileName) {
  const packer = new Packer();
  const mimType =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  packer.toBlob(doc).then((blob) => {
    const docblob = blob.slice(0, blob.size, mimType);
    saveAs(docblob, fileName);
  });

//   document
//     .getElementById("button-word")
//     .addEventListener("click", generateWordDocx, false);

    return(
        <div>
            <button onClick={generateWordDocx}>save word</button>
        </div>
    )
}


export default generateWordDocx