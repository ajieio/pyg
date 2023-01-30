window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var arr_l = document.querySelector('.arr-l');
    var arr_r = document.querySelector('.arr-r');
    focus.addEventListener('mouseenter', function() {
        arr_l.style.display = 'block';
        arr_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function() {
        arr_l.style.display = 'none';
        arr_r.style.display = 'none';
        timer = setInterval(function() {
            arr_r.click();
        }, 2000);
    });
    var ul = focus.querySelector('ul');
    var ol = document.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            };
            this.className = 'current';
            var index = this.getAttribute('index');
            // console.log(index);

            num = index;
            circle = index;

            animate(ul, -index * focus.offsetWidth);
        });
    };
    ol.children[0].className = 'current';

    var first = ul.children[0].cloneNode(true);
    // console.log(first);

    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    arr_r.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            };
            num++;
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });

            circle++;
            // console.log(circle);

            if (circle == ol.children.length) {
                circle = 0;
            };
            circleChange();
        }
    });

    arr_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focus.offsetWidth + 'px';
            };
            num--;
            animate(ul, -num * focus.offsetWidth, function() {
                flag = true;
            });

            circle--;
            // console.log(circle);

            if (circle < 0) {
                circle = ol.children.length - 1;
            };
            circleChange();
        }
    });

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    };

    var timer = setInterval(function() {
        arr_r.click();
    }, 2000)

})