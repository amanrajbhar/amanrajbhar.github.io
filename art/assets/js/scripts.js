/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {

    /*********  Hide Show Password   **********/
    $("#showHide").click(function () {
        if ($(".password").attr("type") == "password") {
            $(".password").attr("type", "text");

        } else {
            $(".password").attr("type", "password");
        }
    });

/*********  Hide Show Send Mail   **********/
    $(".sign-up").click(function () {
        $('.sign-up-wrapper').hide();
        $('.mail-send-wrapper').show();
    });
});
