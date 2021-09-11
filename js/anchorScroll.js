function BlazorScrollToId(id) {
    const element = document.getElementById(id);
    if (element instanceof HTMLElement) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
        $("#" + id).addClass("highlight");
        setTimeout(function () {
            $("#" + id).removeClass("highlight");
        }, 3000);
    }
}