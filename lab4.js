var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')(), //open history file
    sigint: true
  });

function view(counter){
    return `Count: ${counter}\n(+) (-)\n(q) for quit`
}



function updated(msg, counter){
    if (msg == "+")
    return counter + 1
    else if (msg == "-")
    return counter -1
    else
    return counter
}

function app(counter){
    const currentView = (view(counter));
    console.clear();
    console.log(currentView);
    const msg = prompt("What would you do? ");
    prompt.history.save();
    app(updated(msg, counter));
    }


app(0)