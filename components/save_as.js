import saveAsPopup from "../templates/save-as";
import render from "../import/render";
import { selectAndFocusInput } from "./save";
export default function saveAs() {
  $(".s-save-as").click(function() {
    render( saveAsPopup ).runScript(selectAndFocusInput);
  });
}