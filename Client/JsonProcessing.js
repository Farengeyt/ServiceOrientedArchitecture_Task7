var params = { 'mark': 5 };

function grater_than() {
    inputData = document.getElementById("grater_input").value;
    document.getElementById('grater_records_table').innerHTML = "<tbody><tr><th>Name</th><th>AvgMark</th></tr></tbody>";
    if (inputData != '') {
        params = { 'mark': inputData };
        $.ajax({
            type: "POST",
            url: "http://localhost:49893/Service1.svc/json/GetStudentsGraterThan",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(params),
            dataType: "json",
            error: function (request, status, error) {

                console.log("request:" + request);
                console.log("status:" + status);
                console.log("error:" + error);
            }
        }).done(function (response) {
            var trHTML = '';
            $.each(response.GetStudentsGraterThanResult, function (i, item) {
                trHTML += '<tr><td>' + item.Name + '</td><td>' + item.AvgMark + '</td></tr>';
            });
            $('#grater_records_table').append(trHTML);
        });
    }

}

function lower_than() {
    inputData = document.getElementById("lower_input").value;
    document.getElementById('lower_records_table').innerHTML = "<tbody><tr><th>Name</th><th>AvgMark</th></tr></tbody>";
    if (inputData != '') {
        params = { 'mark': inputData };
        $.ajax({
            type: "POST",
            url: "http://localhost:49893/Service1.svc/json/GetStudentsLowerThan",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(params),
            dataType: "json",
            error: function (request, status, error) {

                console.log("request:" + request);
                console.log("status:" + status);
                console.log("error:" + error);
            }
        }).done(function (response) {
            var trHTML = '';
            $.each(response.GetStudentsLowerThanResult, function (i, item) {
                trHTML += '<tr><td>' + item.Name + '</td><td>' + item.AvgMark + '</td></tr>';
            });
            $('#lower_records_table').append(trHTML);
        });
    }

}

function in_range() {
    inputDataMin = document.getElementById("range_input_min").value;
    inputDataMax = document.getElementById("range_input_max").value;
    document.getElementById('range_records_table').innerHTML = "<tbody><tr><th>Name</th><th>AvgMark</th></tr></tbody>";
    if (inputDataMin != '' && inputDataMax != '') {
        params = { 'minMark': inputDataMin, 'maxMark': inputDataMax };
        $.ajax({
            type: "POST",
            url: "http://localhost:49893/Service1.svc/json/GetStudentsInRange",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(params),
            dataType: "json",
            error: function (request, status, error) {

                console.log("request:" + request);
                console.log("status:" + status);
                console.log("error:" + error);
            }
        }).done(function (response) {
            var trHTML = '';
            $.each(response.GetStudentsInRangeResult, function (i, item) {
                trHTML += '<tr><td>' + item.Name + '</td><td>' + item.AvgMark + '</td></tr>';
            });
            $('#range_records_table').append(trHTML);
        });
    }

}
