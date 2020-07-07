
$("ul").on("click", "li", function () {
    $(this).toggleClass("canceled");
});

$("ul").on("click", "span.trash", function (event) {
    $(this).parent().fadeOut(300, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input").on("keypress", function (event) {
    if (event.keyCode === 13) {
        addItem($(this).val());
        $(this).val("");
    }
});

$(".fa-plus").on("click", function () {
    $("input").fadeToggle();
});

$("ul").on("click", "span.pencil", function (event) {
    var data = $(this).parent().innerText;
    console.log($(this).parent().innerText);
    event.stopPropagation();
});

function addItem(msg) {
    let ul = $("ul");
    let li = $("<li/>");
    // let span = document.createElement("span");
    let span1 = $("<span/>");
    span1.addClass("trash");
    let text = document.createTextNode(msg);
    // let span2 = $("<span/>");
    // span2.addClass("pencil");
    if (text.length !== 0) {
        span1.html('<i class="fa fa-trash-o" aria-hidden="true"></i>');
        // span2.html('<i class="fa fa-pencil" aria-hidden="true"></i>');
        li.append(span1);
        li.append(text);
        // li.append(span2);
        ul.append(li);
    }
}