import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import data from '../../database/data.json'
import "./selectItem.css";
import { useDispatch} from "react-redux";
import { addToOption } from "../store/selection/index";

export default function SelectItem() {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.selection);

  return (
    <div className="container">
      <div className="select_item">
        {data.map((res) => {
          return (
            <FormControl
            className="form_control"
              sx={{
                m: 1,
              }}
              size="small"
            >
              <p className="input_label">{res.name}</p>

              <Select
                onChange={(e) =>
                  dispatch(addToOption(JSON.parse(e.target.value)))
                }
                labelId="demo-select-small-label"
                id="demo-select-small"
              >
                {res.TashxisValues.map((i) => {
                  return (
                    <MenuItem
                      className="menu_item"
                      value={i.value_number}
                    >
                      {i.value_name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          );
        })}
      </div>
    </div>
  );
}
