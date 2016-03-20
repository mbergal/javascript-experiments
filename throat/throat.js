var throat  = require( 'throat' );
var R = require( 'ramda' );
var sleep = require( 'sleep-promise' );

function work( index )
    {
    console.log( "starting " + index );
    return sleep( 2000 ).then( ()=>console.log( "done " + index ) );
    }

R.range( 0, 10 ).map( throat( 2, work ) )
