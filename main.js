document.addEventListener('DOMContentLoaded', function () {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle');
    // Move the handle.
    handle.style.left = '50%';

    // Adjust the top panel width.
    topPanel.style.width = '50%';
    

    // parent.addEventListener('mousemove', function (event) {
    //     // Get the delta between the mouse position and center point.
    //     // delta = (event.clientX - window.innerWidth / 2) * 0.5;

    //     // Move the handle.
    //     handle.style.left = event.clientX  + 'px';

    //     // Adjust the top panel width.
    //     topPanel.style.width = event.clientX + 'px';
    // });
    // $('#slide-handle').rangeslider({

    //     // Feature detection the default is `true`.
    //     // Set this to `false` if you want to use
    //     // the polyfill also in Browsers which support
    //     // the native <input type="range"> element.
    //     polyfill: true,

    //     // Default CSS classes
    //     rangeClass: 'rangeslider',
    //     disabledClass: 'rangeslider--disabled',
    //     horizontalClass: 'rangeslider--horizontal',
    //     verticalClass: 'rangeslider--vertical',
    //     fillClass: 'rangeslider__fill',
    //     handleClass: 'rangeslider__handle',

    //     // Callback function
    //     onInit: function () { },

    //     // Callback function
    //     onSlide: function (position, value) {
    //         console.log($('#slide-handle').val())
    //      },

    //     // Callback function
    //     onSlideEnd: function (position, value) { }
    // });
    // $('#slide-handle').val(10).change();
    
    var range = new RangeSlider($("#example"), {
        // size: 1,
        // ratio: 1,
        // multiple: 1.3,
        // borderSize: 0,
        percentage: 50,
        // fgColour: 'transparent',
        bgColour: 'transparent',
        onDown: function (e, percentage) {
            
        },
        onMove: function (e, percentage) {
            // Move the handle.
            handle.style.left = event.clientX + 'px';

            // Adjust the top panel width.
            topPanel.style.width = event.clientX + 'px';
        },
        onUp: function (e, percentage) {
            console.log("Slider control ended");
        }
    });
    $('#example').bind('touchmove', function (e) {
        var x = event.touches[0].clientX;
        var y = event.touches[0].clientY;
        handle.style.left = x  + 'px';
        topPanel.style.width = x + 'px';
        var getpx = (x / $(document).width())*100;
        range.setPercentage(getpx);
        // $('.rangeselector').style.left = x +'px';
    });
    // $("#example").click(function () {
        // $('.handle').on('drag', function () {
        //     // Move the handle.
        //     handle.style.left = event.clientX + 'px';

        //     // Adjust the top panel width.
        //     topPanel.style.width = event.clientX + 'px';
        //     timeoutId = setTimeout(myFunction, 1000);
        // }).on('mouseup mouseleave', function () {
        //     clearTimeout(timeoutId);
        // });
    // });
    // var isDragging = false;
    // $(".handle")
    //     .mousedown(function () {
    //         isDragging = false;
    //     })
    //     .mousemove(function () {
    //         isDragging = true;
    //         // Move the handle.
    //         handle.style.left = event.clientX + 'px';

    //         // Adjust the top panel width.
    //         topPanel.style.width = event.clientX + 'px';
    //     })
    //     .mouseup(function () {
    //         var wasDragging = isDragging;
    //         isDragging = false;
    //         if (!wasDragging) {
    //             $("#throbble").toggle();
    //         }
    //     });
});