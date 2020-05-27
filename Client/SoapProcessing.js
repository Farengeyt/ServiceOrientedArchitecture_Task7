function grater_than() {
    inputData = document.getElementById("grater_input").value;
    inputParams = '<wcf:mark>' + inputData + '</wcf:mark>';
    soap2('GetStudentsGraterThan', inputParams, 'grater_records_table');
}

function lower_than() {
    inputData = document.getElementById("lower_input").value;
    inputParams = '<wcf:mark>' + inputData + '</wcf:mark>';
    soap2('GetStudentsLowerThan', inputParams, 'lower_records_table');
}

function in_range() {
    inputMinData = document.getElementById("range_input_min").value;
    inputMaxData = document.getElementById("range_input_max").value;
    inputParams = '<wcf:minMark>' + inputMinData + '</wcf:minMark><wcf:maxMark>' + inputMaxData + '</wcf:maxMark>';
    soap2('GetStudentsInRange', inputParams, 'range_records_table');
}

function soap2(method, inputParams, output) {
    document.getElementById(output).innerHTML = "<tbody><tr><th>Name</th><th>AvgMark</th></tr></tbody>";
    var strRequest =
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:wcf="http://mycompany.com/wcf">' +
        '<soapenv:Header/>' +
        '<soapenv:Body>' +
        '<wcf:' + method + '>' +
        inputParams +
        '</wcf:' + method + '>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope >';

    $.ajax({
        url: 'http://localhost:49893/Service1.svc/basic',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("SOAPAction", '"http://mycompany.com/wcf/IService1/' + method + '"');
        },
        type: "POST",
        data: strRequest,
        contentType: 'text/xml; charset=UTF-8',
        error: function (request, status, error) {

            console.log("request:" + request);
            console.log("status:" + status);
            console.log("error:" + error);
        }
    }).done(function (response) {
        var listResponse = response.getElementsByTagName('a:Student');
        var trHTML = '';
        $.each(listResponse, function (i, item) {
            trHTML += '<tr><td>' + item.childNodes[0].textContent + '</td><td>' + item.childNodes[1].textContent + '</td></tr>';
        });

        $('#' + output).append(trHTML);
    });
}