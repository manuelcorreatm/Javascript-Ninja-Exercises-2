// see:
// http://ejohn.org/blog/javascript-micro-templating/

// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function () {
    var cache = {};

    this.tmpl = function tmpl(str, data) {
        // Figure out if we're getting a template, or if we need to
        // load the template - and be sure to cache the result.
        var fn = !/\W/.test(str) ?
          cache[str] = cache[str] ||
            tmpl(document.getElementById(str).innerHTML) :

          // Generate a reusable function that will serve as a template
          // generator (and which will be cached).
          new Function("obj",
            "var p=[],print=function(){p.push.apply(p,arguments);};" +

            // Introduce the data as local variables using with(){}
            "with(obj){p.push('" +

            // Convert the template into pure JavaScript
            str
              .replace(/[\r\t\n]/g, " ")
              .split("<%").join("\t")
              .replace(/((^|%>)[^\t]*)'/g, "$1\r")
              .replace(/\t=(.*?)%>/g, "',$1,'")
              .split("\t").join("');")
              .split("%>").join("p.push('")
              .split("\r").join("\\'")
          + "');}return p.join('');");

        // Provide some basic currying to the user
        return data ? fn(data) : fn;
    };
})();


// Demo data.
(function () {

    var dataObject = {
        members: [
            {
                id: 1,
                title: "Loompa",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1Maecenas ac nulla vestibulum, accumsan massa ac, euismod tortor. Nunc a dignissim dui, sed feugiat lectus. Ut sit amet pretium mi. Pellentesque orci massa, dignissim molestie vehicula in, pellentesque eget turpis. Pellentesque vitae rutrum ex, vel sollicitudin purus. Praesent nisl nisi, scelerisque pretium tincidunt sit amet, mattis non dolor. Aliquam venenatis ipsum rhoncus urna tincidunt ornare. Sed sit amet quam et sem hendrerit tincidunt quis a turpis. Donec sagittis egestas diam, ac dapibus diam scelerisque at. Proin rutrum euismod ex ac placerat. Sed efficitur interdum velit, et fermentum ex suscipit ut. Integer eu blandit ligula, a dictum nisl. Fusce et ultricies lacus. Curabitur ultrices bibendum augue ut mattis. Nunc in dignissim nibh.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1Integer viverra dictum erat, ac consequat felis accumsan in. Nunc id erat aliquam, finibus felis eu, malesuada turpis. Aenean mattis enim vitae nibh bibendum, at fermentum nisi posuere. Duis vel massa ultricies, pulvinar felis vitae, egestas lorem. Praesent ex arcu, rhoncus at porta nec, scelerisque et libero. Sed tincidunt felis placerat, cursus magna convallis, scelerisque mauris. Donec congue mi aliquam interdum rhoncus. Phasellus cursus nibh felis, in lobortis nibh rhoncus ut. Morbi tempus tempor odio, quis molestie nisi molestie eu. Etiam fringilla sagittis enim, eu vestibulum ante aliquam ac. Aenean molestie enim ut pharetra consequat. Nullam faucibus augue mi, eu volutpat nisi porttitor non. Sed eget rutrum lectus. Nulla facilisi. Curabitur vulputate hendrerit dui id volutpat. Proin nec mauris ac nisi consectetur feugiat nec eget quam. Vivamus lobortis lobortis porta." + 
                        "Fusce lacus sapien, auctor ac sagittis a, vulputate in diam. Phasellus eros lorem, venenatis non arcu vel, dictum placerat lorem. Pellentesque sit amet mi tellus. Vivamus hendrerit urna ac interdum maximus. Duis pharetra facilisis tristique. Morbi eget dapibus libero, eget bibendum nunc. Phasellus sed ex vitae nulla volutpat finibus. Aliquam laoreet libero sit amet scelerisque dapibus." +
                        "Maecenas cursus, libero ut convallis egestas, odio ligula iaculis dolor, at ornare justo lacus nec sem. Nam euismod egestas nibh quis luctus. Suspendisse potenti. Donec mollis dictum justo a vestibulum. Nunc lobortis malesuada lectus id congue. Aenean venenatis faucibus mauris non laoreet. Vestibulum sit amet mollis ex, non molestie ligula. Curabitur pulvinar aliquet orci ut pellentesque. Sed ut sem id odio bibendum iaculis. Donec rutrum, nunc non aliquam vulputate, leo massa dictum mauris, in malesuada arcu dui eu mi. Integer eget mi semper, scelerisque diam vitae, porttitor massa. Maecenas congue sapien vel ornare interdum. Aliquam vel rhoncus lorem. Praesent dictum mattis mauris suscipit aliquam. Praesent at volutpat justo, id accumsan leo. Praesent nunc erat, volutpat sed mi eu, rutrum semper neque." +
                        "Morbi erat magna, eleifend a purus congue, tempus gravida elit. Cras malesuada vel nulla eget rutrum. Maecenas vehicula, ligula ac iaculis fermentum, purus nunc vestibulum lorem, posuere mollis purus odio at eros. Sed at egestas ex. In malesuada orci sed convallis fringilla. Integer rhoncus sem ligula, a venenatis neque feugiat ut. Vestibulum erat sem, malesuada non fermentum mattis, rutrum non lacus. Nunc est lacus, ultrices id pellentesque et, imperdiet ut lacus. Suspendisse potenti. Duis eget nibh sit amet lectus iaculis placerat. Pellentesque vel libero ac nisl convallis consectetur. Mauris dignissim ex sit amet metus vulputate, sed pulvinar sem dignissim. Suspendisse efficitur, lorem sit amet convallis rhoncus, dolor mi pellentesque sem, commodo rutrum augue eros ut ante.",
                img: "img/image1.jpg"
            },
            {
                id: 2,
                title: "Oompa",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2Maecenas ac nulla vestibulum, accumsan massa ac, euismod tortor. Nunc a dignissim dui, sed feugiat lectus. Ut sit amet pretium mi. Pellentesque orci massa, dignissim molestie vehicula in, pellentesque eget turpis. Pellentesque vitae rutrum ex, vel sollicitudin purus. Praesent nisl nisi, scelerisque pretium tincidunt sit amet, mattis non dolor. Aliquam venenatis ipsum rhoncus urna tincidunt ornare. Sed sit amet quam et sem hendrerit tincidunt quis a turpis. Donec sagittis egestas diam, ac dapibus diam scelerisque at. Proin rutrum euismod ex ac placerat. Sed efficitur interdum velit, et fermentum ex suscipit ut. Integer eu blandit ligula, a dictum nisl. Fusce et ultricies lacus. Curabitur ultrices bibendum augue ut mattis. Nunc in dignissim nibh.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2Integer viverra dictum erat, ac consequat felis accumsan in. Nunc id erat aliquam, finibus felis eu, malesuada turpis. Aenean mattis enim vitae nibh bibendum, at fermentum nisi posuere. Duis vel massa ultricies, pulvinar felis vitae, egestas lorem. Praesent ex arcu, rhoncus at porta nec, scelerisque et libero. Sed tincidunt felis placerat, cursus magna convallis, scelerisque mauris. Donec congue mi aliquam interdum rhoncus. Phasellus cursus nibh felis, in lobortis nibh rhoncus ut. Morbi tempus tempor odio, quis molestie nisi molestie eu. Etiam fringilla sagittis enim, eu vestibulum ante aliquam ac. Aenean molestie enim ut pharetra consequat. Nullam faucibus augue mi, eu volutpat nisi porttitor non. Sed eget rutrum lectus. Nulla facilisi. Curabitur vulputate hendrerit dui id volutpat. Proin nec mauris ac nisi consectetur feugiat nec eget quam. Vivamus lobortis lobortis porta." +
                        "Fusce lacus sapien, auctor ac sagittis a, vulputate in diam. Phasellus eros lorem, venenatis non arcu vel, dictum placerat lorem. Pellentesque sit amet mi tellus. Vivamus hendrerit urna ac interdum maximus. Duis pharetra facilisis tristique. Morbi eget dapibus libero, eget bibendum nunc. Phasellus sed ex vitae nulla volutpat finibus. Aliquam laoreet libero sit amet scelerisque dapibus." +
                        "Maecenas cursus, libero ut convallis egestas, odio ligula iaculis dolor, at ornare justo lacus nec sem. Nam euismod egestas nibh quis luctus. Suspendisse potenti. Donec mollis dictum justo a vestibulum. Nunc lobortis malesuada lectus id congue. Aenean venenatis faucibus mauris non laoreet. Vestibulum sit amet mollis ex, non molestie ligula. Curabitur pulvinar aliquet orci ut pellentesque. Sed ut sem id odio bibendum iaculis. Donec rutrum, nunc non aliquam vulputate, leo massa dictum mauris, in malesuada arcu dui eu mi. Integer eget mi semper, scelerisque diam vitae, porttitor massa. Maecenas congue sapien vel ornare interdum. Aliquam vel rhoncus lorem. Praesent dictum mattis mauris suscipit aliquam. Praesent at volutpat justo, id accumsan leo. Praesent nunc erat, volutpat sed mi eu, rutrum semper neque." +
                        "Morbi erat magna, eleifend a purus congue, tempus gravida elit. Cras malesuada vel nulla eget rutrum. Maecenas vehicula, ligula ac iaculis fermentum, purus nunc vestibulum lorem, posuere mollis purus odio at eros. Sed at egestas ex. In malesuada orci sed convallis fringilla. Integer rhoncus sem ligula, a venenatis neque feugiat ut. Vestibulum erat sem, malesuada non fermentum mattis, rutrum non lacus. Nunc est lacus, ultrices id pellentesque et, imperdiet ut lacus. Suspendisse potenti. Duis eget nibh sit amet lectus iaculis placerat. Pellentesque vel libero ac nisl convallis consectetur. Mauris dignissim ex sit amet metus vulputate, sed pulvinar sem dignissim. Suspendisse efficitur, lorem sit amet convallis rhoncus, dolor mi pellentesque sem, commodo rutrum augue eros ut ante.",
                img: "img/image2.jpg"
            }
        ]
    }; // -> End of dataObject


    function fn1() {
        if (event.target.tagName == "P") {
            this.innerHTML = tmpl("template2", dataObject.members[event.target.parentNode.id - 1]);
            this.removeEventListener("click", fn1, false);
            this.addEventListener("click", fn2, false);
        } else if (event.target.tagName == "IMG") {
            this.innerHTML = tmpl("template2", dataObject.members[event.target.parentNode.id - 1]);
            this.removeEventListener("click", fn1, false);
            this.addEventListener("click", fn2, false);
        }
    }

    function fn2() {
        if (event.target.tagName == "P") {
            this.innerHTML = tmpl("template1", dataObject);
            this.removeEventListener("click", fn2, false);
            this.addEventListener("click", fn1, false);
        } else if (event.target.tagName == "IMG") {
            this.innerHTML = tmpl("template1", dataObject);
            this.removeEventListener("click", fn2, false);
            this.addEventListener("click", fn1, false);
        }
    }

    var container = document.getElementById("container");
    container.innerHTML = tmpl("template1", dataObject);
    container.addEventListener("click", fn1, false);

})();