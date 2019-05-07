function loadStyleSheet(src) {
        if (document.createStyleSheet){
            document.createStyleSheet(src);
        }
        else {
            loadcss = document.createElement('link');
            loadcss.setAttribute("rel", "stylesheet");
            loadcss.setAttribute("type", "text/css");
            loadcss.setAttribute("href", src);
            document.getElementsByTagName("head")[0].appendChild(loadcss);
        }
    };
    var bookResultsTable;
    var skillLevelFilter = "0";
    var approachFilter = "0";
    var outlookFilter = "0";
    var affiliationFilter = "0";
    $(document).ready( function () {    
        loadStyleSheet("{{ baseurl }}/assets/css/bootstrap.min.css");
        loadStyleSheet("{{ baseurl }}/assets/css/font-awesome.min.css");
        loadStyleSheet("{{ baseurl }}/assets/css/swiper.min.css");
        loadStyleSheet("{{ baseurl }}/assets/css/bootsnav.css");
        loadStyleSheet("{{ baseurl }}/assets/css/style.css");
        loadStyleSheet("{{ baseurl }}/assets/css/responsive.css");
        loadStyleSheet("{{ baseurl }}/assets/css/datatables.min.css");

        bookResultsTable = $('#bookResults').DataTable({
                paging: false,
                ordering: false,
                info: false,
                "columnDefs": [
                    { "visible": false, "targets": [2,3,4,5] }
                ]
            }
        );
        resetFilters();
    });
    function resetFilters(){        
        filterBookResults();
        skillLevelFilter = "";
        approachFilter = "";
        outlookFilter = "";
        affiliationFilter = "";
    }
    function filterBookResults(){ 
        if (skillLevelFilter == "" && approachFilter == "" && outlookFilter == "" && affiliationFilter == ""){
            skillLevelFilter = "0";
            approachFilter = "0";
            outlookFilter = "0";
            affiliationFilter = "0";
            resetFilters();
        }
        else{
            bookResultsTable.columns(2).search(skillLevelFilter).draw();
            bookResultsTable.columns(3).search(approachFilter).draw();
            bookResultsTable.columns(4).search(outlookFilter).draw();
            bookResultsTable.columns(5).search(affiliationFilter).draw();
        }        
    }
    function filterBeginner(){
        $("#advancedButton").removeClass('active');
        if ($("#beginnerButton").hasClass('active')){
            skillLevelFilter = "";
        }
        else {
            skillLevelFilter = "beginner"
        }
        filterBookResults();
    }
    function filterAdvanced(){
        $("#beginnerButton").removeClass('active');
        if ($("#advancedButton").hasClass('active')){
            skillLevelFilter = "";
        }
        else {
            skillLevelFilter = "advanced"
        }
        filterBookResults();
    }
    function filterTheoretical(){
        $("#practicalButton").removeClass('active');
        if ($("#theoreticalButton").hasClass('active')){
            approachFilter = "";
        }
        else {
            approachFilter = "theoretical"
        }
        filterBookResults();
    }
    function filterPractical(){
        $("#theoreticalButton").removeClass('active');
        if ($("#practicalButton").hasClass('active')){
            approachFilter = "";
        }
        else {
            approachFilter = "practical"
        }
        filterBookResults();
    }
    function filterSecular(){
        $("#spiritualButton").removeClass('active');
        if ($("#secularButton").hasClass('active')){
            outlookFilter = "";
        }
        else {
            outlookFilter = "secular"
        }
        filterBookResults();
    }
    function filterSpiritual(){
        $("#secularButton").removeClass('active');
        if ($("#spiritualButton").hasClass('active')){
            outlookFilter = "";
        }
        else {
            outlookFilter = "spiritual"
        }
        filterBookResults();
    }
    function filterOpen(){
        $("#sectarianButton").removeClass('active');
        if ($("#openButton").hasClass('active')){
            affiliationFilter = "";
        }
        else {
            affiliationFilter = "open"
        }
        filterBookResults();
    }
    function filterSectarian(){
        $("#openButton").removeClass('active');
        if ($("#sectarianButton").hasClass('active')){
            affiliationFilter = "";
        }
        else {
            affiliationFilter = "sectarian"
        }
        filterBookResults();
    }