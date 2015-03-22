/* @flow */

var React = require('react');

var FixedDataTable = require('fixed-data-table');

var Table = FixedDataTable.Table;

var Column = FixedDataTable.Column;

class TableControl {
    constructor() {

         this.state = {rows: [{recipe: 'chocolate', size: 'L', date: new Date('2015-03-18')},
                   {recipe: 'strawberry', size: 'M', date: new Date('2015-03-20')},
                   {recipe: 'banana', size: 'M', date: new Date('2015-03-20')}]};

    }

    sortByRecipe() {
        this.setState({rows: this.state.rows.sort(function(a, b) {
            return a.recipe.localeCompare(b.recipe);
        })});
    }

    getRow(rowIndex) {
        return this.state.rows[rowIndex];
    }

    render() {
        var tableControl = this;
        var recipeHeaderRenderer = function() {

            return (<div onClick={tableControl.sortByRecipe}>Recipe</div>);
        };

        return (<Table
      maxHeight={300}
      width={400}
      rowsCount={this.state.rows.length}
      rowHeight={50}
      headerHeight={40}
      rowGetter={this.getRow.bind(this)}>
    <Column dataKey="recipe"
             width={100}
             flexGrow={1}
             headerRenderer={recipeHeaderRenderer}
    label="Recipe"/>

    <Column dataKey="size"
             width={100}
             flexGrow={2}
    label="Size"/>

    <Column dataKey="date"
         width={100}
         label="Date"
         cellRenderer={function(cellData) {return new Intl.DateTimeFormat().format(cellData); }}/>
    </Table>
        );
    }
}

React.render(
    <TableControl/>,
    document.getElementById('fixedDataTable')
);
