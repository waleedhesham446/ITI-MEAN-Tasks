let sum = 0;
process.argv.forEach(element => {
    if(!isNaN(parseInt(element)))
        sum += parseInt(element);
});

console.log(sum);