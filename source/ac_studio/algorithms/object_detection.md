# 目标检测与识别  
通过 Yolo V8 检测模型对图像中的主要障碍物（例如人、车等）进行识别，得到目标的类别与位置。  

该网络目前支持的计算平台如下表所示：

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
            <td>模型大小</td>
            <td colspan="6">100M</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>传感器</td>
            <td colspan="6">AC1</td>
        </tr>
    </tbody>
</table>

以下视频展示了在支持的计算平台上对室内场景进行离线行人检测演示效果。

<div style="margin-bottom: 24px; position:relative; width:100%; padding-top: 72.98%;" class="video-container">
    <iframe src="https://cdn.robosense.cn/AC_wiki/target_detection_radxa_wiki.mp4" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
</div>

视频数据：[Foreground](https://cdn.robosense.cn/AC_wiki/target_detection_radxa.tar.gz)  
详细代码：[AC1 Pedestrian Detection](https://github.com/RoboSense-Robotics/robosense_ac_perception)
