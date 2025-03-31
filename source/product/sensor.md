# 传感器
## Active Camera
![Airy](../image/active_camera.PNG)

为应对机器人技术中环境感知和操作认知的难题，RoboSense 通过集成多传感器，创造性发明了传感器平台 Active Camera。

为大幅降低开发门槛，提高开发效率，使开发人员能够专注于高价值的任务和功能优化，Active Camera 配备了 AI-Ready 生态，提供了包括驱动程序、标定、数据融合、SLAM 和高阶多模态感知算法等基础工作和高级工具，协助开发者实现通用、高效和优雅的解决方案，打造行为更智能、功能更丰富的机器人。  

<a href="https://www.robosense.ai/rslidar/AC1" class="rounded-button" target="_blank">了解更多</a>

### 规格参数

<table class="docutils align-default" style="width: 100%; table-layout: fixed;">
    <colgroup>
        <col style="width: 20%;">
        <col style="width: 30%;">
        <col style="width: 20%;">
        <col style="width: 30%;">
    </colgroup>
    <thead>
        <tr class="row-odd centered-table-text">
            <th class="head" colspan=4>Active Camera 规格参数表</th>
        </tr>
        <tr class="row-odd centered-table-text">
            <th class="head" colspan=4>激光部分</th>
        </tr>
    </thead>
    <tbody>
        <tr class="row-even centered-table-text">
            <td>测距原理</td>
            <td>TOF法测距</td>
            <td>水平视场角</td>
            <td>120°</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>激光波长</td>
            <td>940nm</td>
            <td>垂直视场角</td>
            <td>60°</td>
        </tr>
        <tr class="row-even centered-table-text">
            <td>激光安全等级</td>
            <td>Class1人眼安全</td>
            <td>水平分辨率</td>
            <td rowspan=2>平均0.625°</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>测距能力</td>
            <td>20m@10%</td>
            <td>垂直分辨率</td>
        </tr>
        <tr class="row-even centered-table-text">
            <td>盲区</td>
            <td>0.1m@90%</td>
            <td>精度（典型值）</td>
            <td>±3cm@1σ（室内）<br>±5cm@1σ（室外）</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>出点数</td>
            <td>~173333点/秒</td>
            <td>帧率</td>
            <td>10Hz</td>
        </tr>
        <tr class="row-even">
            <th class="head" colspan=4>RGB 相机部分</th>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>快门类型</td>
            <td>卷帘快门</td>
            <td>水平视场角</td>
            <td>144°</td>
        </tr>
        <tr class="row-even centered-table-text">
            <td>CIS输出格式</td>
            <td>NV12, RGB24</td>
            <td>垂直视场角</td>
            <td>79°</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>帧率</td>
            <td>30Hz</td>
            <td>分辨率</td>
            <td>1920*1080</td>
        </tr>
        <tr class="row-even">
            <th class="head" colspan=4>IMU</th>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>自由度</td>
            <td>6轴数据输出</td>
            <td>陀螺仪</td>
            <td>±500dps</td>
        </tr>
        <tr class="row-even centered-table-text">
            <td>加速度计</td>
            <td>±4g</td>
            <td>数据频率</td>
            <td>500Hz（可调）</td>
        </tr>
        <tr class="row-odd">
            <th class="head" colspan=4>整机部分</th>
        </tr>
        <tr class="row-even centered-table-text">
            <td>形式</td>
            <td>标准探头模组</td>
            <td>功耗</td>
            <td>14W（典型值）</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>工作温度</td>
            <td>-20°C~ +60°C</td>
            <td>防护等级</td>
            <td>IP54</td>
        </tr>
        <tr class="row-even centered-table-text">
            <td>数据接口</td>
            <td>USB 3.2 Gen1</td>
            <td>电源接口</td>
            <td>dc</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>尺寸</td>
            <td>95mm*42.6mm*80mm</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table> 

### 坐标系

在实际应用中，需要用到 AC 中各个传感器的数据，这里将各个传感器的坐标系命名如下：

- 激光传感器的坐标系命名为 $O_L-X_LY_LZ_L$ ，
- 相机传感器的坐标系命名为 $O_c-X_CY_CZ_C$ ，
- IMU 传感器的坐标系命名为 $O_I-X_IY_IZ_I$ ，
- AC 的坐标系 $O-XYZ$ 定义为激光坐标系 $O_L-X_LY_LZ_L$ 。

各个坐标系具体关系如下图所示：
![图片alt](../image/coordinate_system.jpg)  

- 激光坐标系原点 $O_L$ 在 AC 坐标系 $O-XYZ$ 上的坐标为 $(0,0,0)$（单位：mm）。  
- 相机坐标系原点 $O_C$ 在 AC 坐标系 $O-XYZ$ 上的坐标为 $(4.3,0,-26.9)$（单位：mm）。  
- IMU 坐标系原点 $O_I$ 在 AC 坐标系 $O-XYZ$ 上的坐标为 $(-10.6,-9.9,15.5)$（单位：mm）。  
