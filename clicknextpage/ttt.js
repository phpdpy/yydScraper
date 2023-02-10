var clickNext = function () {
    const nextButton = document.querySelector(".next a");
    console.log(nextButton);
    var event = new CustomEvent('mockclick', {
        detail: {
            e: "next"
        },
        bubbles: true,
        cancelable: true,
    });
    document.body.dispatchEvent(event);
}
clickNext();