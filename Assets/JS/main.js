/* dropdown */
$(".dropdown").each((index, el) => {
    $(el).find(".dropdownToggler").click(() => {
        $(el).find(".dropdownToggler").find("svg").toggleClass("rotate-180")
        $(el).find(".dropdownList").slideToggle()
    })
})


/* modes */
function checkExpertMode()  {
    if ($("#changeMode").is(':checked')) {
        $(".expertMode").each((index,el) => {
            $(el).show(500)
        })
        $(".defaultMode").each((index,el) => {
            $(el).hide(500)
        })
    } else {
        $(".expertMode").each((index,el) => {
            $(el).hide(500)
        })
        $(".defaultMode").each((index,el) => {
            $(el).show(500)
        })
    }    
}

$(document).ready(() => {
    checkExpertMode()
})

$("#changeMode").click(() => {
    checkExpertMode()
})