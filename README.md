staticmicrobuild
================

staticmicrobuild 是一个基于node和ajaxmin的window批处理工具，用于合并压缩js和css

### 安装node ###
   从http://nodejs.org/下载安装即可
   
### 安装ajaxmin ###
   1. 从http://ajaxmin.codeplex.com/下载安装
   2. 配置ajaxmin环境变量 C:\Program Files (x86)\Microsoft\Microsoft Ajax Minifier\AjaxMin.exe
    
### 编写批处理脚本 ###
   1. 新建txt重命名为cmd
   2. js build 
       node buildcmd.js config.json js
       call staticbuild.cmd
       del staticbuild.cmd
   3. css build
       node buildcmd.js config.json css
       call staticbuild.cmd
       del staticbuild.cmd
   4. 新建txt重命名为config.json
      {"jsinputlist" : 
        [
            "D:/wamp/www/static/release/common/js/base.js",
            "D:/wamp/www/static/release/common/jquery.js"
        ], 
       "cssinputlist":
        [
            "D:/wamp/www/static/release/common/css/base.css" 
        ]
       }
       建议用物理盘路径

### 生成后的目录为cmd文件的当前目录，包含在static/js及static/css ###
