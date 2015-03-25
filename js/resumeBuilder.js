var bio = {
    "name": "Brent Andrew Dare",
    "role": "Web Developer",
    "contacts": {
        "mobile":"865-771-1378",
        "email":"brent.dare@gmail.com",
        "location":"Knoxville, TN",
        "github": "unhombremuyhonrado"
        
    },
    "welcomeMessage": "If it doesn't connect to the internet, then I probably shouldn't be touching it.",
    "skills": [
        "HTML","CSS", "JavaScript","Python"
    ],
    "bioPic":"images/me.jpg"
}


var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile=bio.contacts.mobile;
var formattedMobile=HTMLformattedMobile=HTMLmobile.replace("%data%",mobile);
$("#topContacts").append(formattedMobile);

var email=bio.contacts.email;
var formattedEmail=HTMLemail.replace("%data%",email);
$("#topContacts").append(formattedEmail);

var github=bio.contacts.github;
var formattedGit=HTMLgithub.replace("%data%",github);
$("#topContacts").append(formattedGit);

var bioPic = "images/me.jpg"
var formattedbioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedbioPic);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var welcomeMessage = bio.welcomeMessage;
var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%",welcomeMessage);
$("#header").append(formattedwelcomeMessage);


if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    
    var formattedSkill=HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    
    formattedSkill=HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    
    formattedSkill=HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    
    formattedSkill=HTMLskills.replace("%data%",bio.skills[3]);
    $("#skills").append(formattedSkill);
}





var education={
    "schools":[
    {
            "name":"University of Tennessee",
            "location":"Knoxville",
            "degree":"Bachelor of Arts",
            "major":"Spanish",
            "dates": "2000 - 2005",
            "url":"http://www.utk.edu"
    },
    {
            "name":"Universidad de Salamanca",
            "location":"Salamanca, Spain",
            "degree":"Study Abroad",
            "major":"Spanish & International Business",
            "dates": "2004",
            "url":"http://www.usal.es/webusal/en"

    }
    ],
    "onlineCourses":[
        {
            "title":"Build a Website from Scratch with HTML & CSS",
            "school":"Udemy",
            "dates":"2014",
            "courseUrl":"https://www.udemy.com/build-website-scratch/",
            "url":"https://www.udemy.com"
        },
        {
            "title":"Intro to HTML and CSS",
            "school":"Udacity",
            "dates":"2014",
            "courseUrl":"https://www.udacity.com/course/ud304",
            "url":"https://www.udacity.com"
        },
        {
            "title":"Front End Web Developer Nanodegree",
            "school":"Udacity",
            "dates":"2014",
            "courseUrl":"https://www.udacity.com/course/nd001",
            "url":"https://www.udacity.com"
        },
        {
            "title":"JavaScript Basics",
            "school":"Udacity",
            "dates":"2014",
            "courseUrl":"https://www.udacity.com/course/ud804",
            "url":"https://www.udacity.com"
        },
        {
            "title":"PSD to HTML5/CSS3: Hand Code a Beautiful Website in 4-hours!",
            "school":"Udemy",
            "dates":"2014",
            "courseUrl":"https://www.udemy.com/build-beautiful-html5-website/",
            "url":"https://www.udemy.com"
        },
        {
            "title":"Object-Oriented JavaScript",
            "school":"Udacity",
            "dates":"2014 - 2015",
            "courseUrl":"https://www.udacity.com/course/ud015",
            "url":"https://www.udacity.com"
        },
        {
           "title":"HTML5 Canvas",
           "school":"Udacity",
           "dates":"2015",
           "courseUrl":"https://www.udacity.com/course/ud292",
           "url":"https://www.udacity.com"
        }
    ]
}


education.display = function(){

    for (school in education.schools){
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedschoolMajor);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedschoolDegree);
      };

    for (course in education.onlineCourses) {
        $("#online").append(HTMLonlineStart);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title).replace("#", education.onlineCourses[course].courseUrl);
        $(".online-entry:last").append(formattedonlineTitle);

        var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school).replace("#", education.onlineCourses[course].url);
        $(".online-entry:last").append(formattedonlineSchool);

        var formattedonlineDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        $(".online-entry:last").append(formattedonlineDate);
      };
};



var work={
    "jobs":[
    {
    "employer":"Travelers Insurance Companies",
    "title":"Sales Agent",
    "location":"Knoxville, TN",
    "dates":"2008 - Present",
    "description":"I've written thousands of insurance policies into inception while maintaining above average Quality\
     Assurance and Issued Business scores. The company has trusted me to train sales counselors and\
     underwriters in state-supported systems. With these innumerous tasks I have also worked extensively\
     alongside Project Managers with researching and developing opportunities concerning our system's\
     functionality, as well as creating training manuals for instructing new hires.",
    "url":"https://www.travelers.com/"

    },{
    "employer":"The Silent Ballet",
    "title":"Staff Member",
    "location":"New York[Online]",
    "dates":"2010 - 2012",
    "description":"Interviewed artists and wrote music reviews for this independent e-zine.",
    "url":"http://www.thesilentballet.com/"
    },{
    "employer":"EdFinancial",
    "title":"Loan Consolidator",
    "location":"Knoxville, TN",
    "dates":"2007-2008",
    "description":"Consolidated hundreds of thousands of dollars in student loans for English and Spanish-speaking students.",
    "url":"https://www.edfinancial.com/home"
    },{
    "employer":"Nova Information Systems",
    "title":"Voice Authorization Operator",
    "location":"Knoxville, TN",
    "dates":"2005 - 2007",
    "description":"Assisted Spanish-speaking vendors with activating their end-of-day credit card batches.",
    "url":"http://www.elavon.com/"
    }
    ]
}


work.display = function(){
    for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
     $(".work-entry:last").append(formattedworkLocation);
     var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
     $(".work-entry:last").append(formattedDescription);

    
    };

};






var projects={
    "projects":[
    {
        "title":"Portfolio",
        "dates":"2014",
        "description":"Udacity Nanodegree Project 1 Portfolio",
        "images":["images/meagain.jpg"],
        "url":"http://unhombremuyhonrado.github.io/Udacity-P1/"
    },
    {
    	"title":"Resume",
    	"dates":"2014",
    	"description":"Udacity Nanodegree Project 2 Resume",
    	"images":["images/p2.jpg"],
    	"url":"http://unhombremuyhonrado.github.io/Udacity-P2/"
    },
    {
    	"title":"Frogger",
    	"dates":"2015",
    	"description":"Udacity Nanodegree Project 3 Frogger",
    	"images":["images/p3.jpg"],
    	"url":"http://unhombremuyhonrado.github.io/Udacity-P3/"
    },
    {
    	"title":"Website Optimization",
    	"dates":"2015",
    	"description":"Udacity Nanodegree Project 4 Website Optimization",
    	"images":["images/p4.jpg"],
    	"url":"http://unhombremuyhonrado.github.io/Udacity-P4/"
    }
    ]
}


projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title).replace("#", projects.projects[project].url);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0){
            for(image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }

        }

    }
}




$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});



$("#mapDiv").append(googleMap);

work.display();
projects.display();
education.display(); 



