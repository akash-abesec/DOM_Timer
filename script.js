let stopFlag = false

const toggleFlag = () => {
    stopFlag = !stopFlag;
};

const renderDate = () => {
    if (stopFlag) {
        return;
    }
    const date = new Date();
    document.getElementById("demo2").innerHTML = date.toLocaleTimeString();
};

setInterval(renderDate, 1000);
