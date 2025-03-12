# 点云与视觉融合  
利用传感器自带 IMU 进行运动补偿，并将图像和点云相互映射，并对其进行可视化。  

以下视频提供了点云上色的实时演示效果，主要使用的硬件配置为：  

<table class="docutils align-default">
    <tbody>
        <tr class="row-even">
            <td>计算平台</td>
            <td>Radxa ROCK5B+ </td>
        </tr>
        <tr class="row-odd">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
    </tbody>
</table>   

<iframe style="margin-bottom: 24px;" width="100%" height="261" src="https://cdn.robosense.cn/AC_wiki/postprocess_nezha.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[Nezha](https://cdn.robosense.cn/AC_wiki/nezha.tar.gz)   

详细代码：[AC1 Color Lidar](http://gitlab.robosense.cn/super_sensor_sdk/ros2_sdk/postprocess) 