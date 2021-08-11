const $lorem = new (require('./index.js')).base();

for (let i = 0 ; 10 > i ; i++)
     console.log($lorem.word());
for (let i = 0 ; 10 > i ; i++)
     console.log($lorem.stence());
for (let i = 0 ; 4 > i ; i++)
     console.log($lorem.paragraph());
