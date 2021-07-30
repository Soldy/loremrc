'use strict';


const loremBase = function(){
    this.word = function(size){
        return _word(size);
    }
    const _single = ['a','e','i','o','u'];
    const _multi = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','y','z'];
    const _single_double = ['ei','ie','io','iu','oi','ua','ui']
    const _multi_double = [
        'cc','ch','ct','cr','dd',
        'dh','dm','dr','dv','ff',
        'fr','gg',
        'gn','gh','ll','lv','ls',
        'mn','mp','nd','nm','ps',
        'pg','rd','rt','sp','st',
        'ss','tr','tp'
    ];
    let _type = '';
    let _size = 9;
    const _one_word = ['a', 'o'];
    const _two_word = ['an', 'la', 'do', 'qo'];
    const _any = function(){
        if(Math.random()*2 > 1){
            return _one();
        }else{
            return _double();
        }
    }
    const _one = function(){
         if(_type === 'multi'){
             _type = 'single';
             return _formArray(
                 _single
             );
         }else{
             _type = 'multi';
             return _formArray(
                 _multi
             );
         }
    }
    const _double = function(){
         if(_type === 'multi'){
             _type = 'single';
             return _formArray(
                 _single_double
             );
         }else{
             _type = 'multi';
             return _formArray(
                 _multi_double
             );
         }

    }
    const _formArray = function(arr){
        return arr[
            Math.floor(
                (Math.random()*arr.length)
            )
        ];
    }
    const _word = function(size){
        let word = '';
        if(typeof size === 'undefined')
            size = Math.floor(Math.random()*11)+1;
        _size = size;
        if(size === 0)
            return '';
        if(size === 1)
            return _formArray(
                _one_word
            );
        if(size === 2)
            return _formArray(
                _two_word
            );
        _type = _formArray(['single','multi']);
        while(true){
             if(word.length+2 > size)
                 word +=  _one();
             else
                 word += _any();
             if(word.length >= size)
                 break;
        }
        return word;
    };
}

exports.base = loremBase;
