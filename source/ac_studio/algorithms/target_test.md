# 目标检测与识别  
通过 Yolo V8 检测模型对图像中的主要障碍物（例如人、车等）进行识别，得到目标的类别与位置。  

以下视频提供了室内场景的行人检测离线演示效果，主要使用的硬件配置为：  

<table class="docutils align-default" style="width: 100%;">
    <tbody>
        <tr class="row-even centered-table-text">
            <td>计算平台</td>
            <td>Radxa ROCK5B+ </td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
    </tbody>
</table>
<iframe style="margin-bottom: 24px;" width="100%" height="389" src="https://cdn.robosense.cn/AC_wiki/target_detection_radxa.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[Foreground](https://cdn.robosense.cn/AC_wiki/target_detection_radxa.tar.gz)  
详细代码：[AC1 Pedestrian Detection](https://github.com/RoboSense-Robotics/robosense_ac_perception)
