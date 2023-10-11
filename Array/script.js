a1 = [1,2,3,4,5,6,7];

a2 = a1.filter(value => value > 4);

a3 = Math.max(...a1);

console.log(a3);

stringvalue = 'caralhow';

console.log(stringvalue.filter((value, index) => {
    return (index % 2) == 0 
}));
