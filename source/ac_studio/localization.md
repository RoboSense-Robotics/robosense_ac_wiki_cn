# 定位  
**localization** 用于提供实时的相对定位信息或全局定位信息，该项目包含了以下两个模块： 
- msf_localization 是基于 **ESKF** 框架的融合定位模块，可提供只基于 **imu+轮速** 的相对定位信息以及融合 **点云定位结果** 的全局定位信息，该模块也可接入其他传感器观测进行后续拓展；
- lidar_localization 是基于点云地图的点云定位模块，使用 ceres 进行点云匹配，使用PCL进行点云预处理。  

以下视频提供了移动轮式小车定位实时演示效果，主要使用的硬件配置为：  

<table class="docutils align-default">
    <tbody>
        <tr class="row-even">
            <td>计算平台</td>
            <td>Radxa ROCK5B+</td>
        </tr>
        <tr class="row-odd">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
        <tr class="row-even">
            <td>移动机器人</td>
            <td>轮式移动平台</td>
        </tr>
    </tbody>
</table>  
<iframe style="margin-bottom: 24px;" width="100%" height="424" src="https://cdn.robosense.cn/AC_wiki/localization_demo.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[Rooftop](https://cdn.robosense.cn/AC_wiki/localization_demo.zip)  

详细代码：[AC1 Locatization](http://gitlab.robosense.cn/super_sensor_sdk/ros2_sdk/localization)  