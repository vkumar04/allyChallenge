$(function () {
    // get json data from code-test.json
    $.getJSON('../js/code-test.json', function (data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
            printData(data[i])
        }
    });
    //pass json and send to frontend
    function printData(rowData) {
        var row = $('tbody');
        row.append($("<tr>" + "<td>" + rowData.name + "</td>" + "<td>" + rowData.apy + ' %' + "</td>" +
            "<td>" + '$' + rowData.earnings.toFixed(2) + "</td>" + "</tr>"));
    }
    // copyright year
    $('#copy').html(new Date().getFullYear());
    // tabs
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })
    // modal
    var modal = $('.modal');
    $('.show-modal').click(function () {
        modal.fadeIn();
    });

    $('.close-modal').click(function () {
        modal.fadeOut();
    });
});