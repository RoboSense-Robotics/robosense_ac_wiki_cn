# SLAM  
一个融合 LiDAR、视觉和 IMU 等多传感器紧耦合里程计系统。基于 HKU-MARS 实验室开源的 FAST-LIVO 工程开发，针对 Active Camera 进行专门的适配和优化，能够实时输出 Active Camera 的姿态，并生成带颜色信息的三维点云。  

该算法目前支持的计算平台如下表所示：

<table class="docutils align-default" style="width: 100%;">
    <tbody>
        <tr class="row-even centered-table-text">
            <td rowspan="2">计算平台</td>
            <td>通用 X86 架构计算机</td>
            <td>Radxa ROCK5B+</td>
            <td>OrangePi 5 Ultra</td>
            <td>NVIDIA Jetson Orin Nano Super</td>
            <td>D-Robotics RDK X5</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>●</td>
            <td>●</td>
            <td>○</td>
            <td>○</td>
            <td>○</td>
        </tr>
        <tr class="row-even centered-table-text">
            <td>传感器</td>
            <td colspan="5">AC1</td>
        </tr>
    </tbody>
</table>

以下视频展示了在支持的计算平台上对某景区进行离线 SLAM 的演示效果。

<iframe style="margin-bottom: 24px;" width="100%" height="264" src="https://cdn.robosense.cn/AC_wiki/AC1_2.0_zuopaotai.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[Climbing Spot](https://cdn.robosense.cn/AC_wiki/zuopaotai.zip)

以下视频展示了在支持的计算平台上对某景区欧式建筑进行离线 SLAM 的演示效果。

<iframe style="margin-bottom: 24px;" width="100%" height="264" src="https://cdn.robosense.cn/AC_wiki/shuichi_slam_demo.mp4" frameborder="0" allowfullscreen></iframe>

视频数据：[European architecture](https://cdn.robosense.cn/AC_wiki/shuichi.zip)  
详细代码：[AC1 SLAM](https://github.com/RoboSense-Robotics/robosense_ac_slam)
