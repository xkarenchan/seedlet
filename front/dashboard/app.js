$(document).ready(function() {
	  $("#outside").click(function(e) {
    e.preventDefault();
    $.backstretch('http://dl.dropbox.com/u/515046/www/outside.jpg');
  });

  $("#cheers").click(function(e) {
    e.preventDefault();
    $.backstretch('http://dl.dropbox.com/u/515046/www/cheers.jpg');
  });

  
   $("#button").click(function(){
        var name = document.getElementById("name");
        var s = name.value;
        console.log(s);
    });
});

main();

function main() {
	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://hackingedu.chegg.com/hacking-edu/scholarshipsearch/suggest/?q=computer_science",
	  "method": "GET",
	  "headers": {
	    "authorization": "Basic UVNJeGFXMWRkMXFxaVNXa2hxMk9JMEdVYnRPczVTR0w6ZFhyNzJBODFITU1S RUJmeA==",
	    "cache-control": "no-cache",
	    "postman-token": "f828c5cf-dd37-4e0d-5472-8a759381cd85"
	  }
	};


	var response = {"results":[{"scholarship_id":"8dd5c04f-6c41-4903-b6b6-a1d3d47bf4a1","title":"Missouri University of Science and Technology Trustees' Scholarship","application_availability_date":1441090800000,"application_deadline":1448956800000,"scholarship_provider_id":"bff6050d-59f5-491b-9fc0-41d9ff230524","scholarship_provider_name":"Missouri University of Science and Technology","isHostedByChegg":0},{"scholarship_id":"6a94315d-2a46-44b4-ba81-7138b71330dc","title":"Missouri University of Science and Technology Miner Scholarship","application_availability_date":1441090800000,"application_deadline":1448956800000,"scholarship_provider_id":"bff6050d-59f5-491b-9fc0-41d9ff230524","scholarship_provider_name":"Missouri University of Science and Technology","isHostedByChegg":0},{"scholarship_id":"a55a932e-26f9-44e8-a2e1-95f476396199","title":"Missouri University of Science and Technology Excellence Scholarship","application_availability_date":1441090800000,"application_deadline":1448956800000,"scholarship_provider_id":"bff6050d-59f5-491b-9fc0-41d9ff230524","scholarship_provider_name":"Missouri University of Science and Technology","isHostedByChegg":0},{"scholarship_id":"c23aefe2-7ec2-4141-88eb-c63f4c218c70","title":"Connecticut Funeral Directors Association Mortuary Science Scholarship","application_availability_date":1438412400000,"application_deadline":1446361200000,"scholarship_provider_id":"dcd345b2-e68d-4fb7-b7da-a385b75812bf","scholarship_provider_name":"Connecticut Funeral Directors Association","isHostedByChegg":0},{"scholarship_id":"b9a3ad94-d459-40d7-a941-6006de693838","title":"University of Iowa - College of Liberal Arts and Sciences Excellence Award","application_availability_date":1449734400000,"application_deadline":1449648000000,"scholarship_provider_id":"1c0dd6d7-a993-42cf-bb8c-4a0c4ec891b9","scholarship_provider_name":"University of Iowa","isHostedByChegg":0},{"scholarship_id":"5971a0ab-91dd-40e0-8481-e7f4beac8290","title":"Measurement Science Conference Scholarship","application_availability_date":1443596400000,"application_deadline":1451548800000,"scholarship_provider_id":"49f33714-7950-4cb6-a038-7ec6ba0824ce","scholarship_provider_name":"Measurement Science Conferernce and Training Symposium","isHostedByChegg":0},{"scholarship_id":"6c4abcdf-bf63-4e73-8fdd-209c6e98d814","title":"Masonic-Range Science Scholarship","application_availability_date":1443682800000,"application_deadline":1451894400000,"scholarship_provider_id":"97132d3d-7c31-4d33-b493-71654e83ca28","scholarship_provider_name":"Society for Range Management (SRM)","isHostedByChegg":0},{"scholarship_id":"43618bff-b6d8-494c-b4f9-465a7666021b","title":"Millikin University Leighty Science Scholarship","application_availability_date":1443682800000,"application_deadline":1451635200000,"scholarship_provider_id":"52ae8516-b288-46c9-9611-8b0fc1582744","scholarship_provider_name":"Millikin University","isHostedByChegg":0},{"scholarship_id":"022f0fdf-f531-4fe3-8a3e-37305fbfc114","title":"Hobart and William Smiths Elizabeth Blackwell Class of 1849 Pioneer in Science Scholarship","application_availability_date":1443682800000,"application_deadline":1451635200000,"scholarship_provider_id":"5a1336f9-c339-4c3d-939f-d15695810380","scholarship_provider_name":"Hobart and William Smith Colleges","isHostedByChegg":0},{"scholarship_id":"6eb5e385-0b0b-4135-b902-573b5869c071","title":"Stony Brook University INTEL Science Talent Search National Finalists and Semifinalists","application_availability_date":1444892400000,"application_deadline":1452844800000,"scholarship_provider_id":"a52d0317-c02a-4ea9-80b8-95443be31f72","scholarship_provider_name":"Stony Brook University","isHostedByChegg":0}],"numFound":76};

	//$.ajax(settings).done(function (response) {
	  processData(response);
	//});
}

function processData(data) {
	console.log(data);
	var scholarships = data.results;
	for(var i = 0; i < scholarships.length; i++) {
		$('#scholarshipList').append("<li>" + scholarships[i].title + "</li>");
	}
}
