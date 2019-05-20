import BaseComponent from "../BaseComponent/BaseComponent.js";


export class FilterField extends BaseComponent{
    constructor({element, callback}) {
        super();
        this._el = element;

        this.findByName  = callback;


        this._render();

        this._el.addEventListener('input', event => {
            if (!event.target.closest('#currency-name')) return;

            let name = this._el.querySelector('#currency-name').value;

            this.findByName(name);

        })


    }



    _render() {
        this._el.innerHTML = `
             <div class="row">
                <div class="input-field col s3">
                  <input id="currency-name" type="text" >
                  <label class="active" for="currency-name">Find currency by name</label>
                </div>
             </div>
             <p><span class="hint">Press the column to sort the table</span></p>
        `
    }
}