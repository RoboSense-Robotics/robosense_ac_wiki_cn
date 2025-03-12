# SLAM  
一个融合 LiDAR、视觉和 IMU 等多传感器紧耦合里程计系统。基于 HKU-MARS 实验室开源的 FAST-LIVO 工程开发，针对 Active Camera 进行专门的适配和优化，能够实时输出 Active Camera 的姿态，并生成带颜色信息的三维点云。  

以下视频提供了攀登某景区的 SLAM 离线演示效果，主要使用的硬件配置为： 

<table class="docutils align-default">
    <tbody>
        <tr class="row-even">
            <td>计算平台</td>
            <td>CPU: Intel® Core™ i7-11700 @ 2.50GHz × 16 <br> MEM: 48GB </td>
        </tr>
        <tr class="row-odd">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
    </tbody>
</table> 

<iframe style="margin-bottom: 24px;" width="100%" height="264" src="https://cdn.robosense.cn/AC_wiki/AC1_2.0_zuopaotai.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[Climbing Spot](https://cdn.robosense.cn/AC1nezha.tar.gz)   

详细代码：[AC1 SLAM](http://gitlab.robosense.cn/super_sensor_sdk/ros2_sdk/slam)  
