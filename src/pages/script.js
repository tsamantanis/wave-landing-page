console.log("huu");
setTimeout(function() {
    let paths = [
        document.getElementById('ChooseWhatYouSeeIllustration_1'),
        document.getElementById('ChooseWhatYouSeeIllustration_2'),
    ]

    window.addEventListener("scroll", function(e) {
        paths.forEach((path) => {
            let pathLength = path.getTotalLength();
            path.style.strokeDasharray = pathLength + ' ' + pathLength;
            path.style.strokeDashoffset = pathLength;
            path.getBoundingClientRect();
            let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            if (scrollPercentage > 0.55) {
                let drawLength = pathLength * (0.55 - scrollPercentage) * 5;
                path.style.strokeDashoffset = pathLength - drawLength;
                if (scrollPercentage >= 0.73) {
                    path.style.strokeDasharray = "none";
                } else {
                    path.style.strokeDasharray = pathLength + ' ' + pathLength;
                }
            }
        });
    });
}, 1000);
