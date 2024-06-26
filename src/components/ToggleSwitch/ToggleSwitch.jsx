import "./ToggleSwitch.css";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";
import { useContext } from "react";

function ToggleSwitch() {
  const tempUnit = useContext(CurrentTempUnitContext);
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch__input"
        onChange={tempUnit.handleToggleSwitchChange}
      />
      <span
        className={
          tempUnit.currentTempUnit === "F"
            ? "toggle-switch__slider toggle-switch__slider_f"
            : "toggle-switch__slider toggle-switch__slider_c"
        }
      ></span>
      <p
        className={
          tempUnit.currentTempUnit === "F"
            ? "toggle-switch__scale-f toggle-switch__scale-f_active"
            : "toggle-switch__scale-f"
        }
      >
        F
      </p>
      <p
        className={
          tempUnit.currentTempUnit === "C"
            ? "toggle-switch__scale-c toggle-switch__scale-c_active"
            : "toggle-switch__scale-c"
        }
      >
        C
      </p>
    </label>
  );
}

export default ToggleSwitch;
