let firstDiv = $('<div>Click here</div>');
let body = $('body');
let ul1 = $('<ul></ul>')
let input = $('#input1');

body.append(firstDiv)
body.append(ul1)

firstDiv.on('click', function(){
    ul1 = (`<ul>${input.val()}</ul>`)
    body.append(ul1)
})

