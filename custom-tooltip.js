/**
 * Modified from vlandham.github.com/vis/gates/js/CustomTooltip.js
 */
function CustomTooltip( tooltipId, width ) {

    var tooltipId = tooltipId;
    $("body").append("<div class='tooltip' id='" + tooltipId + "'></div>");

    var tooltip = $('#'+tooltipId);

    if(width){
        tooltip.css("width", width);
    }

    tooltip.on("mouseleave", function(e) { hideTooltip(); });

    hideTooltip();

    function showTooltip( content, event ) {
        tooltip
            .html(content)
            .show();

        updatePosition(event);
    }

    function hideTooltip(){
        tooltip.hide();
    }

    function updatePosition( event ) {
        var xOffset = 0,
            yOffset = 0,
            ttw = tooltip.width(),
            tth = tooltip.height(),
            wscrY = $(window).scrollTop(),
            wscrX = $(window).scrollLeft(),
            curX = (document.all) ? event.clientX + wscrX : event.pageX,
            curY = (document.all) ? event.clientY + wscrY : event.pageY,
            ttleft = Math.max( ((curX - wscrX + xOffset*2 + ttw) > $(window).width()) ? curX - ttw - xOffset*2 : curX + xOffset, wscrX + xOffset ),
            tttop = Math.max( ((curY - wscrY + yOffset*2 + tth) > $(window).height()) ? curY - tth - yOffset*2 : curY + yOffset, curY + yOffset );

        tooltip.css('top', tttop + 'px').css('left', ttleft + 'px');
    }

    return {
        showTooltip: showTooltip,
        hideTooltip: hideTooltip,
        updatePosition: updatePosition
    };
}
