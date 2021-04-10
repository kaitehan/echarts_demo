//柱状图-就业行业模块
(function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    //2.指定配置项和数据
    var option = {
        //项目颜色
        color: ["#3398DB"],
        // 提示框模块
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 表格大小
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
            // axisTick: {
            //     alignWithLabel: true
            // },
            // 设置x轴标签文字样式
            // x轴的文字颜色和大小即刻度标签的样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "10"
            },
            // x轴样式不显示
            axisLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            // 设置x轴标签文字样式
            // y轴的文字颜色和大小即刻度标签的样式
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "12"
            },
            // y轴样式不显示
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                }
            },
            // y 轴分隔线样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            // 修改柱子宽度
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                //修改柱子圆角
                barBorderRadius: 5
            }
        }]
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);
    // 4.让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });

})();
//柱状图2
(function () {
    var myChart = echarts.init(document.querySelector('.bar2 .chart'));
    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var option = {
        grid: {
            top: '10%',
            left: '22%',
            bottom: '10%',
        },
        xAxis: {
            //不显示X轴的相关信息
            show: false
        },
        yAxis: [{
                type: 'category',
                data: ['印尼', '美国', '印度', '中国', '世界人口(万)'],
                //不显示y轴线条
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 把刻度标签的文字设置为白色
                axisLabel: {
                    color: "#fff"
                }
            },
            {
                show: true,
                data: [702, 350, 610, 793, 664],
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [{
            name: '条',
            type: 'bar',
            data: [70, 34, 60, 78, 69],
            // 给series  第一个对象里面的 添加 
            yAxisIndex: 0,
            // 柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 10,
            // 柱子设为圆角
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    // params传进来的是柱子对象
                    // dataIndex是当前柱子的索引号
                    color: function (params) {
                        console.log(params);
                        return myColor[params.dataIndex];
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    // 图形内显示
                    position: 'inside',
                    // 文字显示格式
                    formatter: '{c}%'
                }
            }
        }, {
            name: '框',
            type: 'bar',
            // 给series  第二个对象里面的 添加 
            yAxisIndex: 1,
            barCategoryGap: 50,
            barWidth: 15,
            itemStyle: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15
            },
            data: [100, 100, 100, 100, 100],
        }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', () => {
        myChart.resize();
    })
})()