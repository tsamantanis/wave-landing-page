console.log("huu");
setTimeout(function() {
    let paths = [
        document.getElementById('ChooseWhatYouSeeIllustration_1'),
    ]
    paths.forEach((path) => {
        let pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength + ' ' + pathLength;
        path.style.strokeDashoffset = pathLength;
        path.getBoundingClientRect();
        window.addEventListener("scroll", function(e) {
            let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            if (scrollPercentage > 0.56) {
                let drawLength = pathLength * (0.56 - scrollPercentage) * 5;
                path.style.strokeDashoffset = pathLength - drawLength;
                if (scrollPercentage >= 0.72) {
                    path.style.strokeDasharray = "none";
                } else {
                    path.style.strokeDasharray = pathLength + ' ' + pathLength;
                }
            }
        });
    });
}, 1000);
