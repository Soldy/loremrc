const nanoTest  = new (require('nanoTest')).test({
    'progress_bar':false
});
const $lorem = new (require('./index.js')).base();


nanoTest.add(
    'word',
    {
        'function':function(){
            return (typeof $lorem.word());
        },
        'options':[]
    },
    '===',
    'string'
);

nanoTest.add(
    'stence',
    {
        'function':function(){
            return (typeof $lorem.stence());
        },
        'options':[]
    },
    '===',
    'string'
);

nanoTest.add(
    'paragraph',
    {
        'function':function(){
            return (typeof $lorem.paragraph());
        },
        'options':[]
    },
    '===',
    'string'
);

nanoTest.run();
