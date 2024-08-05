import React, { Component } from "react";
import { Stepper } from "react-form-stepper";
import DataRes from "../diagnoz/diognoz";
import "./App.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

class Summary extends Component {
  reload = (e) => {
    e.preventDefault();
    window.location.reload()
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { firstname, lastname, email, phone } = this.props;

    const generatePDF = () => {
      const input = document.getElementById("summary_id");

      html2canvas(input, { width: 1500, height: 1000 }).then((canvas) => {
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
      <div className="form">
        <div>
          <Stepper
            steps={[
              { label: "Личная информация" },
              { label: "Поставить диагноз" },
              { label: "Диагностика пациента" },
            ]}
            activeStep={2}
            styleConfig={{
              activeBgColor: "#2b7cff",
              activeTextColor: "#fff",
              inactiveBgColor: "#fff",
              inactiveTextColor: "#2b7cff",
              completedBgColor: "#fff",
              completedTextColor: "#2b7cff",
              size: "3em",
            }}
            className={"stepper"}
            stepClassName={"stepper__step"}
          />

          <div id="summary_id">
            <div className="summary">
              <h2 className="summary__heading">Персональные данные пациента</h2>
              <div>
                <div>
                  <p>
                    <span className="summary__item-title">Имя пациента:</span>{" "}
                    {firstname}{" "}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="summary__item-title">
                      Фамилия пациента:
                    </span>{" "}
                    {lastname}{" "}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="summary__item-title">
                      Отцовство пациента:
                    </span>{" "}
                    {email}{" "}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="summary__item-title">
                      Телефон пациента:
                    </span>{" "}
                    {phone}
                  </p>
                </div>
              </div>
            </div>

            <div className="summary">
              <h2 className="summary__heading">Диагностика пациента</h2>
              <DataRes />
            </div>
          </div>

          <div className="buttons"> 
            <button className='buttons__button buttons__button--back' id="button-pdf" onClick={generatePDF}>
              Сохранить в PDF
            </button>
            <button className='buttons__button buttons__button--next' onClick={this.reload}>Перезагрузить</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
