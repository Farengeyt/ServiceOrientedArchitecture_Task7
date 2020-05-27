var params = { 'mark': 5 };

function grater_than_clear() {

    inputData = document.getElementById("grater_input_clear").value;
    params = { 'mark': inputData };

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:49893/Service1.svc/json/GetStudentsGraterThan');

    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    xhr.send(JSON.stringify(params));

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            var result = JSON.parse(xhr.response).GetStudentsGraterThanResult
            var trHTML = '<tbody><tr><th>Name</th><th>AvgMark</th></tr>';
            result.forEach(element => trHTML += '<tr><td>' + element.Name + '</td><td>' + element.AvgMark + '</td></tr>')
            trHTML += "</tbody >";
            document.getElementById('grater_records_table_clear').innerHTML = trHTML;
        }
    };

}

function lower_than_clear() {

    inputData = document.getElementById("lower_input_clear").value;
    params = { 'mark': inputData };

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:49893/Service1.svc/json/GetStudentsLowerThan');

    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    xhr.send(JSON.stringify(params));

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            console.log(JSON.parse(xhr.response));
            var result = JSON.parse(xhr.response).GetStudentsLowerThanResult
            var trHTML = '<tbody><tr><th>Name</th><th>AvgMark</th></tr>';
            result.forEach(element => trHTML += '<tr><td>' + element.Name + '</td><td>' + element.AvgMark + '</td></tr>')
            trHTML += "</tbody >";
            document.getElementById('lower_records_table_clear').innerHTML = trHTML;
        }
    };
}

function in_range_clear() {
    inputDataMin = document.getElementById("range_input_min_clear").value;
    inputDataMax = document.getElementById("range_input_max_clear").value;
    params = { 'minMark': inputDataMin, 'maxMark': inputDataMax };

    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://localhost:49893/Service1.svc/json/GetStudentsInRange');

    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    xhr.send(JSON.stringify(params));

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            var result = JSON.parse(xhr.response).GetStudentsInRangeResult
            var trHTML = '<tbody><tr><th>Name</th><th>AvgMark</th></tr>';
            result.forEach(element => trHTML += '<tr><td>' + element.Name + '</td><td>' + element.AvgMark + '</td></tr>')
            trHTML += "</tbody >";
            document.getElementById('range_records_table_clear').innerHTML = trHTML;
        }
    };

}