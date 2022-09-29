let buttonUp = $('#button-up');
let buttonDown = $('#button-down');
let imageMoveUpAndDown = $('#image-move-up-down');
let counterUp = 1;
let counterDown = 0;
let widthScreen = window.screen.width;


buttonUp.click(function () {
    if(widthScreen > 1920) {
        imageMoveUpAndDown.animate({top: '-=40'},1000);
    } else if(widthScreen <= 1920 && widthScreen > 768) {
        imageMoveUpAndDown.animate({top: '-=40'},1000);
    } else if(widthScreen <= 768 && widthScreen > 490) {
        imageMoveUpAndDown.animate({top: '-=30'},1000);
    } else if(widthScreen <= 490 && widthScreen > 400) {
        imageMoveUpAndDown.animate({top: '-=20'},1000);
    } else if(widthScreen <= 400) {
        imageMoveUpAndDown.animate({top: '-=15'},1000);
    }
    buttonUp.attr('disabled', 'disabled');
    buttonDown.removeAttr('disabled');
});

buttonDown.click(function () {
    if(widthScreen > 1920) {
        imageMoveUpAndDown.animate({top: '-=40'},1000);
    }
    else if (widthScreen <= 1920 && widthScreen > 768) {
        imageMoveUpAndDown.animate({top: '+=40'},1000);
    } else if(widthScreen <= 768 && widthScreen > 490) {
        imageMoveUpAndDown.animate({top: '+=30'},1000);
    } else if(widthScreen <= 490 && widthScreen > 400) {
        imageMoveUpAndDown.animate({top: '+=20'},1000);
    } else if(widthScreen <= 400) {
        imageMoveUpAndDown.animate({top: '+=15'},1000);
    }
    buttonDown.attr('disabled', 'disabled');
    buttonUp.removeAttr('disabled');
});