import { useSelector } from "react-redux";

function DataRes() {
  const state = useSelector((state) => state.selection);
  console.log(state.result);

  const qisqa = "Низкий риск (BMScore L):";
  const orta = "Средный риск(BMScore M):";
  const yuqori = "Высокий риск (BMScore H):";

  const newElement = document.createElement("span");
  try {
    if (state.result <= 24.6) {
      newElement.append(
        qisqa +
          " " +
          state.result +
          " " +
          ` балл Резекция с эндопротезированием
        Лучевая терапия
        Противоопухолевые, антирезорбтивные, гормональные, таргетные и биологические препараты`
      );
    }
    if (state.result >= 24.7 && state.result <= 53.3) {
      newElement.append(
        orta +
          " " +
          state.result +
          " " +
          ` балл Остеосинтез
        Лучевая терапия
        Противоопухолевые, антирезорбтивные, гормональные, таргетные и биологические препараты`
      );
    }
    if (state.result >= 53.4) {
      newElement.append(
        yuqori +
          " " +
          state.result +
          " " +
          ` балл Паллиативный
        Лучевая терапия
        Противоопухолевые, антирезорбтивные, гормональные, таргетные и биологические препараты`
      );
    }
    console.log(state.result);
  } catch (error) {
    console.log(error);
  }

  // var resDivEl = document.getElementById("result");
  // var p = document.createElement("p");
  // resDivEl.appendChild(p);

  // if (state.result <= 24.6) {
  //   resDivEl.innerHTML(
  //     `Kam xavf (BMScore L): ${state.result} ball Endoprostetik yordamida rezektsiya
  //       Radiatsiya terapiyasi
  //       Antitumor, antirezorptiv, gormonal, maqsadli va biologik preparatlar`
  //   );
  // }
  // if (state.result >= 24.7 && state.result <= 53.3) {
  //   p.textContent(
  //     `O'rta xavf (BMScore H): ${state.result} ball Endoprostetik yordamida rezektsiya
  //           Radiatsiya terapiyasi
  //           Antitumor, antirezorptiv, gormonal, maqsadli va biologik preparatlar`
  //   );
  // }
  // if (state.result >= 53.4) {
  //   p.textContent(
  //     `Yuqori xavf (BMScore L): ${state.result} ball Endoprostetik yordamida rezektsiya
  //         Radiatsiya terapiyasi
  //         Antitumor, antirezorptiv, gormonal, maqsadli va biologik preparatlar`
  //   );
  // }

  // return (
  //   <div id="result" style={{ textAlign: "center" }}>
  //     <p></p>
  //   </div>
  // );

  return (
    <div>
      <div ref={node => node.appendChild(newElement)}></div>
    </div>
  )
}

export default DataRes;
