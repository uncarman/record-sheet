<!DOCTYPE html>
<html>
<head>
    <meta charset=utf-8>
    <meta http-equiv=X-UA-Compatible content="IE=edge">
    <meta name=viewport content="width=device-width,initial-scale=1">
    <link rel=icon href=/icon.ico>
    <title>巡检系统</title>
    <style>html, body, #app {
            height: 100%;
            margin: 0px;
            padding: 0px;
        }

        .d2-home {
            background-color: #303133;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .d2-home__main {
            user-select: none;
            width: 100%;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .d2-home__footer {
            width: 100%;
            flex-grow: 0;
            text-align: center;
            padding: 1em 0;
        }

        .d2-home__footer > a {
            font-size: 12px;
            color: #ABABAB;
            text-decoration: none;
        }

        .d2-home__loading {
            height: 32px;
            width: 32px;
            margin-bottom: 20px;
        }

        .d2-home__title {
            color: #FFF;
            font-size: 14px;
            margin-bottom: 10px;
        }

        .d2-home__sub-title {
            color: #ABABAB;
            font-size: 12px;
        }</style>
    <script>var _hmt = _hmt || [];
        var hmid = "1dfa88d0c8571eef2d383070cb3e5ca1";
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?" + hmid;
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();</script>
    <link href=/css/chunk-vendors.faf58205.css rel=stylesheet>
    <link href=/css/app.f1bce0bf.css rel=stylesheet>
</head>
<body>
<noscript><strong>很抱歉，如果没有 JavaScript 支持，D2Admin 将不能正常工作。请启用浏览器的 JavaScript 然后继续。</strong></noscript>
<div id=app>
    <div class=d2-home>
        <div class=d2-home__main><img class=d2-home__loading src=./image/loading/loading-spin.svg alt=loading>
            <div class=d2-home__title>正在加载资源</div>
            <div class=d2-home__sub-title>初次加载资源可能需要较多时间 请耐心等待</div>
        </div>
    </div>
</div>
<script src=/js/chunk-vendors.0ec0aad1.js></script>
<script src=/js/app.0ed4221d.js></script>
</body>
</html>
