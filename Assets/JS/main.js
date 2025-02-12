/* dropdown */
$(".dropdown").each((index, el) => {
    $(el).find(".dropdownToggler").click(() => {
        $(el).find(".dropdownToggler").find("svg").toggleClass("rotate-180")
        $(el).find(".dropdownList").slideToggle()
    })
})