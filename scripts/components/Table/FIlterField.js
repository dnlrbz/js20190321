import BaseComponent from "../BaseComponent/BaseComponent";

export class InputField extends BaseComponent{
    constructor(element) {
        super();
        this._el = element;

        this._render();
    }



    _render() {
        this._el.innerHTML = `
            <div class="row">
                <form class="col s6">
                  <div class="row">
                    <div class="input-field col s6">
                      <textarea id="textarea1" class="materialize-textarea"></textarea>
                      <label for="textarea1">Textarea</label>
                    </div>
                  </div>
                </form>
              </div>
        `
    }
}