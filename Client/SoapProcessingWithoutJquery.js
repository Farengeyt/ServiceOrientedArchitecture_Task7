function grater_than_clear() {
    inputData = document.getElementById("grater_input_clear").value;
    inputParams = '<wcf:mark>' + inputData + '</wcf:mark>';
    soap('GetStudentsGraterThan', inputParams, 'grater_records_table_clear')
}

function lower_than_clear() {
    inputData = document.getElementById("lower_input_clear").value;
    inputParams = '<wcf:mark>' + inputData + '</wcf:mark>';
    soap('GetStudentsLowerThan', inputParams, 'lower_records_table_clear')
}

function in_range_clear() {
    inputMinData = document.getElementById("range_input_min_clear").value;
    inputMaxData = document.getElementById("range_input_max_clear").value;
    inputParams = '<wcf:minMark>' + inputMinData + '</wcf:minMark><wcf:maxMark>' + inputMaxData + '</wcf:maxMark>';
    soap('GetStudentsInRange', inputParams, 'range_records_table_clear')
}

function soap(method, inputParams, output) {
    var xmlhttp = new XMLHttpRequest();

    //replace second argument with the path to your Secret Server webservices
    xmlhttp.open('POST', 'http://localhost:49893/Service1.svc/basic', true);

    xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=UTF-8')
    //create the SOAP request
    //replace username, password (and org + domain, if necessary) with the appropriate info
    var strRequest =
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:wcf="http://mycompany.com/wcf">' +
        '<soapenv:Header/>' +
        '<soapenv:Body>' +
        '<wcf:' + method + '>' +
        inputParams +
        '</wcf:' + method + '>' +
        '</soapenv:Body>' +
        '</soapenv:Envelope >';

    //specify request headers
    xmlhttp.setRequestHeader("SOAPAction", '"http://mycompany.com/wcf/IService1/' + method + '"');

    //send the SOAP request
    xmlhttp.send(strRequest);

    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) {
            console.log(`Ошибка ${xmlhttp.status}: ${xmlhttp.statusText}`);
        } else {
            var listResponse = xmlhttp.responseXML.getElementsByTagName('a:Student');

            var trHTML = '<tbody><tr><th>Name</th><th>AvgMark</th></tr>';
            for (i = 0; i < listResponse.length; i++) {
                trHTML += '<tr><td>' + listResponse[i].childNodes[0].textContent + '</td><td>' + listResponse[i].childNodes[1].textContent + '</td></tr>';
            }
            trHTML += "</tbody >";
            document.getElementById(output).innerHTML = trHTML;
        }
    };

};