(() => {
    let style = document.createElement("style");
    style.innerHTML = `
    body{
        background-color: red;
        animation: gt_color_c infinite 25s;
    }


    #gt_root{
        display: block;
        color: black;
        transform: rotate(45deg);
        text-align: center;
        font-size: calc((100vw/4) / 1.5);
        background-color: white;
        width: calc(100vw/4);
        height: calc(100vw/4);
        border-radius: 50%;
        z-index: -2;
        position: fixed;
        top: calc(50vh - (100vw/4)/2);
        left:calc(50vw - (100vw/4)/2);
        animation: gt_action_r infinite 25s;
        
    }


    @media screen and (min-width:100vh) {
        #gt_root{
            font-size: calc((100vw/4) / 1.5);
            width: calc(100vw/4);
            height: calc(100vw/4);
            position: fixed;
            top: calc(50vh - (100vw/4)/2);
            left:calc(50vw - (100vw/4)/2);
        }
    }


    @media screen and (max-width:100vh) {
        #gt_root{
            font-size: calc((100vh/4) / 1.5);
            width: calc(100vh/4);
            height: calc(100vh/4);
            position: fixed;
            top: calc(50vh - (100vh/4)/2);
            left:calc(50vw - (100vh/4)/2);
        }
    }


    @keyframes gt_action_r {
        0%{
            transform: rotate(45deg);
        }


        100%{
            transform: rotate(-405deg);
        }
    }



    @keyframes gt_color_c {
        0%{
            background-color: coral;
        }


        25%{
            background-color: brown;
        }


        50%{
            background-color: red;
        }


        75%{
            background-color: brown;
        }


        100%{
            background-color: coral;
        }
    }
    `;
    document.getElementsByTagName("head")[0].appendChild(style);

    let div = document.createElement("div");
    div.innerHTML = "卐";
    div.id = "gt_root"

    document.getElementsByTagName("body")[0].appendChild(div);
})()