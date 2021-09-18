$(document).ready(() => {
    $('#profile__Ripples').ripples({
        resolution: 512,
        dropRadius:10
    });

    let bars = document.querySelectorAll('.progress__bar')
    
    bars.forEach((bar) => {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + "%";
        bar.style.width = percentage + "%";
        // console.log(percentage);
    });

    // Counts
    let counters = document.querySelectorAll('.counter');
    console.log(counters);

    function runCounter(){
        counters.forEach((counter) => {
            counter.innerText = 0;
            let target = +counter.dataset.count;
            let stop = target / 100;

            let countIt = function() {
                let displayCount = +counter.innerText;
                if(displayCount < target){
                    counter.innerText = Math.ceil(displayCount + stop);
                    setTimeout(countIt, 1);
                }
                else{
                    counter.innerText = target;
                }
            }
            countIt();
        });
        
    }
    runCounter();

    let sectionObserve = document.querySelector('.counter__wrapper');

    let options = {
        rootMargin: '0px 0px -200px 0px'
    }
    
    let done = 0;
    const sectionObservedObject = new IntersectionObserver(function(enteries){
        if(enteries[0].isIntersecting && done !== 1){
            done = 1;
            runCounter();
        }
    }, options)

    sectionObservedObject.observe(sectionObserve)

    // gallery filter
    var $wrapper = $('.portfolio__wrapper');

    // initialize isotop
    $wrapper.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animationOptions : {
            durattion : 750,
            easing : 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');
    
    links.forEach(link => {

        let selector = link.dataset.filter;

        link.addEventListener('click', function(e) {
            e.preventDefault();

            $wrapper.isotope({
                filter : selector,
                layoutMode : 'masonry',
                animationOptions : {
                    durattion : 750,
                    easing : 'linear'
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
            })

            e.target.classList.add('active');
        })
    })

    // initilize magnific

    $('.magnify').magnificPopup({
        type : "image",
        gallery : {
            enabled : true
        },
        zoom : {
            enable : true
        }
    });

    // slider
    $(".slider").slick({
        arrows : false,
        autoplay : true
    })


});