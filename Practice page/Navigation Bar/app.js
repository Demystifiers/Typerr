

console.log(1);

setTimeout(test, 2000);

function test() {

    xhr = new XMLHttpRequest();

    xhr.open('GET', 'abc.txt', true);

    xhr.onload = function () {
        if (this.status === 200)
            console.log(xhr.responseText);
    }

    xhr.send();
}