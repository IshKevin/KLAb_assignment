const item = [ {name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000}, ];
min=item[0].price;
minName=item[0].name;
max=item[0].price;
maxName=item[0].name;

for(let i=0;i<item.length; i++)
{
    
    if(item[i].price<min)
    {
        min=item[i].price;
        minName=item[i].name;
    }
}
console.log("The product that will be bought when you don't have much money is :");
console.log(minName);

for(let i=0;i<item.length; i++)
{
    
    if(item[i].price>min)
    {
        max=item[i].price;
        maxName=item[i].name;
    }
}
console.log("The product that is expensive is :");
console.log(maxName);

sum = 0;

for(let i=0;i<item.length; i++)
{
    sum= sum+item[i].price;
}

console.log("Full price of all product combined is :");
console.log(sum);
sum1 = 0;
for(let i=0;i<item.length; i++)
{
    
    if(item[i].price>min)
    {
       if (item[i].price<=10) {
        continue;
    }
        sum1= sum1+item[i].price;
        
    }
}
console.log("The full price of all product combined except those are under 10 dollar is :");
console.log(sum1);


