$(document).ready(function () {
    /*$('span').click(function () {
        var ThisItems = $('p').html();
        var ItemsArray = ['Tim', 'Bomb', 'John', 'Jason', 'Chirs'];
        var num = Math.random();
        num = num * 5;
        num = Math.floor(num);
        $(this).html(ItemsArray[num]);
    });*/
    var origin = [1, 2, 'a', 3, 1, 'b', 'a'];
    var result = origin.reduce((obj, item) => {
        obj[item] = 1;
        return obj;
    }, {});
    console.log(Object.keys(result)); // ["1", "2", "3", "a", "b"]
    
});