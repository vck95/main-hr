// var data = [{
//     "Sl no":1,
//     "Document Name":"insurance",
//     "Date of Creation":"1st jan 2022",
//     "Created By":"Shreya",
//     "Last Modified":"31-dec-2022",
//     "Modified By":"Anagha",
//     "Action": " ",
// },
// ];


$(document).ready(function() {
    var dataTable = $('#filtertable').DataTable({
        "pageLength":5,
    //              "destroy": true, // In order to reinitialize the datatable
    //   "pagination": true, // For Pagination
    //   "sorting": true, // For sorting
    //   "aaData": data,
        'aoColumnDefs':[{
            'bSortable':false,
            'aTargets':['nosort'],
    }],
        scrollY:        "250px",
        scrollX:        true,
        scrollCollapse: false,
        paging:        true,
        fixedColumns:   {
            heightMatch: "300px"
        },
    
        "aoColumns":[
            null,
            null,
            null,
            null,
            null,
            null,
            null
            // {
            //     data:"Sl no"
            // },
            // {
            //     data:"Document Name"
            // },
            // {
            //     data:"Date of Creation"
            // },
            // {
            //     data:"Created By"
            // },
            // {
            //     data:"Last Modified"
            // },
            // {
            //     data:"Modified By"
            // },
            // {
            //     data:"Action"
            // }


        ],
        "order":false,
        "bLengthChange":false,
        "dom":'<"top">ct<"top"p><"clear">'
    });
    $("#filterbox").keyup(function(){
        dataTable.search(this.value).draw();
    });
} );
// const modal = document.addEventListener('click',()=>{

// })

// document.addEventListener("keydown",(e)=>{
// if (e.key === 'Escape') {
//     // console.log("Y press esc");
//     if (!classlist.contains("btn-group")) {
//         data-dismiss();
//     }else{
//         console.log("wrg");
//     }
// }   
// })
