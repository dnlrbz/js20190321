import BaseComponent from '../BaseComponent/BaseComponent.js';

export class Table extends BaseComponent {
  constructor({ data, element }) {
    super();
    
    this._el = element;
    this._data = data;
     
    this._render(this._data);

    this._el.addEventListener('click', e => {
      if (e.target.closest('th')) {
        const columnName = e.target.innerHTML;
        this.sortByColumnName(columnName);
      }
      this._onRowClick(e);
    })
  }

  _onRowClick(e) {
    const target = e.target.closest('tbody tr');
    if (!target) return;

    const id = target.dataset.id;
    if (id) {
      let rowClickEvent = new CustomEvent('rowClick', {
        detail: { id },
      });
      this._el.dispatchEvent(rowClickEvent);
    }
  }

  filterByName(name) {

    let result = this._data.filter((coin) => {
      return coin.name.toLowerCase().indexOf(name.toLowerCase())!==-1;
    });
    this._render(result);
  }

  sortByColumnName(columnName) {
    //let columnData = this._data.map( item => item[columnName.toLowerCase()]);

    if (columnName.toLowerCase() === 'symbol' || columnName.toLowerCase() === 'name') {
      this._data.sort(function (a,b) {

        return a[columnName.toLowerCase()].localeCompare(b[columnName.toLowerCase()]);
      })
    } else {
      this._data.sort(function (a,b) {
        return a[columnName.toLowerCase()] - b[columnName.toLowerCase()];
      })
    }

    this._render(this._data);




  }



  _render(data) {
      this._el.innerHTML = `
        <table class="data-table highlight"> 
          <thead>
            <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Rank</th>
                <th>Price</th>
            </tr>
          </thead>
          <tbody>
            ${
              data.map(coin => `
                <tr data-id="${coin.id}">
                    <td>${coin.name}</td>
                    <td>${coin.symbol}</td>
                    <td>${coin.rank}</td>
                    <td>${coin.price}</td>
                </tr>
              `).join('')
            }
          </tbody>
        </table>
        `;
  }
}
