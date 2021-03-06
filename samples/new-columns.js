
// CSV sample - Copyright David Worms <open@adaltas.com> (BSD Licensed)

// node samples/column.js
var csv = require('..');

csv()
.fromPath(__dirname+'/columns.in',{
    columns: true
})
.toStream(process.stdout, {
    newColumns: true,
    end: false
})
.transform(function(data){
    data.name = data.firstname + ' ' + data.lastname
    return data;
});

/*

`node samples/new-columns.js`

82,Preisner,Zbigniew,Zbigniew Preisner
94,Gainsbourg,Serge,Serge Gainsbourg

*/
