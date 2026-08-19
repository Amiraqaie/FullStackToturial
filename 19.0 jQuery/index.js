$(document).ready(function()
{
    // change css style
    $("h1").css("color", "red");

    // change text
    $("h1").text("Bye Bye");

    // add html
    $("button").html("<em>Dont Click on me!</em>");

    // attributes
    $("img").attr("src", "pomp.png")
    console.log($("img").attr("src"));

    // add event listener
    $("h1").click(function (e) { 
        e.preventDefault();
        $("h1").css("color", "purple");
    });

    // event listener to ALL button without for loop
    $("button").click(function (e) {
    e.preventDefault();

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    $("h1").css("color", `rgb(${r}, ${g}, ${b})`);
    });

    // keypress event listener
    $(document).keypress(function (e) { 
        $("h1").text(e.key);
    });

    // jq event handler
    $("h1").on("mouseover", function () {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        $("h1").css("color", `rgb(${r}, ${g}, ${b})`);
    });

    // adding and removing elements
    $("h1").prepend("<button>new button</button>");
    $("h1").after("<button>new button</button>");

    // animation
    $(document).keypress(function (e) { 
        if (e.key === 'h')
        {
            // $("h1").hide();
            $("h1").fadeOut();
        } else if(e.key === 'a')
        {
            $("h1").fadeIn();
        } else if (e.key === 'u')
        {
            $("h1").slideUp();
        } else if (e.key === 'd')
        {
            $("h1").slideDown();
        }
    });

});