$(function () {
    // jQuery.get("./v1.0/projects", function (res) {
    //     console.log("************************************************");
    //     console.log(res);
    //     console.log("************************************************");
    // })
    // $.cookie('SESSION', '798c3aec-1234-4cfe-5678-549f3eaefa82');
    
    $.ajax({
        url: "http://127.0.0.1:8081/v1.0/projects",
        type: "GET",
        // headers: {
        //     "cftk" : "6W3V-I8UX-1234-TYL3-6789-YWHH-FWKF-NDKG",
        // },
        xhrFields: { withCredentials: true },
        /*
        beforeSend: function(jqXHR, settings) {
            jqXHR.setRequestHeader('Accept', 'text/plain; charset=utf-8');
            jqXHR.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
        },
        */
        error: function(jqXHR, textStatus, errorThrown) {
            //....
        },
        success: function(data, textStatus, jqXHR) {
            console.log("************************************************");
            console.log(data);
            console.log("************************************************");
        }
    });
})