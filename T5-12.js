var x = [ 
    [0,1,2,3,4],
    [4,3,2,1,0],
    [5,6,7,8,9]
];
console.log(x);
var d = x.splice(1,1);
console.log("Xoá dòng 2: ");
console.log(x);
var dele = [1,4];
for (var i = 0; i < x.length; i++) {
        var y = x[i];
        x[i] = [];
        for(var j = 0 ; j <y.length ; j++){
            if(dele.indexOf(j) == -1)
            {
                x[i].push(y[j]);
            }
        }
    }
console.log("xoá cột : ");
console.log(x);








// for (var col=0;col<x.length;col++)
// {
//     for(var i=0;i<x.length;i++)
//         {
//             console.log(x[i].splice(col,1));
//         }
// }



// var array = [
//     ["a", "b", "c"],
//     ["a", "b", "c"],
//     ["a", "b", "c"]
// ];
// var idxToDelete = [0,2];
// for (var i = 0; i < array.length; i++) {
//     var temp = array[i];
//     array[i] = [];
//     for(var j = 0 ; j < temp.length ; j++){
//         if(idxToDelete.indexOf(j) == -1)
//         {
//             array[i].push(temp[j]);
//         }
//     }
// }
// console.log(array)