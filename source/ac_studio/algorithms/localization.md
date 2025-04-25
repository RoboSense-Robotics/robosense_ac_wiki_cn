# 定位  
**localization** 用于提供实时的相对定位信息或全局定位信息，该项目包含了以下两个模块： 
- msf_localization 是基于 **ESKF** 框架的融合定位模块，可提供只基于 **imu+轮速** 的相对定位信息以及融合 **点云定位结果** 的全局定位信息，该模块也可接入其他传感器观测进行后续拓展；
- lidar_localization 是基于点云地图的点云定位模块，使用 ceres 进行点云匹配，使用PCL进行点云预处理。  

该算法目前支持的计算平台如下表所示：

<table class="docutils align-default" style="width: 100%;">
    <tbody>
        <tr class="row-even centered-table-text">
            <td rowspan="2">计算平台</td>
            <td>通用 X86 架构计算机</td>
            <td>Radxa ROCK5B+</td>
            <td>OrangePi 5 Ultra</td>
            <td>NVIDIA Jetson Orin Nano Super</td>
            <td>NVIDIA Jetson AGX Orin</td>
            <td>D-Robotics RDK X5</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
        </tr>
        <tr class="row-even centered-table-text">
            <td>传感器</td>
            <td colspan="6">AC1</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>移动机器人</td>
            <td colspan="6">轮式移动平台</td>
        </tr>
    </tbody>
</table>

以下视频展示了在支持的计算平台上对移动轮式小车进行实时定位演示效果。

<div style="margin-bottom: 24px; position:relative; width:100%; padding-top: 50.28%;" class="video-container">
    <iframe src="https://cdn.robosense.cn/AC_wiki/localization_demo_wiki.mp4" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
</div>

视频数据：[Mobile wheeled vehicle](https://cdn.robosense.cn/AC_wiki/localization_demo.zip)  
详细代码：[AC1 Locatization](https://github.com/RoboSense-Robotics/robosense_localization)
