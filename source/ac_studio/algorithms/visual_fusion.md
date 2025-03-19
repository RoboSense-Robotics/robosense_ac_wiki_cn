# 点云与视觉融合  
利用传感器自带 IMU 进行运动补偿，并将图像和点云相互映射，并对其进行可视化。  

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

以下视频展示了在支持的计算平台上进行实时点云上色的演示效果。

<div style="margin-bottom: 24px; position:relative; width:100%; padding-top: 56.25%;" class="video-container">
    <iframe src="https://cdn.robosense.cn/AC_wiki/postprocess_nezha.mp4" frameborder="0" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
</div>

视频数据：[Nezha](https://cdn.robosense.cn/AC_wiki/nezha.tar.gz)  
详细代码：[AC1 Color Lidar](https://github.com/RoboSense-Robotics/robosense_ac_postprocess)
