var b = new Promise( function( resolve, reject )
    {
    reject( "1" );
    } );

async function a()
    {
    var first = await b;
    console.log( "a - " + first );
    var second = first + " 2";
    return second;
    }

async function main()
    {
    try {
        var r = await a();
        return r;
        }
    catch ( ex )
        {
        console.log( "Exception: " + ex );
        }
    }

main().then( value=>{ console.log( value ) } );

