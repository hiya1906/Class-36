class Form{
    constructor(){

    }

    play(){
        var title = createElement("h1");
        title.html("Car Racing Game");
        title.position(475,90);
        var input = createInput("Name:");
        input.position(475,160);
        var button = createButton("Start");
        button.position(520,190);
        button.mousePressed(function(){
            button.hide();
            input.hide();
            var name = input.value();
            playerCount+=1;
            player.updateCount(playerCount);
            player.nameUpdate(name);
            var greeting = createElement("h3");
            greeting.html("Hello" + name);
            greeting.position(475,320);
        })
    }

}