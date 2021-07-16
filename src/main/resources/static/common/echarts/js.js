
$(function () {
    var json1;
    const url1 = "../../json/all_aver.json";/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    const request1 = new XMLHttpRequest();
    request1.open("get", url1);/*设置请求方法与路径*/
    request1.send(null);/*不发送数据到服务器*/
    request1.onload = function (){
        if(request1.status === 200){
            json1 = JSON.parse(request1.responseText);
            echarts_1();
            function echarts_1() {

                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('echart1'));

                option = {
                    //  backgroundColor: '#00265f',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        top:'10px',
                        right: '0%',
                        bottom: '4%',
                        containLabel: true
                    },

                    xAxis: [{
                        type: 'category',
                        data: [ json1.all_value[1].name, json1.all_value[2].name, json1.all_value[3].name, json1.all_value[4].name, json1.all_value[5].name, json1.all_value[6].name],
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid"
                            },
                        },

                        axisTick: {
                            show: false,
                        },
                        axisLabel:  {
                            interval: 0,
                            // rotate:50,
                            //rotate:-30,
                            show: true,
                            splitNumber: 15,
                            textStyle: {
                                // color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                            //formatter: '{value} %'
                            show:true,
                            textStyle: {
                                // color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                // color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                // color: "rgba(255,255,255,.1)",
                            }
                        }
                    }],
                    series: [
                        {
                            type: 'bar',
                            data: [ json1.all_value[1].value, json1.all_value[2].value, json1.all_value[3].value, json1.all_value[4].value, json1.all_value[5].value, json1.all_value[6].value],
                            barWidth:'35%', //柱子宽度
                            // barGap: 1, //柱子之间间距
                            itemStyle: {
                                normal: {
                                    color:'#2f89cf',
                                    opacity: 1,
                                    barBorderRadius: 5,
                                }
                            }
                        }

                    ]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
                window.addEventListener("resize",function(){
                    myChart.resize();
                });
            }
        }
    }

    echarts_2();
    function echarts_2() {
        let myChart = echarts.init(document.getElementById('echart2'));
        let url = "../../json/up_view.json";
        let request = new XMLHttpRequest();
        request.open("get", url);
        request.send(null);
        request.onload = function () {
            if (request.status === 200) {
                let json = JSON.parse(request.responseText);
                let list = json.up_view;
                option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {type: 'shadow'}
                    },
                    grid: {
                        left: '0%',
                        top: '10px',
                        right: '0%',
                        bottom: '4%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        data: [list[0].up_name, list[1].up_name, list[2].up_name, list[3].up_name, list[4].up_name, list[5].up_name],
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid"
                            },
                        },

                        axisTick: {
                            show: false,
                        },
                        axisLabel: {
                            interval: 0,
                            rotate:20,
                            show: true,
                            splitNumber: 15,
                            textStyle: {
                                //color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        axisLabel: {
                            //formatter: '{value} %'
                            show: true,
                            textStyle: {
                                //color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                        axisTick: {
                            show: false,
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                //color: "rgba(255,255,255,.1)",
                            }
                        }
                    }],
                    series: [
                        {

                            type: 'bar',
                            data: [list[0].view, list[1].view, list[2].view, list[3].view, list[4].view, list[5].view],
                            barWidth: '35%', //柱子宽度
                            // barGap: 1, //柱子之间间距
                            itemStyle: {
                                normal: {
                                    color: '#27d08a',
                                    opacity: 1,
                                    barBorderRadius: 5,
                                }
                            }
                        }

                    ]
                };
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
        }
    }

    echarts_5()
    function echarts_5() {
        let myChart = echarts.init(document.getElementById('echart5'))
        let url = "../../json/video_view.json";
        let request = new XMLHttpRequest();
        request.open("get", url);
        request.send(null);
        request.onload = function () {
            if (request.status === 200) {
                let json = JSON.parse(request.responseText).video_view;
                option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        top:'10px',
                        right: '0%',
                        bottom: '4%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: [json[0].video_name,
                            json[1].video_name,
                            json[2].video_name,
                            json[3].video_name,
                            json[4].video_name,
                            json[5].video_name,
                            json[6].video_name,
                            json[7].video_name,
                            json[8].video_name,
                            json[9].video_name],
                        axisLabel: {
                            //formatter: '{value} %'
                            show: false,
                            textStyle: {
                                //color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                    },
                    yAxis: {
                        splitLine: {
                            lineStyle: {
                                //color: "rgba(255,255,255,.1)",
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                //color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        type: 'value',
                        ///boundaryGap: [0, 0.01],
                        axisLabel: {
                            interval: 0,
                            // rotate:50,
                            show: true,
                            splitNumber: 15,
                            textStyle: {
                                //color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                    },
                    series: [
                        {
                            //color:"red",
                            type: 'bar',
                            data: [json[0].view,
                                json[1].view,
                                json[2].view,
                                json[3].view,
                                json[4].view,
                                json[5].view,
                                json[6].view,
                                json[7].view,
                                json[8].view,
                                json[9].view],
                            itemStyle: {
                                normal: {
                                    color: 'red',
                                    opacity: 1,
                                    barBorderRadius: 5,
                                }
                            },
                        }
                    ]
                }
                myChart.setOption(option);
                window.addEventListener("resize", function () {
                    myChart.resize();
                });
            }
        }
    }


    //json2 = JSON.parse(request2.responseText);



    var json3;
    const url3 = "../../json/type_num.json";/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    const request3 = new XMLHttpRequest();
    request3.open("get", url3);/*设置请求方法与路径*/
    request3.send(null);/*不发送数据到服务器*/
    request3.onload = function (){
        json3 = JSON.parse(request3.responseText);
        echarts_3();
        function echarts_3() {

            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart3'));

            option = {
                darkMode:true,
                title: {
                    //text: '各分类视频数',
                    subtext: '分布',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            {value: json3.type_num[0].value, name: json3.type_num[0].name},
                            {value: json3.type_num[1].value, name: json3.type_num[1].name},
                            {value: json3.type_num[2].value, name: json3.type_num[2].name},
                            {value: json3.type_num[3].value, name: json3.type_num[3].name},
                            {value: json3.type_num[4].value, name: json3.type_num[4].name}
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                //shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]

            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        }
    }


    const url4 = "../../json/test.json";/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    const request4 = new XMLHttpRequest();
    request4.open("get", url4);/*设置请求方法与路径*/
    request4.send(null);/*不发送数据到服务器*/
    request4.onload = function () {/*XHR对象获取到返回信息后执行*/
        if (request4.status === 200) {/*返回状态为200，即为数据获取成功*/
            var json = JSON.parse(request4.responseText);
            console.log(json.top);
            var date=json.top
            var myChart = echarts.init(document.getElementById('echart4'));
            var option ={
                tooltip: {
                    trigger: 'axis',
                    formatter: function (datas) {
                        var res = datas[0].name +'第一: '+datas[0].data.text.substr(3)+ '<br/>'
                        // for (var i = 0, length = datas.length; i < length; i++) {
                        //     res += datas[i].showText + '：'
                        //         + datas[i].text + '<br/>'
                        // }
                        res=res+datas[0].name+'数量：'+datas[0].value+'<br/>'
                        return res
                    },

                },
                legend: {
                    data: ['种类']
                },
                yAxis: {
                    show: true,
                    lineStyle: {
                        //color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                    splitLine: {
                        lineStyle: {
                            //  color: "rgba(255,255,255,.1)",
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            // color:"rgba(255,255,255,.1	)"
                        }
                    },
                    axisLabel: {
                        //formatter: '{value} %'
                        show: true,
                        textStyle: {
                            //  color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                    },
                },
                grid: {
                    left: '0%',
                    top:'10px',
                    right: '0%',
                    bottom: '4%',
                    containLabel: true
                },
                xAxis: {
                    show:true,
                    type: 'category',
                    data: [ "弹幕", "评论", "喜好", "投币", "分享", "点赞"],
                    axisLine:{
                        lineStyle:{
                            //color:"#666"
                            // color: "rgba(255,255,255,.1)",
                            width: 1,
                            type: "solid"
                        }
                    },

                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        interval: 0,
                        //rotate:20,
                        show: true,
                        splitNumber: 15,
                        textStyle: {
                            // color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                    },


                },
                series: [{
                    rotate: 20,
                    color:"yellow",
                    textStyle:{
                        color:'white'
                    },
                    name: '数量',
                    type: 'bar',
                    data: [
                        { value: date[1].value, text: date[1].name.split(',')[1], showText: '100' },
                        { value: date[2].value, text: date[2].name.split(',')[1], showText: '100' },
                        { value: date[3].value, text: date[3].name.split(',')[1], showText: '100' },
                        { value: date[4].value, text: date[4].name.split(',')[1], showText: '100' },
                        { value: date[5].value, text: date[5].name.split(',')[1], showText: '100' },
                        { value: date[6].value, text: date[6].name.split(',')[1], showText: '100' }],
                    itemStyle:{
                        normal:{
                            opacity:1,
                            barBorderRadius:5
                        }
                    }
                }]
            };
            myChart.setOption(option)
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        }
    }




    var json6;
    const url6 = "../../json/type_num.json";/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    const request6 = new XMLHttpRequest();
    request6.open("get", url6);/*设置请求方法与路径*/
    request6.send(null);/*不发送数据到服务器*/
    request6.onload = function (){
        json6 = JSON.parse(request6.responseText);
        echarts_6();
        function echarts_6() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart6'));

            option = {
                color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
                tooltip: {
                    show: true,
                    formatter: "{a} : {c} "
                },
                legend: {
                    itemWidth: 10,
                    itemHeight: 10,
                    itemGap: 12,
                    bottom: '3%',

                    data: ['浙江', '上海', '广东', '北京', '深圳'],
                    textStyle: {
                        // color: 'rgba(255,255,255,.6)',
                    }
                },
                series: [
                    {
                        //name: '分类',
                        type: 'pie',
                        radius: '55%',
                        data: [{"name":"游戏","value":1546},{"name":"吃","value":1438},{"name":"解说","value":1172},{"name":"科技","value":996},{"name":"片片","value":899},{"name":"木鱼","value":885},{"name":"美学","value":845},{"name":"电影","value":829},{"name":"体验","value":783},{"name":"直播","value":649},{"name":"中国","value":615},{"name":"老师","value":604}],
                        roseType: 'angle',
                        itemStyle: {
                            normal: {
                                shadowBlur: 200,
                                // shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        }
    }




    const url = "../../json/title.json";/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    const request = new XMLHttpRequest();
    request.open("get", url);/*设置请求方法与路径*/
    request.send(null);/*不发送数据到服务器*/
    request.onload = function () {/*XHR对象获取到返回信息后执行*/
        if (request.status === 200) {
            var json = JSON.parse(request.responseText);
            //console.log(json.words);
            var data = {
                value: json.words,
                //小鸟图片
                //image: "../images/bilibili2.jpg"
            }

            map();

            function map() {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('map1'));
                //var maskImage = new Image();
                //maskImage.src = data.image
                    option = {
                        //drawOutOfBound:true,
                        tooltip: {
                            show: true
                        },
                        series: [{
                            type: 'wordCloud',
                            gridSize: 1,
                            roam: false,
                            shape:'pentagon',
                            sizeRange: [12, 55],
                            rotationRange: [-45, 0, 45, 90],
                            //maskImage: maskImage,
                            textStyle: {
                                normal: {
                                    color: function () {
                                        return 'rgb(' + Math.round(Math.random() * 255) +
                                            ', ' + Math.round(Math.random() * 255) +
                                            ', ' + Math.round(Math.random() * 255) + ')'
                                    }
                                }
                            },
                            left: 'center',
                            top: 'center',
                            right: null,
                            bottom: null,
                            data: data.value
                        }]
                    };

                    myChart.setOption(option);



                window.addEventListener("resize", function () {
                    myChart.resize();
                });
                myChart.resize();
            }
        }
    }
})



		
		
		


		









