(function () {
    'use strict';
    angular
        .module('CVCreater', ['ngMaterial'])
        .controller('CVController', CVController);

    function CVController($timeout, $q, $log, $scope) {
        $scope.user_profile = user_profile;
        $scope.user_works = user_works;
        $scope.user_educations = user_educations;
        $scope.recomment_selections = [
            { id: "1", title: "Summary", value: "1", img: "a.png" },
            { id: "2", title: "Skills", value: "2", img: "a.png" },
            { id: "3", title: "Languages", value: "3", img: "a.png" },
            { id: "4", title: "Volunteering Experience", value: "4", img: "a.png" },
            { id: "5", title: "Volunteering Opportunities", value: "5", img: "a.png" },
            { id: "6", title: "Organizations", value: "6", img: "a.png" },
            { id: "7", title: "Honors & Awards", value: "7", img: "a.png" },
            { id: "8", title: "Test Scores", value: "8", img: "a.png" },
            { id: "9", title: "Courses", value: "9", img: "a.png" },
            { id: "10", title: "Patents", value: "10", img: "a.png" },
            { id: "11", title: "Causes you care about", value: "11", img: "a.png" },
            { id: "12", title: "Causes you care about", value: "12", img: "a.png" },
            { id: "13", title: "Supported Organizations", value: "13", img: "a.png" },
            { id: "14", title: "Projects", value: "14", img: "a.png" },
            { id: "15", title: "Publications", value: "15", img: "a.png" },
            { id: "16", title: "Certifications", value: "16", img: "a.png" },
            { id: "17", title: "Interests", value: "17", img: "a.png" },
            { id: "18", title: "Personal Details", value: "18", img: "a.png" },
            { id: "19", title: "Advice for Contacting", value: "19", img: "a.png" },
            { id: "20", title: "Education", value: "20", img: "a.png" },
            { id: "21", title: "Experience", value: "21", img: "a.png" }
        ];
        $scope.onClickSelection = function () {
            let element = document.getElementById(this.selection.id);
            if (element) {
                element.style.display = "block";
                element.scrollIntoView();
            }
        }
    }
    var data = {
        "id": "1274230165962032",
        "name": "Bùi Việt Đức",
        "picture": {
            "data": {
                "is_silhouette": false,
                "url": "https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12295398_996619057056479_4809850000840301477_n.jpg?oh=146d6cddffb7c545aca56f701226e626&oe=58F5826F"
            }
        },
        "email": "vietduc1441@gmail.com",
        "work": [
            {
                "description": "develop cool stuffs",
                "employer": {
                    "id": "237470840020377",
                    "name": "SCH Hanoi"
                },
                "position": {
                    "id": "1553651868242616",
                    "name": "Developer"
                },
                "projects": [
                    {
                        "id": "1637539536550809",
                        "description": "photoshopit",
                        "name": "Change the Moon",
                        "with": [
                            {
                                "name": "Nguyễn Tấn Thái",
                                "id": "1358909707487851"
                            }]
                    }],
                "start_date": "2010-03-18",
                "id": "1271349246250124"
            },
            {
                "description": "Develop useful stuffs",
                "end_date": "2014-12-31",
                "employer": {
                    "id": "281246808612055",
                    "name": "Microsoft"
                },
                "position": {
                    "id": "109542932398298",
                    "name": "Software Engineer"
                },
                "start_date": "2006-12-31",
                "id": "1273309739387408"
            }, {
                "description": "not really work",
                "end_date": "2014-12-31",
                "employer": {
                    "id": "174521372752863",
                    "name": "FPT Information System - Services [FIS-SRV]"
                },
                "location": {
                    "id": "106388046062960",
                    "name": "Hanoi, Vietnam"
                },
                "position": {
                    "id": "603284713142164",
                    "name": "Senior Project Manager"
                },
                "start_date": "2006-12-31",
                "id": "1273303859387996"
            }],
        "education": [
            {
                "school": {
                    "id": "119033104785186",
                    "name": "THPT Chuyên Nguyễn Tất Thành - Yên Bái"
                },
                "type": "High School",
                "year": {
                    "id": "141778012509913",
                    "name": "2008"
                }, "id": "1273304249387957"
            }, {
                "school": {
                    "id": "111936798819016",
                    "name": "Foreign Trade University"
                },
                "type": "College",
                "id": "1273308386054210"
            }, {
                "school": {
                    "id": "264986823512471",
                    "name": "ĐẠI HỌC BÁCH KHOA HÀ NỘI - HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY"
                },
                "type": "College",
                "id": "1271349489583433"
            }]
    }

    function mappingUserProfile(userData) {
        return {
            id: userData.id,
            name: userData.name,
            picture: userData.picture.data.url,
            email: userData.email,
            country: "VN",
            DOB: "",
            work: getUserWorks(userData.work),
            education: getUserEducation(userData.education)
        }
    }
    function getUserWorks(works) {
        var userWorks = "";
        for (var i = 0; i < works.length; i++) {
            userWorks += works[i].employer.name;
            if (i < works.length - 1) {
                userWorks += ", "
            }
        }
        return userWorks;
    }
    function getUserEducation(educations) {
        var userEducations = "";
        for (var i = 0; i < educations.length; i++) {
            userEducations += educations[i].school.name;
            if (i < educations.length - 1) {
                userEducations += ", "
            }
        }
        return userEducations;
    }

    var user_profile = mappingUserProfile(data);
    var user_educations = data.education;
    var user_works = data.work;
})();

