var filterBlock = React.createClass({
    displayName : 'filterBlock',

    propTypes:{
        rows : React.PropTypes.array.isRequired,
        sortAlph: React.PropTypes.bool,
        sortIn: React.PropTypes.bool,
        searchRow: React.PropTypes.string
    },

    getInitialState: function () {
        return {
            sortAlph: false,
            sortIn: false
        };
      },

    sortAlphabet: function(_s){
        this.setState( {sortAlph:_s} );
    },

    sortInput: function(_t){
        this.setState( {sortIn:true, searchRow:_t} );
    },

    render: function(){
        var _request = this.state.searchRow;
        var arrReady = this.props.rows;

        if(this.state.sortAlph){
            var _a = this.props.rows.slice().sort();
            var _arrSorted = _a.map( (v,i) =>
            React.DOM.li({key:i, className:'_li'}, v)
            );
            arrReady = _arrSorted;

        }
        
        if(!this.state.sortAlph){
            var arr = this.props.rows.map( (v,i) =>
            React.DOM.li({key:i, className:'_li'}, v)
            );
            arrReady = arr;
        }

        if(this.state.sortIn){
              var arrInputSorted = this.props.rows.filter(function(item , i) {
                return item.indexOf(_request) >= 0;
              });

              arrReady = arrInputSorted.map( (v,i) =>
              React.DOM.li({key:i, className:'_li'}, v)
              );
        }

        return React.DOM.div({className: 'filterWrap'},
        React.createElement(buttonSort, {cbSortAlph:this.sortAlphabet}),
        React.createElement(searchField, {cbSortInput:this.sortInput}),
            React.DOM.ul({className: 'list'},
                arrReady
            )
        )
    }
})