import "./patient.css";
import male from "./img/male.png";
import maleBlue from "./img/male_blu.png";
import female from "./img/female.png";
import femaleBlue from "./img/female_blue.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToOption } from "../store/selection";

function GenderFunc() {
  const dispatch = useDispatch();
  const [showFe, setShowFe] = useState(false);
  const [show, setShow] = useState(false);
  function showFemale() {
    setShowFe(!showFe);
  }
  function showMale() {
    setShow(!show);
  }
  return (
    <>
      <div className="gender">
        <div className="gender_item">
          <p
            onChange={(e) => dispatch(addToOption(JSON.parse(e.target.value)))}
            className={`${
              showFe ? "gender_opt gender_opt--active" : "gender_opt"
            }`}
            value={0}
            onClick={showFemale}
          >
            {showFe ? (
              <img src={femaleBlue} alt="" />
            ) : (
              <img src={female} alt="" />
            )}
            Женщина
          </p>
          <p
            onChange={(e) => dispatch(addToOption(JSON.parse(e.target.value)))}
            className={`${
              show ? "gender_opt gender_opt--active" : "gender_opt"
            }`}
            onClick={showMale}
            value="1"
          >
            {show ? <img src={maleBlue} alt="" /> : <img src={male} alt="" />}
            Мужчина
          </p>
        </div>
      </div>
    </>
  );
}

export default GenderFunc;
