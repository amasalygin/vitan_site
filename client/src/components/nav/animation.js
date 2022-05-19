/* eslint-disable */
import { gsap } from 'gsap';

var test = {
    bar () {
        console.clear();
        var log = console.log.bind(console);

        //
        // ANIMATIONS
        // ===========================================================================
        var inputs = document.querySelectorAll("input");
        var nodes  = document.querySelectorAll(".item");
        var total  = nodes.length;
        var dirty  = true;
        var time   = 0.9;
        var omega  = 12;
        var zeta   = 0.9;
        var boxes  = [];

        for (var i = 0; i < total; i++) {
            
        var node   = nodes[i];  
        var width  = node.offsetWidth;
        var height = node.offsetHeight;    
        var color  = "transparent";    
            
        // Need another element to animate width & height... use clone instead of editing HTML
        var content = node.cloneNode(true);
        content.classList.add("item-content");
        
        gsap.set(node, { x: "+=0" });
        gsap.set(content, { width, height });  
        gsap.set([node, node.children], { backgroundColor: color, color });
        
        node.appendChild(content);

        var x = node.offsetLeft;
        var y = node.offsetTop;
        
        boxes[i] = { content, height, node, width, x, y };
        } 

        for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", layout);
        }

        window.addEventListener("resize", () => { dirty = true; });


        gsap.ticker.add(() => dirty && layout());

        layout();

        function layout() {
        
        dirty = false;
        
        for (var i = 0; i < total; i++) {
            
            var box = boxes[i];
                
            var lastX = box.x;
            var lastY = box.y;   

            box.x = box.node.offsetLeft;
            box.y = box.node.offsetTop;      
                
            if (lastX !== box.x || lastY !== box.y) {
                var transX = gsap.getProperty(box.node, "x");
                var transY = gsap.getProperty(box.node, "y");

                var x = transX + lastX - box.x;
                var y = transY + lastY - box.y;  
                
                gsap.fromTo(box.node, {x: x, y: y}, {x: 0, y: 0, ease});
            }
        }  
        }

        function ease(progress) {
        var beta  = Math.sqrt(1.0 - zeta * zeta);
        progress = 1 - Math.cos(progress * Math.PI / 2);   
        progress = 1 / beta * 
            Math.exp(-zeta * omega * progress) * 
            Math.sin( beta * omega * progress + Math.atan(beta / zeta));

        return 1 - progress;
        }
    },
}

export default test



