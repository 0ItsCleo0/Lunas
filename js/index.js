//Handling Type
const CategoryList = {Websites:"#Websites", Artwork:"#Artwork"};
const Categories = Object.values(CategoryList)
function closeCategories(){
for (var num = 0; num <= 5; num++){
    if ($(Categories[num]).hasClass("ActiveCategory")) {
        const CategoryClose = gsap.timeline({ defaults: { ease: "power1.out" } });
        CategoryClose.to(
            ".ActiveCategory", { 
            opacity: "0", 
            height: "0",
            duration: 0.5
        });
        CategoryClose.to(
            ".ActiveCategory", { 
            zIndex: "-1", 
            duration: 0.1
        });
        $(".ActiveCategory").removeClass("ActiveCategory");
        $(".SelectedCategory").removeClass("SelectedCategory");
    }}
}

$(".CategoryItem").on("click",function(){
    const toActive = $(this).attr("data-active"); 
    if ($(toActive).attr("class") != "type-open") {
        closeCategories()
        $(toActive).addClass("ActiveCategory");
        $(this).addClass("SelectedCategory");
        const CategoryOpen = gsap.timeline({ defaults: {ease: "expo.inOut"} });
        CategoryOpen.to(
            ".ActiveCategory", { 
            zIndex: "2", 
            duration: 0.1
        });
        CategoryOpen.to(
            ".ActiveCategory", { 
            opacity: "1", 
            height: "500px",
            duration: 0.5
        });
    }
});